import { ENDPOINTS } from "../endpoints";
import { Feed, FeedResponse, EntryResponse } from "../types";
import { fetcher } from "../utils/fetcher";

export const feedsService = {
  // Get all feeds
  getAllFeeds: async (): Promise<FeedResponse> => {
    return fetcher<FeedResponse>(ENDPOINTS.feeds.base);
  },

  // Get feed by ID
  getFeedById: async (id: string): Promise<Feed> => {
    return fetcher<Feed>(ENDPOINTS.feeds.byId(id));
  },

  // Delete feed
  deleteFeed: async (id: string): Promise<void> => {
    return fetcher<void>(ENDPOINTS.feeds.byId(id), {
      method: "DELETE",
    });
  },

  // Update feed
  updateFeed: async (id: string, data: Partial<Feed>): Promise<Feed> => {
    return fetcher<Feed>(ENDPOINTS.feeds.byId(id), {
      method: "PATCH",
      body: data,
    });
  },

  // Create new feed
  createFeed: async (
    data: Omit<Feed, "id" | "created_at" | "last_fetched">
  ): Promise<Feed> => {
    return fetcher<Feed>(ENDPOINTS.feeds.base, {
      method: "POST",
      body: data,
    });
  },

  // Get entries for a specific feed
  getFeedEntries: async (feedId: string): Promise<EntryResponse> => {
    return fetcher<EntryResponse>(ENDPOINTS.entries.list({ feedId }));
  },

  // Refresh all feeds
  refreshAllFeeds: async (): Promise<void> => {
    return fetcher<void>(ENDPOINTS.feeds.refreshAll, {
      method: "POST",
    });
  },

  // Refresh specific feed
  refreshFeed: async (id: string): Promise<void> => {
    return fetcher<void>(`${ENDPOINTS.feeds.byId(id)}/refresh`, {
      method: "POST",
    });
  },
};
