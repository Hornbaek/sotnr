-- Create role-based access control system
create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Security definer function to check roles without RLS recursion
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Fix waitlist email enumeration vulnerability
DROP POLICY IF EXISTS "Users can only view their own waitlist entry" ON public.waitlist;

-- Add admin-only SELECT policy for waitlist
CREATE POLICY "Only admins can view waitlist"
ON public.waitlist
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Add write protection policies for journal_posts
CREATE POLICY "Only admins can create journal posts"
ON public.journal_posts
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update journal posts"
ON public.journal_posts
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete journal posts"
ON public.journal_posts
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to manage user_roles
CREATE POLICY "Admins can manage user roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));