# GT Marketing Client Portal Setup

The portal is intentionally not linked from the public website, not included in the XML sitemap, and is blocked from search crawlers.

## Private URLs

- Client login: `https://gtmarketing.io/client-portal`
- GT Marketing administration: `https://gtmarketing.io/client-portal/admin`

Share the client URL manually. Do not publish the administration URL.

## 1. Netlify Database

The portal uses the existing Netlify Database integration for client accounts, sessions, chat messages, file metadata and consent records.

The migration is stored at:

`netlify/database/migrations/20260831115000_create_client_portal.sql`

Netlify applies the migration automatically during the deploy lifecycle.

## 2. Admin secret

Add a strong secret in Netlify:

Project configuration → Environment variables

Create:

`PORTAL_ADMIN_SECRET`

Use a randomly generated value of at least 32 characters. Do not reuse a normal account password.

The administration page asks for this secret and keeps it only in browser session storage. Closing the browser session removes it.

## 3. Secure file storage for files up to 50 MB

Files are uploaded directly from the browser to an S3-compatible private object store using short-lived signed URLs. This avoids the Netlify Functions request-body limit and allows individual files up to 50 MB.

Cloudflare R2 is a suitable option, but another private S3-compatible store can be used.

Create a private bucket and add these Netlify environment variables:

- `PORTAL_STORAGE_ENDPOINT`
- `PORTAL_STORAGE_BUCKET`
- `PORTAL_STORAGE_ACCESS_KEY_ID`
- `PORTAL_STORAGE_SECRET_ACCESS_KEY`
- `PORTAL_STORAGE_REGION`

For Cloudflare R2:

- `PORTAL_STORAGE_ENDPOINT=https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
- `PORTAL_STORAGE_REGION=auto`

The bucket must remain private. Do not enable a public bucket URL.

### R2 CORS

Allow browser uploads from the GT Marketing production domain. Example R2 CORS policy:

```json
[
  {
    "AllowedOrigins": [
      "https://gtmarketing.io",
      "https://www.gtmarketing.io"
    ],
    "AllowedMethods": ["GET", "PUT", "HEAD"],
    "AllowedHeaders": ["Content-Type"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

If testing uploads on a Netlify preview URL, temporarily add that exact preview origin to `AllowedOrigins` and remove it after testing.

## 4. Registering a client

Open the private administration page and enter `PORTAL_ADMIN_SECRET`.

Use **Add client** and enter:

- Company name
- Contact name
- Registered email address
- Optional custom access code

If no access code is entered, the portal generates one in the format:

`GTM-XXXX-XXXX-XXXX`

Copy the code immediately and send it to the client separately. The plaintext code is not retained. Only a salted scrypt hash is stored in the database.

The client signs in using the registered email address plus that unique code.

## 5. Client-specific workspace

Each authenticated client can only access records associated with their own database client ID. The client ID is resolved from the server-side session cookie rather than accepted from the browser.

The workspace contains:

- Private chat with GT Marketing
- Multiple file uploads, maximum 50 MB per file
- Project files
- Signed contract
- Welcome letter
- Brand guidelines and other project documents
- Marketing-material/data consent record
- Privacy information

GT Marketing can upload documents and reply to messages from the hidden administration page.

## 6. File security

The browser first requests a short-lived upload URL from the authenticated portal API. After upload, the server verifies the object size with the storage provider. Files over 50 MB are rejected and deleted.

Downloads are also issued as short-lived signed URLs. Storage object keys are never exposed as permanent public URLs.

## 7. Privacy controls

The portal:

- is not included in public navigation or the footer
- is not included in `sitemap.xml`
- uses `noindex, nofollow, noarchive, nosnippet`
- is disallowed in `robots.txt`
- does not load GT Marketing Google Analytics
- does not load the public website navbar/footer
- uses secure, HttpOnly, SameSite=Strict session cookies
- expires client sessions after 8 hours
- records the latest project-material consent state and timestamp

The portal notice instructs clients not to upload passwords, payment card details, government identifiers, health information or other highly sensitive information unless specifically requested and appropriate handling has been agreed.

## 8. Recommended launch test

Before sending the link to a real client:

1. Create a test client in the admin page.
2. Sign in to the client portal in a private/incognito window.
3. Send a message from the client and reply from the admin page.
4. Upload multiple test files, including a file close to 50 MB.
5. Upload a signed-contract test PDF and welcome-letter test PDF from the admin page.
6. Confirm the client can download only their own files.
7. Record consent, refresh, and confirm the status persists.
8. Disable the client in admin and confirm the existing session is terminated.
9. Re-enable the client and confirm the original email/code combination works again.

## Important

The portal provides technical access controls and privacy notices, but the final wording of client consent, privacy collection notices, records retention and contractual terms should be reviewed against GT Marketing's actual business practices and legal obligations before relying on it as legal documentation.
