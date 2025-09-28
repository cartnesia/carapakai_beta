# Carapak.AI — Prompt Library (Next.js + Supabase)

MVP fullstack untuk situs prompt seperti copasprompt, dengan katalog, detail prompt, submit (pending), dan dashboard admin sederhana.

## Setup
1. Buat project **Supabase** dan isi `.env.local` (copy dari `.env.example`).
2. Jalankan SQL `supabase/schema.sql` di Supabase SQL Editor.
3. Jalankan:
   ```bash
   npm i
   npm run dev
   ```
4. Buka `http://localhost:3000`.
5. Set `ADMIN_PASSWORD` di env untuk akses `/admin` (simple guard).

## Deploy (Vercel)
- Set Environment Variables (Supabase URL/Anon Key, ADMIN_PASSWORD).
- Deploy dari repo GitHub yang berisi project ini.
