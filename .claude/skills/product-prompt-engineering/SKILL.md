---
name: product-prompt-engineering
description: Use when creating or refining structured prompts, prompt templates, variables, negative constraints, or prompt-building backend logic for ecommerce product image generation with gpt-image-2. Especially for converting product data, assets, image type, visual style, and platform requirements into safe reproducible prompts.
---

# Product Prompt Engineering

Use this skill when turning ecommerce product data into model-ready prompts.

## Prompt Strategy

Do not let the frontend submit arbitrary final prompts as the only source of truth. Build prompts from structured fields and versioned templates.

Recommended layers:

1. Role and task: commercial ecommerce visual designer / product photographer.
2. Product facts: name, category, color, material, dimensions, included items, selling points.
3. Output type: main image, lifestyle scene, detail image, campaign creative, variant.
4. Visual direction: scene, background, lighting, composition, mood, camera style.
5. Platform constraints: aspect ratio, safe space, crop behavior, text policy.
6. Product-fidelity constraints: what must not change.
7. Compliance constraints: no false claims, protected IP, misleading badges.

## Prompt Template Shape

Use templates like this:

```text
Create a high-quality ecommerce {{image_type}} for the following product.

Product facts:
- Name: {{product_name}}
- Category: {{category}}
- Appearance: {{appearance}}
- Materials/colors: {{materials_colors}}
- Included items: {{included_items}}
- Selling points: {{selling_points}}
- Target audience: {{target_audience}}

Creative direction:
- Scene/background: {{scene}}
- Style: {{style}}
- Lighting: {{lighting}}
- Composition: {{composition}}
- Mood: {{mood}}

Ecommerce requirements:
- Keep the product as the clear hero.
- Preserve the product's core shape, color, structure, quantity, and visible details.
- Do not add logos, certifications, prices, ratings, or claims unless explicitly provided.
- Avoid misleading effects or exaggerated product performance.
- Make the image suitable for {{platform}} at {{aspect_ratio}}.
```

## Variable Rules

- Use explicit `unknown` or omit variables rather than inventing facts.
- Keep `selling_points` factual and short.
- Split long user descriptions into bullet facts before rendering.
- Store both `template_variables` and `rendered_prompt`.
- Version every prompt template used in production.

## Negative Constraints

Add negative constraints when relevant, but keep them specific:

```text
Do not change the product color.
Do not add extra accessories.
Do not include competitor logos or famous brand marks.
Do not render discount badges, star ratings, certifications, or medical claims.
Do not add text unless the task explicitly requests text.
```

Avoid huge generic negative lists that dilute the main instruction.

## Text in Images

For exact ecommerce copy, prefer separate editable overlay layers in the frontend.

Use model-rendered text only when:

- exact spelling is not critical, or
- the text is decorative, or
- the user accepts manual review.

For exact slogans, prices, discount labels, feature tags, and CTAs, generate a clean image with negative space and overlay text in the app.

## gpt-image-2 Parameters

Current project defaults:

```json
{
  "model": "gpt-image-2",
  "size": "1024x1024",
  "quality": "low",
  "output_format": "jpeg",
  "output_compression": 50
}
```

Adjust quality and compression based on product needs, cost, and latency. Record all parameters per task.

## Prompt Review Checklist

Before sending a prompt:

- Does it include product facts and image intent?
- Does it preserve product fidelity?
- Does it avoid unsupported claims?
- Does it specify composition and background enough to be useful?
- Does it avoid asking the model to produce exact dense text?
- Is the final prompt stored for reproducibility?
