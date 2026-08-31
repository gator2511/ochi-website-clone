ALTER TABLE portal_clients
  ADD COLUMN IF NOT EXISTS failed_login_count INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS locked_until TIMESTAMPTZ;

CREATE TABLE IF NOT EXISTS portal_login_audit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  client_id UUID REFERENCES portal_clients(id) ON DELETE SET NULL,
  success BOOLEAN NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS portal_login_audit_email_attempted_idx
  ON portal_login_audit(email, attempted_at DESC);

CREATE INDEX IF NOT EXISTS portal_login_audit_ip_attempted_idx
  ON portal_login_audit(ip_address, attempted_at DESC);
