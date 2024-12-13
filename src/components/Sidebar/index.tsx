import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const feeds = [
  { id: "1", title: "Feed 1" },
  { id: "2", title: "Feed 2" },
  { id: "3", title: "Feed 3" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="mt-6 mr-6 flex flex-col gap-4 fixed">
      <div className="text-4xl">MegaFeed</div>
      <button className="px-6 py-3 bg-blue-500 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">
        Add New RSS Feed
      </button>
      <button
        aria-label="Toggle favorites"
        className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
        aria-pressed="false"
      >
        <BookmarkBorderIcon className="w-5 h-5 text-gray-600" />
        <span className="text-gray-700">Favorites</span>
      </button>

      <div className="">
        <div className="text-lg text-gray-800 ml-1">Showing entries for</div>
        <div className="space-y-2">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
            >
              <input
                type="checkbox"
                checked={true}
                id={feed.id}
                className="h-4 w-4 mx-1 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor={feed.id} className="text-gray-700">
                {feed.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
