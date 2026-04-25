---
name: ecommerce-image-workflow
description: Use when designing, implementing, or improving ecommerce AI image-generation workflows for product main images, lifestyle scenes, detail-page images, campaign posters, batch variants, task queues, review flows, exports, or generation-state UX. Especially relevant for this project using gpt-image-2, Next.js 16, and FastAPI.
---

# Ecommerce Image Workflow

Use this skill for productized ecommerce image-generation flows, not generic image prompts.

## Core Principles

- Treat image generation as a task workflow: inputs, validation, prompt build, model call, result storage, review, retry, export.
- Keep product truth intact: do not change the product's core appearance, structure, color, quantity, included accessories, or claims.
- Separate user intent from model prompt: collect structured ecommerce fields first, then render a controlled prompt on the backend.
- Prefer async jobs: `gpt-image-2` can be slow, so use task states, progress UI, retry, and clear failure messages.
- Save reproducibility data: final prompt, template version, model, params, request id, input assets, output assets.

## Workflow Types

Choose the workflow before designing UI or backend APIs:

- **Main image**: clean commercial product image, strong subject, platform-safe composition.
- **Lifestyle scene**: product in realistic use context, target audience and scene-driven.
- **Detail-page set**: multiple images telling a product story: feature, material, size, usage, package.
- **Campaign creative**: promotion, holiday, launch, social or ad image with stronger visual concept.
- **Batch variants**: same product, multiple backgrounds/styles/copy angles for A/B testing.

## Required Task Inputs

For every generation task, collect or infer:

- Product: name, category, description, selling points, target audience, price tier.
- Assets: source product image, optional brand assets, optional reference images.
- Output: image type, platform, aspect ratio, size, quality, format.
- Creative direction: scene, background, style, lighting, composition, mood.
- Constraints: forbidden changes, compliance notes, required/forbidden text.

## Backend Flow

Implement generation as a backend-owned pipeline:

1. Validate product, assets, and generation params.
2. Render prompt from a versioned template.
3. Create a task with status `queued`.
4. Worker sets status `running` and calls `gpt-image-2`.
5. Decode `b64_json`, store original output and thumbnail.
6. Persist metadata: model params, prompt, request id, duration, errors.
7. Set status `succeeded` or `failed`.
8. Frontend polls or subscribes to updates.

## Status Model

Use these states unless the project already defines another model:

```text
created -> queued -> running -> succeeded
created -> queued -> running -> failed
created -> queued -> cancelled
```

Show user-facing explanations for `failed`, not raw provider dumps.

## Frontend Flow

Design UI around confidence and control:

- Step 1: choose product or upload product asset.
- Step 2: choose image type and target platform.
- Step 3: configure scene/style/ratio/quality.
- Step 4: preview generated prompt summary, not necessarily full prompt.
- Step 5: submit task and show progress.
- Step 6: review results, favorite, retry, create variants, export.

## Batch Generation

For variants, expand one user request into deterministic child jobs:

- vary one or two dimensions at a time: background, style, composition, copy angle, ratio.
- show estimated count and cost before submission.
- preserve parent task id and variant dimensions in metadata.
- allow per-image retry instead of rerunning the whole batch.

## Done Criteria

A workflow is complete when:

- The user can understand what will be generated before spending credits.
- The backend can reproduce how an output was created.
- Failed tasks can be diagnosed and retried safely.
- Generated assets can be reviewed, compared, and exported.
