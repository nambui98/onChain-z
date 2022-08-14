Layouts are a special type of Astro component useful for creating reusable page templates.
These are most often used by Astro pages and Markdown pages to define the layout of the page.

render html, head, body, and provide slots (slot and named slot, like Vue)

Nesting Layouts
==============
BaseLayout can have html, head, footer
SEOLayout reuse BaseLayout and add seo title, xml
BlogPostLayout.astro reuse SEOLayout, add UI of title content photo


