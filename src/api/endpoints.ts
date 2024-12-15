import { QueryParams } from "./types";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createUrl = {
  withPath: (baseUrl: string, path: string | number) => `${baseUrl}/${path}`,

  withQuery: (baseUrl: string, params?: QueryParams) => {
    if (!params) return baseUrl;

    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined) return;
      if (Array.isArray(value)) {
        value.forEach((v) => {
          url.searchParams.append(key, String(v));
        });
      } else {
        url.searchParams.append(key, String(value));
      }
    });
    return url.toString();
  },
};

export const ENDPOINTS = {
  feeds: {
    base: `${API_BASE_URL}/feeds`,
    refreshAll: `${API_BASE_URL}/feeds/refresh-all`,
    byId: (id: string) => createUrl.withPath(`${API_BASE_URL}/feeds`, id),
  },
  entries: {
    base: `${API_BASE_URL}/entries`,
    list: (params?: QueryParams) =>
      createUrl.withQuery(`${API_BASE_URL}/entries`, params),
    updateStatus: (id: string, status: QueryParams) => {
      const url = createUrl
        .withPath(`${API_BASE_URL}/entries`, id)
        .concat(`/status`);
      return createUrl.withQuery(url, status);
    },
    getBookmarkedEntries: (params?: QueryParams) =>
      createUrl.withQuery(`${API_BASE_URL}/entries/bookmarked`, params),
  },
} as const;
