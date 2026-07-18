ALTER TABLE contact_submissions
	ALTER COLUMN deadline TYPE TEXT
	USING deadline::text;
