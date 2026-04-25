export interface Project {
  id: string;
  name: string;
  brand_name: string;
  brand_style: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  project_id: string;
  name: string;
  category: string;
  description: string;
  selling_points: string[];
  target_audience: string;
  price_range: string;
  platform: string;
  created_at: string;
  updated_at: string;
}

export interface Asset {
  id: string;
  project_id: string;
  product_id: string;
  asset_type: 'source' | 'result' | 'thumbnail' | 'export';
  storage_key: string;
  url: string;
  mime_type: string;
  width: number;
  height: number;
  file_size: number;
  checksum: string;
  created_at: string;
}

export type GenerationTaskStatus = 'created' | 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'expired';
export type ImageType = 'main' | 'scene' | 'detail_page' | 'poster' | 'social';

export interface GenerationTask {
  id: string;
  project_id: string;
  product_id: string;
  created_by: string;
  status: GenerationTaskStatus;
  image_type: ImageType;
  template_id: string;
  template_version: number;
  input_params: GenerationInputParams;
  rendered_prompt: string;
  model: string;
  model_params: Record<string, unknown>;
  error_code: string | null;
  error_message: string | null;
  request_id: string | null;
  started_at: string | null;
  finished_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface GenerationInputParams {
  prompt: string;
  size: '1024x1024' | '1024x1792' | '1792x1024' | '1536x1024' | '1024x1536';
  quality: 'low' | 'medium' | 'high';
  output_format: 'jpeg' | 'png' | 'webp';
  style?: string;
  background?: string;
  composition?: string;
  negative_constraints?: string[];
}

export interface GenerationResult {
  id: string;
  task_id: string;
  asset_id: string;
  thumbnail_asset_id: string;
  width: number;
  height: number;
  format: string;
  is_favorite: boolean;
  score: number | null;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface PromptTemplate {
  id: string;
  name: string;
  image_type: ImageType;
  version: number;
  content: string;
  variables: TemplateVariable[];
  constraints: string[];
  is_active: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface TemplateVariable {
  name: string;
  label: string;
  type: 'string' | 'select' | 'multiselect';
  options?: string[];
  required: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'operator' | 'designer' | 'merchant';
}

export interface UsageStats {
  total_tasks: number;
  succeeded_tasks: number;
  failed_tasks: number;
  total_cost: number;
  quota_remaining: number;
  quota_total: number;
}