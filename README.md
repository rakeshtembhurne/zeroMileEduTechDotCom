# Zero Mile EduTech — zemet.org

Single-page static website for Zero Mile EduTech, served at **https://zemet.org**.

There is **no build step**: Netlify serves the repo root directly (`publish = "."`
in `netlify.toml`, no build command). Any push to `master` redeploys automatically.

## Structure

- `index.html` — the whole site (About, Services, Tech stack, Contact)
- `404.html` — not-found page
- `assets/css/main.css` — compiled from the old Gatsby SCSS (Photon template);
  `assets/css/font-awesome.min.css` + `assets/fonts/` — icons
- `assets/images/` — only the images the site uses
- `favicon.png` — site icon
- `netlify.toml` — publish dir + security headers

## Deploying to a new Netlify account

The old Netlify site lived in a different account and cannot be moved from this
repo alone — you must create a new site in your new account:

1. Log in to your **new** Netlify account → **Add new site → Import an existing project**.
2. Connect GitHub and select this repo (`zeroMileEduTechDotCom`).
3. Build settings are read from `netlify.toml` automatically:
   - **Build command:** (none / empty)
   - **Publish directory:** `.`
4. **Deploy site.** You’ll get a `*.netlify.app` URL — verify the site there first.

## Pointing zemet.org at the new site

The Netlify site is `zemet-org` (`https://zemet-org.netlify.app`). In its
**Site settings → Domain management → Add custom domain**, add `zemet.org`
and `www.zemet.org`, then set `zemet.org` as the primary domain.
Netlify provisions HTTPS automatically (Let’s Encrypt). A redirect rule in
`netlify.toml` already forces `www.zemet.org/*` → `https://zemet.org/:splat`
(301), so the apex is canonical.

Then at your domain registrar (wherever zemet.org is registered), either:

- **Option A — Netlify DNS (simplest):** in Netlify choose “Set up Netlify DNS”,
  then change zemet.org’s nameservers at the registrar to the four Netlify
  nameservers shown. Netlify then manages records + SSL for apex and `www`.
- **Option B — external DNS:** keep the registrar’s nameservers and add:
  - Apex `zemet.org` → `A` record `75.2.60.5` (Netlify load balancer)
  - `www` → `CNAME` to `<your-site>.netlify.app`

DNS can take up to 24h to propagate (usually minutes). Once live, HTTPS is
enabled automatically.

## Notes / to-do

- Contact email is `rakesh@zemet.org` (update it in `index.html` if it ever changes).
- The old Google Analytics (UA-…) snippet and the old `goo.gl` map iframe were
  removed (both services are shut down). The contact section now links to a
  Google Maps search for the address instead.
- The previous Gatsby v2 toolchain was removed: it could no longer build on
  modern Node/Netlify images. Site history is preserved in git.
