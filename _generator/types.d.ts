export type TemplateSchema = {
  path: string[];
  id: string;
  title: string;
  description?: string;
  enum: string[];
  deprecated: boolean;
  properties?: TemplateProperty[];
}

export type TemplateProperty = {
  name: string;
  deprecated: boolean;
  type: string;
  contract: string;
  description: string;
}
