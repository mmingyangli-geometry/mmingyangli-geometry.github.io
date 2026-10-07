# Mingyang Li — GitHub homepage

An academic website with Research, Talks, Teaching, and Résumé pages, LaTeX formulas, and expandable paper descriptions. It uses ordinary HTML, CSS, and MathJax. There is no build step and no software to install.

## Publish on GitHub Pages

1. Sign in at https://github.com. Create a **public** repository named `mmingyangli-geometry.github.io`.
2. Upload the **contents of this folder** into the repository: `index.html`, `talks.html`, `teaching.html`, `resume.html`, `styles.css`, and the complete `assets` folder. Upload `.nojekyll` too if your file picker shows hidden files. The homepage must be `index.html` at the repository root, not inside another folder. You can use **Add file → Upload files** on GitHub. A ZIP file by itself will not create the website; unzip it first.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)**. Click **Save**.
4. Wait for GitHub to finish publishing. The Pages settings screen will show the published URL: `https://mmingyangli-geometry.github.io/`.

If a repository with that name already exists, keep its current contents backed up and integrate this draft into that site instead of replacing files blindly.

Official instructions: https://docs.github.com/en/pages/quickstart

## Edit your homepage

Open `index.html` in your GitHub repository, click the pencil icon, edit the text, and choose **Commit changes**. GitHub Pages will publish the update automatically. You can also edit the file on your computer in any text editor and upload the revised file.

- Biography and contact details are near the top of `index.html`, inside `<header class="profile">`.
- Talks are in `talks.html`, teaching is in `teaching.html`, and the text résumé is in `resume.html`.
- The navigation bar is repeated near the top of each HTML file. If you change a tab name or add a page, update that bar in all four files.
- If you add a paper, also add it to the publication list in `resume.html`.
- Each paper is an `<article class="paper">` section. Copy one complete article to add a paper.
- Put the short introduction outside `<details>` and the longer explanation inside it.
- Paper links use `<a href="https://...">Paper title</a>`.
- Your portrait is `assets/portrait.jpg`.
- Appearance, spacing, and mobile layout are in `styles.css`.
- The site uses Source Sans 3 for text and Source Serif 4 for headings. The font files and their open-source licenses are in `assets/fonts/`. The fonts are served by your website, without a Google Fonts request.

Keep the HTML tags around the text. In ordinary HTML text, write `&lt;` for a less-than sign and `&amp;` for an ampersand. Within mathematics, use LaTeX commands such as `\lt` rather than a literal less-than sign.

## Write mathematics

Inline math uses single dollar signs:

```html
The self-dual Weyl curvature is $W^+$, and the second Betti number is $b_2$.
```

Displayed math uses double dollar signs:

```html
<div class="criterion">
  $$\chi(X) \geq 3|\tau(X)|.$$
</div>
```

An expandable explanation looks like this:

```html
<p>A short introduction to the paper.</p>
<details>
  <summary>About this paper</summary>
  <div class="explanation">
    <p>The detailed explanation goes here, with inline math such as $T^2$.</p>
    $$\operatorname{Ric}(g)=\lambda g.$$
  </div>
</details>
```

MathJax is configured near the top of `index.html`. It recognizes `$...$`, `$$...$$`, `\(...\)`, and `\[...\]`. It also defines the convenience macros `\R` and `\CP`. Custom macros can be added to the same configuration. Backslashes in JavaScript macro definitions must be doubled; backslashes in the HTML mathematical text are written normally.

MathJax and its fonts load from jsDelivr, so formulas require an internet connection. The biography, links, and expandable sections work without JavaScript. If you later prefer all assets to be self-hosted, MathJax can be downloaded and included in this repository.

MathJax documentation: https://docs.mathjax.org/en/latest/web/start.html

## Preview before publishing

Double-click `index.html` to open it in a browser while connected to the internet. Click **About this paper** beneath a paper to expand its description.

## Content sources

The biography, portrait, contact details, and existing publication links were carried over from https://sites.google.com/view/mingyangli on October 7, 2026. Research descriptions were lightly edited for readability and mathematical typography. The new toric Einstein paper summary follows the manuscript and wording discussed in this chat. The new Talks, Teaching, and Résumé pages combine the live Google Sites pages with the résumé PDF embedded there. The résumé is ordinary HTML text, not a PDF attachment. Talk lists include 34 previous presentations (merging both sources), three upcoming events, and two recordings. Course names and the Spring 2026 coordinator role come from the résumé. The new toric Einstein paper is included in both Research and Résumé. The published title and citation of On conical asymptotically flat manifolds were checked against the publisher record: https://www.global-sci.com/jms/article/view/13502. The primary email link was made consistent with the address displayed on the homepage and in the supplied manuscript.

This folder is a prepared draft. Creating these files does not publish a website or change the existing Google Site.

Additional migration sources:

- https://sites.google.com/view/mingyangli/talks
- https://sites.google.com/view/mingyangli/teaching
- https://sites.google.com/view/mingyangli/resume
- https://drive.google.com/file/d/1nuoIItp3XBHLcXCD5-vslqMkAXdD_UOG/view
