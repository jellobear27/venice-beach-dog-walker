-- Create contest entries table
CREATE TABLE IF NOT EXISTS contest_entries (
  id BIGSERIAL PRIMARY KEY,
  dog_name TEXT NOT NULL,
  breed TEXT NOT NULL,
  fun_fact TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create storage bucket for contest photos if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('contest-photos', 'contest-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policy to allow public access to contest photos
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'contest-photos');

-- Set up storage policy to allow anonymous uploads to contest photos bucket
CREATE POLICY "Anonymous uploads" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'contest-photos');

-- Enable RLS on the objects table but allow anonymous operations
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY; 