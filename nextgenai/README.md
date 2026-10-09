# NextGenAI website (static + Vercel serverless form)
Deploy: push this folder to GitHub, import it in Vercel (no build command, no framework), then set environment variables:
- RESEND_API_KEY (from resend.com)  - CONTACT_TO (optional, defaults to shahiqealikazmi@gmail.com)  - MAIL_FROM (optional; use a verified domain in production)
Before launch: replace YOUR-DOMAIN.vercel.app in sitemap.xml, robots.txt and the og:url tags; add the founder photo; review privacy and terms with a lawyer.
Edit content by changing build.py and running `python3 build.py`.
