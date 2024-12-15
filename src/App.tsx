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
      getEntries({
        keywords: selectedFeed,
        limit: limit,
        skip: skip,
      });
    };

    fetchEntries();
    const intervalId = setInterval(fetchEntries, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getEntries({
      keywords: selectedFeed,
      limit: limit,
      skip: skip,
    });
    setSkip(0);
  }, [selectedFeed]);

  useEffect(() => {
    getAllFeeds();
  }, []);

  useEffect(() => {
    if (showBookmarkedContent) {
      getBookmarkedEntries();
    } else {
      getEntries({
        keywords: selectedFeed,
        limit: limit,
        skip: skip,
      });
    }
  }, [showBookmarkedContent]);

  const refreshAll = () => {
    getAllFeeds();
    getEntries({
      keywords: selectedFeed,
      limit: limit,
      skip: skip,
    });
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
          />
        </div>

        {feeds.length > 0 && (
          <div className="feed col-span-2">
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
            <div className="flex flex-col gap-4">
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
