import { ENDPOINTS } from "../endpoints";
import { EntryResponse } from "../types";
import { fetcher } from "../utils/fetcher";

export const entriesService = {
  getEntries: async (cursor?: string) => {
    const url = ENDPOINTS.entries.list(cursor ? { cursor } : undefined);
    return fetcher<EntryResponse>(url);
  },
};
