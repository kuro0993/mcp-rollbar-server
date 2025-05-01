export interface RollbarResponse<T> {
  err: number;
  result: T;
}

export interface RollbarUser {
  id: number;
  username: string;
  email: string;
  email_enabled: number;
}

export interface RollbarProject {
  id: number;
  account_id: number;
  status: string;
  settings_data: Record<string, unknown>;
  date_created: number;
  date_modified: number;
  name: string;
}

export interface RollbarEnvironment {
  id: number;
  project_id: number;
  environment: string;
  visble: boolean;
}

export interface RollbarItem {
  id: number;
  counter: number;
  environment: string;
  framework: string;
  level: string;
  timestamp: number;
  title: string;
  total_occurrences: number;
  last_occurrence_id: number;
  last_occurrence_timestamp: number;
  first_occurrence_id: number;
  first_occurrence_timestamp: number;
  status: string;
  assigned_user_id?: number;
}

export interface RollbarOccurrence {
  id: string;
  project_id: number;
  item_id: number;
  timestamp: number;
  version: number;
  data: {
    timestamp: number;
    environment: string;
    level: string;
    language: string;
    framework: string;
    uuid: string;
    server: {
      host: string;
      root: string;
      branch: string;
    };
    body: {
      trace?: {
        frames: Array<{
          filename: string;
          lineno: number;
          colno?: number;
          method: string;
          code?: string;
        }>;
        exception: {
          class: string;
          message: string;
        };
      };
      message?: {
        body: string;
      };
    };
    request?: {
      url: string;
      method: string;
      headers: Record<string, string>;
      params: Record<string, string>;
      GET: Record<string, string>;
      POST: Record<string, string>;
    };
    metadata?: any;
  }
}

export interface RollbarDeploy {
  id: number;
  environment: string;
  revision: string;
  comment: string;
  status: string;
  local_username: string;
  project_id: number;
  user_id: number;
  start_time: number;
  finish_time: number;
}

export interface ListItems {
  items: RollbarItem[];
  page: number;
  total_count: number;
}

export interface ListOccurrences {
  instances: RollbarOccurrence[];
  page: number;
}

export interface ListEnvironments {
  environments: RollbarEnvironment[];
  page: number;
}

export interface RollbarToolRequest {
  params: {
    name: string;
    arguments?: Record<string, unknown>;
    _meta?: {
      progressToken?: string | number;
    };
  };
  method: "tools/call";
}
