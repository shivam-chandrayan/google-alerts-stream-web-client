import { useEffect, useState } from "react";
import "./App.css";
import EntryCard from "./components/EntryCard";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Entry, QueryParams } from "./api/types";
import { Feed } from "./api/types";
import { feedsService } from "./api/services/feeds";
import { entriesService } from "./api/services/entries";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [limit, _] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [selectedFeed, setSelectedFeed] = useState<string[]>([]);
  const [feedToEdit, setFeedToEdit] = useState<Feed | null>(null);
  const [showBookmarkedContent, setShowBookmarkedContent] = useState(false);

  useEffect(() => {
    const fetchEntries = () => {
      if (selectedFeed.length > 0) {
        getEntries({
          keywords: selectedFeed,
          limit: limit,
          skip: skip,
        });
        setShowBookmarkedContent(false);
      } else {
        setEntries([]);
        setTotal(0);
      }
    };

    fetchEntries();
    const intervalId = setInterval(fetchEntries, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (selectedFeed.length > 0) {
      getEntries({
        keywords: selectedFeed,
        limit: limit,
        skip: skip,
      });
      setShowBookmarkedContent(false);
    } else {
      setEntries([]);
      setTotal(0);
    }
    setSkip(0);
  }, [selectedFeed]);

  useEffect(() => {
    getAllFeeds();
  }, []);

  useEffect(() => {
    if (showBookmarkedContent) {
      getBookmarkedEntries();
    } else {
      if (selectedFeed.length > 0) {
        getEntries({
          keywords: selectedFeed,
          limit: limit,
          skip: skip,
        });
        setShowBookmarkedContent(false);
      } else {
        setEntries([]);
        setTotal(0);
      }
    }
  }, [showBookmarkedContent]);

  const refreshAll = () => {
    getAllFeeds();
    if (selectedFeed.length > 0) {
      getEntries({
        keywords: selectedFeed,
        limit: limit,
        skip: skip,
      });
      setShowBookmarkedContent(false);
    } else {
      setEntries([]);
      setTotal(0);
    }
    setSkip(0);
  };

  const getAllFeeds = async () => {
    const response = await feedsService.getAllFeeds();
    setFeeds(response);
  };

  const getEntries = async (params?: QueryParams) => {
    const response = await entriesService.getEntries(params);
    setEntries(response.entries);
    setTotal(response.total_count);
  };

  const handleEntryStatusUpdate = async (
    entryId: string,
    status: QueryParams
  ) => {
    await entriesService.updateEntryStatus(entryId, status);
    refreshAll();
  };

  const getBookmarkedEntries = async (params?: QueryParams) => {
    const response = await entriesService.getBookmarkedEntries(params);
    setEntries(response.entries);
    setTotal(response.total_count);
  };

  const toggleBookmarkedContent = () => {
    setShowBookmarkedContent((prev) => !prev);
    setSkip(0);
  };

  const handleNextPage = () => {
    setSkip(skip + limit);
    getEntries({
      keywords: selectedFeed,
      limit: limit,
      skip: skip + limit,
    });
  };

  const handlePreviousPage = () => {
    setSkip(skip - limit);
    getEntries({
      keywords: selectedFeed,
      limit: limit,
      skip: skip - limit,
    });
  };

  const setupInitialFeeds = async () => {
    if (feeds.length === 0) {
      await feedsService.createFeed({
        name: "Gardening",
        keyword: "gardening",
        url: "https://www.google.co.in/alerts/feeds/05438962104974075464/2433440630520536900",
      });
      await feedsService.createFeed({
        name: "AI Tools",
        keyword: "ai-tools",
        url: "https://www.google.co.in/alerts/feeds/05438962104974075464/1030448771077491967",
      });
      refreshAll();
    }
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        refreshAll={refreshAll}
        feedToEdit={feedToEdit}
      />
      <div className="grid grid-cols-4 gap-4">
        <div
          className={`${
            feeds.length > 0
              ? "flex justify-end"
              : "col-span-2 col-start-2 flex justify-center items-center h-screen text-center"
          }`}
        >
          <Sidebar
            setModalOpen={setIsModalOpen}
            feeds={feeds}
            selectedFeed={selectedFeed}
            setSelectedFeed={setSelectedFeed}
            setFeedToEdit={setFeedToEdit}
            refreshAll={refreshAll}
            showBookmarkedContent={showBookmarkedContent}
            toggleBookmarkedContent={toggleBookmarkedContent}
            setupInitialFeeds={setupInitialFeeds}
          />
        </div>

        {feeds.length > 0 && (
          <div className="feed col-span-2">
            {entries.length > 0 && (
              <div className="pagination-container sticky top-0 bg-gray-100">
                <div className="flex justify-end items-center gap-2 h-16">
                  <div>
                    {skip}-{skip + limit > total ? total : skip + limit} of{" "}
                    {total}
                  </div>
                  <button
                    aria-label="bookmark"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    disabled={skip === 0}
                    onClick={handlePreviousPage}
                  >
                    <NavigateBeforeIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    aria-label="bookmark"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    disabled={skip + limit >= total}
                    onClick={handleNextPage}
                  >
                    <NavigateNextIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-4">
              {entries.length === 0 && (
                <div className="flex justify-center items-center h-screen text-center text-gray-600">
                  {showBookmarkedContent
                    ? "No bookmarked entries found"
                    : "Select a feed to show entries"}
                </div>
              )}
              {entries.map((entry) => (
                <EntryCard
                  entry={entry}
                  handleEntryStatusUpdate={handleEntryStatusUpdate}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
