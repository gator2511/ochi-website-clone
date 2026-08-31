CREATE TABLE IF NOT EXISTS portal_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  company_name TEXT NOT NULL,
  contact_name TEXT,
  access_code_hash TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'disabled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_login_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS portal_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES portal_clients(id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS portal_sessions_client_idx ON portal_sessions(client_id);
CREATE INDEX IF NOT EXISTS portal_sessions_expires_idx ON portal_sessions(expires_at);

CREATE TABLE IF NOT EXISTS portal_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES portal_clients(id) ON DELETE CASCADE,
  sender_role TEXT NOT NULL CHECK (sender_role IN ('client', 'admin')),
  sender_name TEXT NOT NULL,
  body TEXT NOT NULL CHECK (char_length(body) <= 5000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS portal_messages_client_created_idx ON portal_messages(client_id, created_at);

CREATE TABLE IF NOT EXISTS portal_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES portal_clients(id) ON DELETE CASCADE,
  uploader_role TEXT NOT NULL CHECK (uploader_role IN ('client', 'admin')),
  file_kind TEXT NOT NULL DEFAULT 'project_file' CHECK (file_kind IN ('project_file', 'contract', 'welcome_letter', 'brand_guideline', 'other_document')),
  title TEXT,
  original_name TEXT NOT NULL,
  storage_key TEXT NOT NULL UNIQUE,
  content_type TEXT NOT NULL DEFAULT 'application/octet-stream',
  size_bytes BIGINT NOT NULL CHECK (size_bytes >= 0 AND size_bytes <= 52428800),
  upload_status TEXT NOT NULL DEFAULT 'pending' CHECK (upload_status IN ('pending', 'ready', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS portal_files_client_created_idx ON portal_files(client_id, created_at DESC);

CREATE TABLE IF NOT EXISTS portal_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID NOT NULL REFERENCES portal_clients(id) ON DELETE CASCADE,
  consent_type TEXT NOT NULL DEFAULT 'marketing_material_use',
  consent_version TEXT NOT NULL,
  accepted BOOLEAN NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS portal_consents_client_recorded_idx ON portal_consents(client_id, recorded_at DESC);
