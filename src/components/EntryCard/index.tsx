import { FC } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Entry, QueryParams } from "../../api/types";

interface EntryCardProps {
  entry: Entry;
  handleEntryStatusUpdate: (id: string, status: QueryParams) => void;
}

const EntryCard: FC<EntryCardProps> = ({ entry, handleEntryStatusUpdate }) => {
  const {
    id,
    title,
    link,
    content,
    publisher,
    published_at,
    is_bookmarked,
    is_read,
  } = entry;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
      <div className="flex justify-between items-center text-md text-gray-600 mb-4 mr-2">
        <div className="flex items-center gap-2">
          <button
            aria-label="bookmark"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() =>
              handleEntryStatusUpdate(id, {
                bookmarked: !is_bookmarked,
                read: is_read,
              })
            }
          >
            {is_bookmarked ? (
              <BookmarkIcon className="w-5 h-5 text-gray-600" />
            ) : (
              <BookmarkBorderIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <div className="hover:underline cursor-pointer">{publisher}</div>
        </div>
        <time dateTime={published_at}>
          {new Date(published_at).toLocaleDateString()}
        </time>
      </div>
      <div
        className="text-2xl mx-2 font-semibold mb-4 hover:underline cursor-pointer"
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        role="link"
        tabIndex={0}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div
        className="text-gray-700 text-md prose prose-sm mx-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default EntryCard;
