export interface Entry {
  id: string;
  title: string;
  link: string;
  content: string;
  description: string;
  publisher: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  feedId: string;
}

export interface Feed {
  url: string;
  keyword: string;
  name: string;
  id: string;
  last_fetched: string | null;
  created_at: string;
}

export interface EntryResponse {
  entries: Entry[];
}

export interface FeedResponse {
  feeds: Feed[];
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
}
