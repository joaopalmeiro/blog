# Notes

- https://docs.astro.build/en/guides/syntax-highlighting/
  - https://shiki.style/themes
  - https://shiki.style/guide/load-theme
  - https://textmate-grammars-themes.netlify.app/
  - https://github.com/withastro/astro/issues/8001
  - https://docs.astro.build/en/guides/syntax-highlighting/#adding-your-own-shiki-theme
  - https://www.npmjs.com/package/tm-themes
  - Colors: https://github.com/catppuccin/catppuccin
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
- https://docs.astro.build/en/basics/astro-components/#transferring-slots: `<slot name="head" />`
- https://webaim.org/techniques/skipnav/
- https://github.com/GoogleChrome/modern-web-guidance-src/blob/8054205dd2d58e2e88a311f239714d3fe9d4f497/guides/accessibility/accessibility/guide.md?plain=1#L22: `- **Provide skip links** prior to repeated content like site headers with navigation or long/infinite lists, so that keyboard users can easily bypass them. Make sure the target is focusable (e.g. `<main id="content" tabindex="-1">`).`
- https://heroicons.com/micro
  - `class="fill-gray-900"`
- `border-[#9ca0b0]` + `theme="catppuccin-latte"` + `p-2`
- https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/radialGradient
- https://ogp.me/#type_article
  - https://ogp.me/#datetime
  - https://en.wikipedia.org/wiki/ISO_8601
- https://specification.website/
  - https://github.com/jdevalk/specification.website
  - https://docs.astro.build/en/basics/astro-pages/#astro-pages: "A page must produce a full HTML document. If not explicitly included, Astro will add the necessary `<!DOCTYPE html>` declaration (...)"
  - https://specification.website/spec/performance/speculation-rules/
  - https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API
  - https://specification.website/spec/resilience/monitoring-uptime/
  - https://specification.website/spec/foundations/feed-discovery/
- https://github.com/arrowtype/shantell-sans
  - https://shantellsans.com/process
- Favicon:
  - https://pinhead.ink/
    - Current: `at_sign`
- `[font-variant-ligatures:none]` in the `<CodeSnippet />` component to prevent Bash command flags from appearing without spaces separating them with Geist Mono.
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/crossorigin: "Setting the attribute name to an empty value, like `crossorigin` or `crossorigin=""`, is the same as `anonymous`."
- https://blog.logrocket.com/css-text-wrap-balance-vs-text-wrap-pretty/
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-wrap
    - "`pretty`: This is intended for body copy where good typography is favored over performance (for example, when the number of orphans should be kept to a minimum)."

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

- https://accessible-astro.incluud.dev/components/skip-link/
- https://github.com/incluud/accessible-astro-components/blob/v5.3.0/src/components/skiplink/SkipLink.astro

```astro
<SkipLink
  class="absolute -top-full left-0 z-50 bg-white p-4 text-gray-900 focus:top-0 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
/>
```

```astro
---
/**
 * SkipLink Component
 *
 * @description An accessible skip link that helps keyboard users bypass repetitive navigation
 */

interface Props {
  /**
   * Additional classes to apply
   */
  class?: string;
  /**
   * Text for the skip link
   * @default "Skip to main content"
   */
  text?: string;
  /**
   * Target selector to skip to
   * @default "#main-content"
   */
  target?: string;
  /**
   * HTML attributes to spread on the skip link
   */
  [key: string]: string | number | boolean | undefined;
}

const { class: className, text = "Skip to main content", target = "#main-content", ...rest } = Astro.props;
---

<div class:list={["skip-link", className]} {...rest}>
  <a href={target}>{text}</a>
</div>

<script is:inline define:vars={{ target }}>
  // variables
  const skipLink = document.querySelector(".skip-link a");

  // execution
  skipLink.addEventListener("keydown", (event) => {
    if (!event.target.closest("a")) return;
    const key = event.key;

    if (key !== "Enter") return;
    event.preventDefault();

    if (document.querySelector(target)) {
      const targetElement = document.querySelector(target);
      targetElement.setAttribute("tabindex", "-1");
      targetElement.focus();
    } else if (!document.querySelector(target) && document.querySelector("h1")) {
      const h1 = document.querySelector("h1");
      h1.setAttribute("tabindex", "-1");
      h1.focus();
    } else {
      console.warn("SkipLink is not set, either missing an h1 or main content id on the page.");
    }
  });
</script>

<style>
  :where(.skip-link a) {
    position: absolute;
    z-index: 9999;
    inset-block-start: -100vh;
    inset-inline-start: 0;
    border-end-end-radius: 0.5rem;
    background: light-dark(hsl(0 0% 100%), hsl(215 25% 15%));
    padding-inline: 3.25rem;
    padding-block: 1rem;
    color: light-dark(hsl(215 25% 27%), hsl(215 25% 89%));
  }

  :where(.skip-link a:hover),
  :where(.skip-link a:focus-visible) {
    inset-block-start: 0;
  }
</style>
```

```astro
<a
  href="#maincontent"
  class="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-1/2 focus-visible:-translate-x-1/2 focus-visible:bg-gray-900 focus-visible:px-4 focus-visible:py-2 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
  >Skip to main content</a
>
```
