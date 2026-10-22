# J. M. Ecclestone — complete landing page

Latest approved landing page and launch fixes, 22 October 2026.
Source revision: ff206dd8c4295c72253a316b3c9560e1371b6e7f

## Upload to GitHub

1. Extract this ZIP on your computer.
2. Open the website repository on GitHub and choose Add file > Upload files.
3. Upload the extracted contents, including the assets and images folders. Do not upload just the ZIP.
4. Keep index.html at the repository root, beside privacy.html and the other legal pages.
5. Commit the upload.

A GitHub repository stores the files. Hosting must be enabled separately for visitors to see the website.
For GitHub Pages, publish the branch containing these files from its root directory. For Cloudflare static hosting, use this repository root as the static site output. There is no build step and no package installation.

If this repository already serves a different live website, use a separate branch to review the replacement before changing the published branch.

## Included

- The landing page: hero, About, all three books, reviews, Reader Club and contact.
- All current images, original colour book covers, styles and animations.
- Optimised hero and About images, with the approved original image files retained.
- Privacy, cookie, terms, copyright and accessibility pages.
- Existing navigation, footer, Dorset Division credit, Amazon links and review quotations.
- robots.txt, sitemap.xml and social sharing metadata.

The private preview toolbar is omitted: it is an inspection tool, not part of the public landing page.
No Sites project identity, Git history, credentials or test submissions are included.

## Reader Club — the selected email-request option

The form validates the name, email address and consent checkbox, then prepares an email request.
The reader selects Open your sign-up email and presses Send in their own email app.
Requests go to dorsetdivision@gmail.com for manual administration.
A direct email link is also available. A configured email app, or sending the request manually through webmail, is required.

This is not an automatic mailing-list integration, and preparing the request does not send an email or automatically subscribe the reader. No API keys or server backend are needed for the selected flow.

## Book links

The Author's Cut: https://amzn.eu/d/06iS5G6O
The Repercussions: https://amzn.eu/d/0b1v3xwc
Nothing But The Truth?: Coming Soon; no purchase link.

The review invitation uses the supplied book links and explains how to find the review controls on Amazon. Existing individual review-card links are unchanged.

## Domain and local viewing

The canonical URLs, social metadata, structured data, robots.txt and sitemap.xml currently use https://www.jmecclestone.com/ . If the final public address is different, update those references before launch.
Fonts are loaded from Google Fonts and require an internet connection. Local assets and book covers are included in this ZIP.
To inspect locally, open index.html in a browser. Use a local static web server if your browser restricts local files.
The export does not change DNS, the live domain, GitHub or Cloudflare settings, or the private preview's access rules.

## Checks completed

Desktop and mobile layout inspected. No horizontal overflow at the tested desktop and mobile widths. Book cover proportions checked. Blurb words, original images, Amazon purchase links and existing review-card URLs verified against the approved source. Reader Club required-field validation and prepared-email recipient/content checked. No email was sent during testing.
