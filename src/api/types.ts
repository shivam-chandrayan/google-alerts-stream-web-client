export interface Entry {
  id: string;
  title: string;
  link: string;
  content: string;
  description: string;
  publisher: string;
  published_at: string;
  updated_at: string;
  created_at: string;
  feed_id: string;
  is_bookmarked: boolean;
  is_read: boolean;
}

export interface Feed {
  url: string;
  keyword: string;
  name: string;
  id: string;
  last_fetched: string | null;
  created_at: string;
}

export interface FeedCreatePayload {
  url: string;
  keyword: string;
  name: string;
}

export interface FeedUpdatePayload {
  keyword: string;
  name: string;
}

export interface EntryResponse {
  entries: Entry[];
  total_count: number;
}

export interface FeedResponse {
  feeds: Feed[];
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export type QueryParams = Record<string, string | number | string[] | boolean>;
