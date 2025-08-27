# PescArt România — Next.js App (1:1 remake)

Acesta este un remake 1:1 în **Next.js (App Router)** al proiectului din arhivă. 
Design-ul și funcționalitățile rămân identice: autentificare, înregistrare record, hartă cu locuri, leaderboard, profil utilizator, panou admin pentru validare.

## Stack
- Next.js 14 + App Router
- TypeScript
- Tailwind (design identic cu shadcn/ui)
- React Query
- API Routes care clonează rutele Express
- Stocare: memorie (în acest demo). Ușor de migrat la Postgres (Neon/Supabase) cu Drizzle.

## Pornire locală
```bash
npm install
cp .env.example .env
npm run dev
```

Apoi deschide http://localhost:3000

## Deploy pe Vercel
- Importă repo-ul în Vercel
- Setează `JWT_SECRET` în Environment Variables
- (Opțional) Configurează Postgres și setează `DATABASE_URL` când dorești persistență reală

## Notă despre date
Momentan **storage-ul** este in-memory (la fel ca mock-ul original). Dacă vrei persistență, îți pot migra rapid `src/server/storage.ts` la Drizzle + Neon.

---

Proiectul a copiat componentele UI și paginile din arhivă, a adaptat routing-ul (Next Link + `useParams`) și a portat toate rutele de API.
