---
name: ecommerce-visual-guidelines
description: Use when designing ecommerce image-generation UI, prompt templates, visual review rules, platform-ready product images, campaign creatives, detail-page visuals, or quality checks for generated ecommerce images. Focuses on commercial visual standards, trust, product fidelity, and conversion-oriented design.
---

# Ecommerce Visual Guidelines

Use this skill to keep generated ecommerce images commercially useful, truthful, and visually consistent.

## Visual Priorities

Rank decisions in this order:

1. Product fidelity: the product must remain recognizable and truthful.
2. Clarity: the product should be easy to understand at thumbnail size.
3. Trust: avoid misleading claims, fake certifications, fake UI badges, or impossible usage.
4. Conversion: use composition, lighting, and context to communicate value quickly.
5. Brand consistency: match brand tone without copying protected brands or IP.

## Image Type Rules

### Main Image

- Product is the hero; avoid clutter.
- Use clean background, strong silhouette, readable edges.
- Leave safe space for platform cropping.
- Do not add unverified props, accessories, certifications, or claims.
- Prefer realistic commercial photography over fantasy visuals.

### Lifestyle Scene

- Show realistic context of use.
- Props should support the product story, not compete with it.
- Human presence is optional; if used, avoid implying unsupported demographics or outcomes.
- Keep the product scale plausible.

### Detail Page Image

- One message per image.
- Use visual hierarchy: headline, product/diagram, supporting detail.
- Avoid dense text that generation models may render poorly.
- Prefer backend/frontend text overlay for exact copy instead of asking the model to draw precise text.

### Campaign / Ad Creative

- Stronger concept is acceptable, but product truth still wins.
- Keep offer copy editable in frontend when exact text matters.
- Preserve negative space for platform overlays and CTA.
- Avoid competitor logos, famous characters, celebrity likenesses, or protected IP.

## Quality Checklist

Before accepting a result, check:

- Product shape, color, material, and key details remain accurate.
- No extra product variants, missing parts, or wrong accessories appear.
- No fake claims, badges, certifications, prices, ratings, or discounts appear.
- Text is legible if present; otherwise regenerate or overlay text outside the model.
- Composition works at target crop and thumbnail size.
- Lighting and shadows are plausible.
- Background supports the product category.

## Platform-Aware Defaults

Use these as defaults until platform-specific specs are implemented:

- Main image: square `1:1`, centered subject, clean background.
- Social feed: `4:5`, editorial composition, stronger hook.
- Detail page: `3:4` or vertical layout, one feature per image.
- Banner: `16:9`, strong negative space for copy.

## UI Guidance

For the web app:

- Let users select visual intent with presets, not only free text.
- Show warnings when inputs risk noncompliant outputs.
- Prefer editable text layers for slogans, prices, badges, and CTAs.
- Show side-by-side original product image and generated result.
- Add rejection reasons: product drift, text error, clutter, bad crop, low realism.

## Avoid

- Copying another marketplace seller's exact visual style.
- Using famous brand names, logos, characters, or celebrity likenesses unless user provides rights.
- Inventing materials, performance, safety claims, certifications, or medical/health effects.
- Overusing generic purple gradients, glassmorphism, and center-stacked AI landing page aesthetics.
