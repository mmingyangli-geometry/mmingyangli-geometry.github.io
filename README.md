# Mingyang Li — academic homepage

This revision starts from the public GitHub repository downloaded on November 8, 2026. It uses ordinary HTML, CSS, a small disclosure-control script, and MathJax. There is no build step.

The design uses plain Arial/Helvetica typography, compact numbered paper entries, simple expandable explanations, and a dark left navigation column. On small screens, navigation moves to the top. The newest paper appears beneath the contact information and in the research list, marked with a small colored “New” label. The revision preserves the current repository content and adds the November 4 paper update and recent talk history. The larger photograph uses the original 6000 × 4000 image supplied on November 8, displayed at its natural 3:2 aspect ratio without cropping.

## Preview

Open `index.html` in a browser while connected to the internet. MathJax loads from jsDelivr. You can also serve the folder locally with `python3 -m http.server 8766` and visit `http://localhost:8766/`.

## Update the existing GitHub website

In the `mmingyangli-geometry/mmingyangli-geometry.github.io` repository, choose **Add file → Upload files**. Upload these files from inside this folder:

- `index.html`
- `talks.html`
- `teaching.html`
- `resume.html`
- `styles.css`
- `site.js` (new)
- `assets/portrait.jpg` (replaced with the original photograph)
- `papers/compact-toric-einstein.pdf` (updated to the 152-page arXiv v2)

Upload `README.md` as well if you want these instructions in the repository. Commit to the existing publishing branch, `main`. GitHub Pages will use your existing Pages settings.

Keep the files at the repository root, preserving the `assets/` and `papers/` subfolders. Do not upload the ZIP itself or an extra enclosing `github-homepage-revised` folder. Replace `assets/portrait.jpg` and `papers/compact-toric-einstein.pdf` with the updated copies in this package. Keep the existing font assets and the other paper PDF. Complete copies of all required files are included for a self-contained preview or fresh installation.

If you have changed the online website since November 8, 2026, merge those changes before replacing files.

## Edit content

| Content | File |
| --- | --- |
| Biography, research papers, descriptions | `index.html` |
| Talks and recordings | `talks.html` |
| Teaching | `teaching.html` |
| Text résumé | `resume.html` |
| Font sizes, spacing, colors, mobile layout | `styles.css` |
| Expand/collapse all paper details | `site.js` |
| Photograph | `assets/portrait.jpg` |
| Paper PDFs | `papers/` |

Each paper in `index.html` is an `<article class="paper">` inside an `<li>`. Copy a complete `<li>…</li>` entry to add a paper, and give the article and its `<details>` element unique IDs. Keep the short introduction outside `<details>` and the longer text inside `.explanation`. Add the paper to the résumé publication list as well.

The first paper's title links to arXiv; its separate PDF link opens `papers/compact-toric-einstein.pdf`. Replace a PDF with the same filename to update it without changing links.

Inline mathematics uses `$...$`; display mathematics uses `$$...$$`. For example:

```html
<p>We consider a cone angle $2\pi\beta$.</p>
$$\chi(X) \geq 3|\tau(X)|.$$
```

To mark a newly added paper, put `<span class="new-label">New</span>` after its title link, inside the heading. Remove this small label when the paper is no longer recent.

The introduction also has a `.profile-news` paragraph beneath the contact information. Update its title and link when you want to highlight a different paper.

Native `<details>` controls work without JavaScript. The optional `site.js` adds an expand/collapse-all control. The main navigation is repeated in the four HTML files, so update all four if you change a tab.

The earlier Source Sans and Source Serif assets and licenses are retained for compatibility, but this design uses system fonts and does not load those files.

## November 2026 content updates

- Compact toric Einstein four-manifolds: 152-page arXiv v2, November 4, 2026. The expanded description includes smooth compactness for normalized metrics with bounded Euler characteristic and the corresponding updated AI attribution. Source: https://arxiv.org/abs/2610.10425v2
- The hosted toric paper PDF is replaced with this version. Its URL remains the same.
- Stony Brook (October 27), McMaster (October 29), and Duke (November 2) are in the past-talk list. Both Talks and Résumé now contain the same 38 previous entries.
- Talk histories show the seminar or event name first, followed by the institution or location on the next line. Talk recordings retain their descriptive titles.
- Vanderbilt remains upcoming, with the workshop dates November 14–15; an individual speaking date is not asserted.

Talk sources:

- https://www.math.stonybrook.edu/cal/agenda.php?LocationID=103
- https://math.mcmaster.ca/events/geometry-topology-seminar-mingyang-li-stony-brook/
- https://math.duke.edu/events/moduli-spaces-and-classification-toric-einstein-four-manifolds
- https://as.vanderbilt.edu/math/2026/09/27/shanks-workshop-facets-of-complex-differential-geometry/
