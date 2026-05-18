# RSH Family Foundation Static Website

This is a static, build-free website package designed for Amazon S3 static website hosting and GitHub testing/GitHub Pages.

## Folder structure

```text
rsh-family-foundation-s3-site/
├── index.html
├── about.html
├── impact.html
├── donate.html
├── contact.html
├── assets/
│   └── images/
│       └── rsh-family-foundation-logo.png
├── components/
│   ├── header.html
│   └── footer.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Launch on Amazon S3

1. Create an S3 bucket.
2. Enable static website hosting.
3. Upload all files and folders in this package to the bucket root.
4. Set `index.html` as the index document.
5. Set `404.html` if you add one later. This package does not require one.
6. Make files publicly readable through your bucket policy or serve through CloudFront.
7. If using CloudFront, invalidate cache after updates.

## Test with GitHub

This site uses relative paths and no build step. You can test it through GitHub Pages by pushing the files to a repository and enabling Pages from the repository root.

Note: the shared header and footer are loaded with JavaScript `fetch()`. They work when served over HTTP/HTTPS, such as GitHub Pages, S3 static hosting, CloudFront, or a local test server. Opening `index.html` directly from your file system may block those includes in some browsers.

For local testing, run this from the folder:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Required launch edits

Search the project for these placeholders before launch:

- `GIVEBUTTER_CAMPAIGN_URL` — replace with the live Givebutter campaign link or slug.
- `https://formspree.io/f/REPLACE_FORM_ID` — replace with a static form handler, AWS endpoint, or remove the form.
- `replace-with-email@example.com` — replace with Randy Harden's preferred email.
- `replace with Randy's preferred phone number` — replace with Randy's phone number or remove it.
- YouTube iframe placeholders — replace with Randy's approved Rise Up Kings video embed URL.

## Givebutter integration note

After the Givebutter campaign is created, you can either:

1. Keep buttons linking to the Givebutter campaign URL, or
2. Paste Givebutter's official embed/widget code into `donate.html` inside the donation box.

