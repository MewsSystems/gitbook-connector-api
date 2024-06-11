export type TemplateSchema = {
  path: string[];
  id: string;
  title: string;
  description?: string;
  enum: TemplateEnumEntry[];
  deprecated: boolean;
  properties?: TemplateProperty[];
};

export type TemplateOperation = {
  summary: string;
  operationId: string;
  description: string;
  path: string;
  method: string;
  deprecated: boolean;
  deprecatedMessage: string;
  requestExample: any;
  requestSchemas: TemplateSchema[];
  responseExample: any;
  responseSchemas: TemplateSchema[];
};

export type TemplateProperty = {
  name: string;
  deprecated: boolean;
  deprecatedMessage: string;
  type: string;
  contract: string;
  description: string;
};

export type TemplateEnumEntry = {
  value: string;
  description?: string;
  name?: string;
};

export type PageContext = {
  tagName: string;
  fileName: string;
  outputPath: string;
};

export type TypeLink = {
  id: string;
  file: string;
  anchor: string;
  titleOverride: string;
};
