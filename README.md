# Zero Mile EduTech — zemet.org

Single-page static website for Zero Mile EduTech, served at **https://zemet.org**.

There is **no build step**. Production is deployed with Wrangler direct upload from a clean `git archive` snapshot. Until Cloudflare Pages Git integration is connected, pushing to `master` does **not** auto-deploy.

## Structure

- `index.html` — the whole site (About, Services, Tech stack, Contact)
- `404.html` — not-found page
- `assets/css/main.css` — compiled from the old Gatsby SCSS (Photon template);
  `assets/css/font-awesome.min.css` + `assets/fonts/` — icons
- `assets/images/` — only the images the site uses
- `favicon.png` — site icon
- `_redirects` — Cloudflare Pages redirect: `www.zemet.org` → apex `zemet.org`
- `_headers` — Cloudflare Pages security headers
- `netlify.toml` — legacy Netlify config; ignored by Cloudflare (remove after cutover)

## Deploying with Cloudflare Pages + Wrangler

Cloudflare project: `zemet`  
Production branch: `master`  
Production Pages URL: `https://zemet.pages.dev`

Direct-upload deploy from the repo root:

```bash
DEPLOY_DIR=/tmp/zemet-cloudflare
rm -rf "$DEPLOY_DIR" && mkdir -p "$DEPLOY_DIR"
git archive HEAD | tar -x -C "$DEPLOY_DIR"
wrangler pages deploy "$DEPLOY_DIR" --project-name=zemet --branch=master
```

Use a clean `git archive` snapshot so `.git/`, `.netlify/`, and `.wrangler/` are never uploaded. Local preview:

```bash
python3 -m http.server 8123
```

## Pointing zemet.org at Cloudflare Pages

In Cloudflare dashboard: **Workers & Pages → `zemet` → Custom domains** → add:

- `zemet.org` (set as primary/canonical)
- `www.zemet.org`

Because the zone already lives in Cloudflare, adding these custom domains should automatically create the DNS records and SSL certificate. The repo `_redirects` rule already forces:

`https://www.zemet.org/* → https://zemet.org/:splat` (301)

If Cloudflare does not auto-create DNS, add these records manually in **zemet.org → DNS**:

- `www` → `CNAME` → `zemet.pages.dev` (Proxied ON, TTL Auto)
- `@`/apex → `CNAME` → `zemet.pages.dev` (Proxied ON, TTL Auto; Cloudflare flattens apex CNAME)
- Remove any old conflicting `A`/`CNAME`/redirect records pointing to Netlify or parking pages.

DNS can take up to 24h to propagate (usually minutes). Then verify:

```bash
curl -sI https://zemet.org | head -3
curl -sI https://www.zemet.org | head -3
```

Expected: apex `200`, `www` `301` to `https://zemet.org/`.

## Notes / to-do

- Contact email is `rakesh@zemet.org` (update it in `index.html` if it ever changes).
- The old Google Analytics (UA-…) snippet and the old `goo.gl` map iframe were
  removed (both services are shut down). The contact section now links to a
  Google Maps search for the address instead.
- The previous Gatsby v2 toolchain was removed: it could no longer build on
  modern Node images. Site history is preserved in git.
- After `zemet.org` is verified on Cloudflare: delete/disable the Netlify site,
  revoke the Netlify token, and remove legacy `netlify.toml` + `.netlify/`.
