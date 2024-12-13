export const API_BASE_URL = "http://localhost:3000/api";

type QueryParams = Record<string, string | number>;

export const createUrl = {
  withPath: (baseUrl: string, path: string | number) => `${baseUrl}/${path}`,

  withQuery: (baseUrl: string, params?: QueryParams) => {
    if (!params) return baseUrl;

    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
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
  },
} as const;
