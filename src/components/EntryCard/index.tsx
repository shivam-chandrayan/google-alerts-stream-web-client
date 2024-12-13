import { FC } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface Entry {
  title: string;
  content: string;
  link: string;
  publisher: string;
  published_at: string;
  updated_at: string;
  id: string;
  feed_id: string;
  created_at: string;
}

interface EntryCardProps {
  entry: Entry;
}

const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const { title, link, content, publisher, published_at } = entry;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 mb-4">
      <div className="flex justify-between items-center text-md text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <button
            aria-label="bookmark"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <BookmarkBorderIcon className="w-5 h-5 text-gray-600" />
          </button>
          <div className="hover:underline cursor-pointer">{publisher}</div>
        </div>
        <time dateTime={published_at}>
          {new Date(published_at).toLocaleDateString()}
        </time>
      </div>
      <div
        className="text-2xl font-semibold mb-4 hover:underline cursor-pointer"
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        role="link"
        tabIndex={0}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div
        className="text-gray-700 text-md prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default EntryCard;
