import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Feed } from "../../api/types";
import DeleteModal from "../DeleteModal";

interface SidebarProps {
  setModalOpen: (isOpen: boolean) => void;
  feeds: Feed[];
  selectedFeed: string[];
  setSelectedFeed: (
    feed: string[] | ((prevSelectedFeed: string[]) => string[])
  ) => void;
  setFeedToEdit: (feed: Feed) => void;
  refreshAll: () => void;
  toggleBookmarkedContent: () => void;
  showBookmarkedContent: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  setModalOpen,
  feeds,
  selectedFeed,
  setSelectedFeed,
  setFeedToEdit,
  toggleBookmarkedContent,
  showBookmarkedContent,
  refreshAll,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [feedToDelete, setFeedToDelete] = useState<Feed | null>(null);

  const handleFeedSelection = (feedName: string) => {
    setSelectedFeed((prevSelectedFeed: string[]) => {
      if (prevSelectedFeed.includes(feedName)) {
        return prevSelectedFeed.filter((f: string) => f !== feedName);
      }
      return [...prevSelectedFeed, feedName];
    });
  };

  const handleEditFeed = (feed: Feed) => {
    setFeedToEdit(feed);
    setModalOpen(true);
  };

  const handleDeleteFeed = (feed: Feed) => {
    setFeedToDelete(feed);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div
        className={`${
          feeds.length > 0 ? "mt-6 mr-6" : ""
        } flex flex-col gap-4 fixed`}
      >
        <div className="text-4xl">MegaFeed</div>
        <div className="w-60 text-gray-600 text-sm">
          Add links to Google Alerts RSS Feed and get all the alerts in one
          place
        </div>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => setModalOpen(true)}
        >
          Add New RSS Feed
        </button>

        {feeds.length > 0 && (
          <button
            aria-label="Toggle bookmarked"
            className={`flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group ${
              showBookmarkedContent ? "bg-gray-200" : ""
            }`}
            aria-pressed="false"
            onClick={toggleBookmarkedContent}
          >
            {showBookmarkedContent ? (
              <BookmarkIcon className="w-5 h-5 text-gray-600" />
            ) : (
              <BookmarkBorderIcon className="w-5 h-5 text-gray-600" />
            )}
            <span className="text-gray-700">Bookmarked</span>
          </button>
        )}

        {feeds.length > 0 && (
          <div className="">
            <div className="flex">
              <div className="text-lg text-gray-800 ml-1">
                Showing entries for
              </div>
            </div>
            <div className="space-y-2">
              {feeds.map((feed) => (
                <div
                  key={feed.id}
                  className="flex items-center justify-between gap-2 w-full p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      readOnly
                      checked={selectedFeed.includes(feed.keyword)}
                      onClick={() => handleFeedSelection(feed.keyword)}
                      name={feed.keyword}
                      id={feed.id}
                      className="h-4 w-4 mx-1 text-blue-500 focus:ring-blue-400 border-gray-300 rounded cursor-pointer"
                    />
                    <label htmlFor={feed.id} className="text-gray-700">
                      {feed.name}
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <EditIcon
                      className="text-blue-600 cursor-pointer"
                      onClick={() => handleEditFeed(feed)}
                    />
                    <DeleteIcon
                      className="text-red-600 cursor-pointer"
                      onClick={() => handleDeleteFeed(feed)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        feedToDelete={feedToDelete}
        refreshAll={refreshAll}
      />
    </>
  );
};

export default Sidebar;
