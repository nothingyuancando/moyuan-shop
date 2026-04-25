---
name: nextjs-fastapi-product-ui
description: Use when implementing this project's frontend/backend product UI architecture for ecommerce image generation, especially Next.js 16 frontend pages/components, FastAPI APIs, generation task UX, image galleries, uploads, polling, typed API clients, and integration boundaries.
---

# Next.js FastAPI Product UI

Use this skill for this project's app architecture: Next.js 16 frontend + FastAPI backend for ecommerce image generation.

## Architecture Boundaries

- Next.js owns UI, routing, forms, previews, polling, gallery interactions, and export controls.
- FastAPI owns secrets, model calls, prompt rendering, validation, persistence, storage, and task orchestration.
- Never expose `OPENAI_API_KEY` or provider credentials to the frontend.
- Keep generated image files behind backend-controlled storage URLs or signed URLs.

## Recommended Frontend Structure

```text
frontend/
  app/
    dashboard/page.tsx
    projects/page.tsx
    projects/[projectId]/page.tsx
    projects/[projectId]/products/[productId]/page.tsx
    projects/[projectId]/generations/new/page.tsx
    projects/[projectId]/generations/[taskId]/page.tsx
  components/
    generation/
    product/
    upload/
    gallery/
    templates/
  hooks/
    use-generation-task.ts
    use-upload.ts
  lib/
    api-client.ts
    validators.ts
  types/
    api.ts
    generation.ts
    product.ts
```

## Recommended Backend Structure

```text
backend/
  app/
    main.py
    api/routes/generations.py
    api/routes/products.py
    api/routes/assets.py
    core/config.py
    schemas/generation.py
    services/image_provider.py
    services/prompt_builder.py
    services/storage.py
    workers/generation_worker.py
```

## API Pattern

Use task-based generation APIs:

```http
POST /api/generation-tasks
GET  /api/generation-tasks/{task_id}
GET  /api/generation-tasks/{task_id}/results
POST /api/generation-tasks/{task_id}/retry
POST /api/generation-tasks/{task_id}/variants
```

Frontend submits structured params, not raw provider payloads.

## Frontend UX Pattern

Generation pages should include:

- Product context panel: original product image and facts.
- Intent selector: main image, lifestyle, detail page, campaign, variants.
- Parameter form: platform, ratio, style, scene, quality, format.
- Prompt summary: human-readable generated direction.
- Submit area: estimated count/cost and generation button.
- Task state: queued/running/succeeded/failed/cancelled.
- Result gallery: favorite, compare, retry, variant, export.

## Polling Pattern

Start simple with polling:

- Create task via `POST`.
- Poll every 2-3 seconds with `GET /api/generation-tasks/{task_id}`.
- Stop on `succeeded`, `failed`, or `cancelled`.
- Show elapsed time and friendly pending copy.

Upgrade to SSE/WebSocket only after MVP.

## Component Guidance

Prefer focused components:

- `ProductImageUploader`
- `ProductFactsForm`
- `GenerationTypeSelector`
- `GenerationParamForm`
- `GenerationProgressCard`
- `ResultGallery`
- `ImageComparePanel`
- `VariantMatrix`
- `ExportPanel`

Use accessible forms and visible loading/error states. Avoid hiding long-running generation behind a spinner with no context.

## Backend Implementation Rules

- Validate request with Pydantic schemas.
- Render prompt server-side with a named template and version.
- Store `rendered_prompt`, `model`, `model_params`, `request_id`, and `elapsed_ms`.
- Return stable task IDs immediately instead of waiting for image generation in the request path.
- Map provider errors to safe user-facing messages.

## MVP Order

1. FastAPI health check and image provider wrapper.
2. `POST /api/generation-tasks` using local file storage.
3. `GET /api/generation-tasks/{task_id}` for polling.
4. Next.js generation form.
5. Result gallery from backend image URL.
6. Product entity and upload flow.
7. Prompt templates and batch variants.
