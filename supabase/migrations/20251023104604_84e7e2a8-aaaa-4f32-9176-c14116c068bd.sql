-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Create policy to prevent viewing others' entries
CREATE POLICY "Users can only view their own waitlist entry"
ON public.waitlist
FOR SELECT
USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create journal_posts table
CREATE TABLE public.journal_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published BOOLEAN DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.journal_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read published posts
CREATE POLICY "Anyone can view published journal posts"
ON public.journal_posts
FOR SELECT
USING (published = true);

-- Create index for faster queries
CREATE INDEX idx_journal_posts_published ON public.journal_posts(published, created_at DESC);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);