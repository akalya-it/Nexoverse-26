# NEXOVERSE'26 LOGO HUNT

A Next.js + Supabase live logo hunt game.

## Features

- Organiser login
- Participant join
- Question creation
- Logo/image upload to Supabase Storage
- Ordered rounds/questions
- Live game state without refresh
- Server-side atomic buzzer priority
- One buzz per participant per question
- Winner-only answer input
- Organiser answer judging
- Correct/wrong flow and buzzer reopen
- Scores and live organiser dashboard

## Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL Editor.
3. Create `.env.local` from `.env.example`.
4. Fill Supabase URL, publishable key, service-role key and `SESSION_SECRET`.
5. Keep organiser credentials server-side.
6. Run:
   npm install
   npm run dev

## Vercel

Add the same environment variables under Project Settings → Environment Variables and redeploy.

## Important

`SUPABASE_SERVICE_ROLE_KEY` must never be prefixed with `NEXT_PUBLIC_` and must never be used in browser/client code.

The starter uses short polling for live synchronization, which works on Vercel without a separate persistent WebSocket server. The first-buzzer decision is still made atomically in PostgreSQL through `record_buzz`.
