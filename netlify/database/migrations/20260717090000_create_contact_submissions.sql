CREATE TABLE IF NOT EXISTS contact_submissions (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name TEXT NOT NULL,
	company TEXT NOT NULL,
	goal TEXT NOT NULL,
	deadline DATE,
	budget TEXT NOT NULL,
	email TEXT NOT NULL,
	details TEXT,
	privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
	status TEXT NOT NULL DEFAULT 'new',
	source TEXT NOT NULL DEFAULT 'netlify-form',
	raw_data JSONB NOT NULL DEFAULT '{}'::jsonb,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
	ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS contact_submissions_email_idx
	ON contact_submissions (email);

CREATE INDEX IF NOT EXISTS contact_submissions_status_idx
	ON contact_submissions (status);
