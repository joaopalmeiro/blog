# Notes

- https://docs.astro.build/en/guides/syntax-highlighting/
- https://fonts.google.com/?sort=date
- https://fontsource.org/?sort=newest
- https://vercel.com/font
- https://vercel.com/font?type=pixel
- https://pimpmytype.com/font/geist/
- https://tailwindcss.com/docs/list-style-type
- https://tailwindcss.com/docs/colors
- https://adrianroselli.com/2024/02/aria-note.html
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/note_role
- https://www.w3.org/WAI/GL/wiki/Using_HTML5_aside_element#Example_2:_the_%3Caside%3E_Element_with_ARIA
- https://smolweb.org/specs/element-aside.html
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header
- `<ul class="list-outside [&>li:nth-child(even)]:list-['-_'] [&>li:nth-child(odd)]:list-['+_']">`
- `<aside role="note"> Published on <time datetime={post?.createdAt}>{post?.createdAt}</time>. Last updated on <time datetime={post?.lastUpdatedAt}>{post?.lastUpdatedAt}</time > </aside>`
- `<span class="sr-only">. Published on: </span>`

## References

- https://paco.me/
- https://antfu.me/
- https://ped.ro/
- https://emilkowal.ski/
- https://frankchimero.com/
- https://delba.dev/
- https://sdrn.co/
- https://rauno.me/
- https://leerob.io/
- https://joebell.co.uk/
- https://bmrks.com/
- https://hirok.io/
- https://shud.in/
- https://www.aarv.me/
- https://www.leemartin.com/
- https://cretu.dev/
- https://marcel.fyi/
- https://pilcrow.vercel.app/
- https://samuelkraft.com/
  - `<time class="tabular-nums text-right shrink-0 text-secondary" datetime="2025-12-10">10 Dec 2025</time>`
  - https://samuelkraft.com/blog/using-sf-pro-rounded-with-react-native
- https://chronark.com/
- https://aacevski.com/
- https://ekar.site/
- https://rgllm.com/
- https://cv.jarocki.me/
- https://shadcn.com/
- https://www.sarasoueidan.com/
- https://adrianroselli.com/posts

## Commands

```bash
mkdir -p ~/Documents/kiro-blog && rsync -a --delete --exclude={'.git','.DS_Store','NOTES.md'} ~/Documents/GitHub/blog/ ~/Documents/kiro-blog
```

```bash
kiro ~/Documents/kiro-blog
```

## Snippets

- https://www.blog.gov.uk/

```html
<section class="govuk-grid-column-one-third latest">
  <h3 class="govuk-heading-m govuk-!-margin-bottom-4">Latest blog posts</h3>
  <ul class="govuk-list">
    <li>
      <h4 class="govuk-heading-s">
        <a href="https://digitaltrade.blog.gov.uk/2026/05/27/10-things-we-learned-running-rapid-ai-experiements/"
          >10 things we learned running rapid AI experiements</a
        >
      </h4>
      <div class="meta">
        <span class="govuk-visually-hidden">Posted on: </span>
        <time class="updated" datetime="2026-05-27T09:56:42+00:00" pubdate="">27 May 2026</time>
        -
        <span class="govuk-visually-hidden">On blog: </span>
        <a href="https://digitaltrade.blog.gov.uk">Digital trade</a>
      </div>
    </li>

    <li>
      <h4 class="govuk-heading-s">
        <a href="https://educationhub.blog.gov.uk/2026/05/how-we-are-helping-kids-stay-active-at-school/"
          >How we are helping kids stay active at school</a
        >
      </h4>
      <div class="meta">
        <span class="govuk-visually-hidden">Posted on: </span>
        <time class="updated" datetime="2026-05-27T09:16:57+00:00" pubdate="">27 May 2026</time>
        -
        <span class="govuk-visually-hidden">On blog: </span>
        <a href="https://educationhub.blog.gov.uk">The Education Hub</a>
      </div>
    </li>

    <li>
      <h4 class="govuk-heading-s">
        <a href="https://aphascience.blog.gov.uk/2026/05/27/a-badger-named-miriam/"
          >A&nbsp;badger&nbsp;named Miriam,&nbsp;and the&nbsp;50 years of science&nbsp;that&nbsp;followed</a
        >
      </h4>
      <div class="meta">
        <span class="govuk-visually-hidden">Posted on: </span>
        <time class="updated" datetime="2026-05-27T09:00:00+00:00" pubdate="">27 May 2026</time>
        -
        <span class="govuk-visually-hidden">On blog: </span>
        <a href="https://aphascience.blog.gov.uk">APHA Science Blog</a>
      </div>
    </li>

    <li>
      <h4 class="govuk-heading-s">
        <a
          href="https://defraenvironment.blog.gov.uk/2026/05/26/the-wildlife-rich-habitat-fund-bringing-even-more-buzz-to-protected-landscapes/"
          >The&nbsp;Wildlife-Rich Habitat&nbsp;Fund:&nbsp;Bringing&nbsp;even&nbsp;more buzz to&nbsp;Protected
          Landscapes&nbsp;</a
        >
      </h4>
      <div class="meta">
        <span class="govuk-visually-hidden">Posted on: </span>
        <time class="updated" datetime="2026-05-26T16:20:58+00:00" pubdate="">26 May 2026</time>
        -
        <span class="govuk-visually-hidden">On blog: </span>
        <a href="https://defraenvironment.blog.gov.uk">Environment</a>
      </div>
    </li>
  </ul>
  <p class="govuk-body">
    <a class="govuk-link" href="https://www.blog.gov.uk/all-posts/">See all blog posts</a>
  </p>
</section>
```
