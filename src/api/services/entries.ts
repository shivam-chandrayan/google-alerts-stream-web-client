import { ENDPOINTS } from "../endpoints";
import { EntryResponse, QueryParams } from "../types";
import { fetcher } from "../utils/fetcher";

export const entriesService = {
  getEntries: async (params?: QueryParams) => {
    const url = ENDPOINTS.entries.list(params);
    return fetcher<EntryResponse>(url);
  },
  updateEntryStatus: async (entryId: string, status: QueryParams) => {
    const url = ENDPOINTS.entries.updateStatus(entryId, status);
    return fetcher<EntryResponse>(url, { method: "PUT", body: status });
  },
  getBookmarkedEntries: async (params?: QueryParams) => {
    const url = ENDPOINTS.entries.getBookmarkedEntries(params);
    return fetcher<EntryResponse>(url);
  },
};
