import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Feed } from "../../api/types";
import { feedsService } from "../../api/services/feeds";

interface DeleteModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  feedToDelete: Feed | null;
  refreshAll: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  setIsOpen,
  feedToDelete,
  refreshAll,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    if (feedToDelete) {
      await feedsService.deleteFeed(feedToDelete.id);
    }
    setIsSuccess(true);
    setIsLoading(false);
  };

  const handleDone = () => {
    refreshAll();
    setIsOpen(false);
    setIsSuccess(false);
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            {!isSuccess ? (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Delete {feedToDelete?.name} feed?
                </h2>
                <p className="text-sm">This can't be reversed</p>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 flex items-center justify-center"
                    disabled={isLoading}
                    onClick={handleDelete}
                  >
                    {isLoading ? (
                      <span className="loader border-t-red-600 border-2 border-gray-100 w-4 h-4 rounded-full animate-spin mr-2"></span>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <CheckCircleIcon className="text-green-500" />
                <h2 className="text-lg font-medium text-gray-800">
                  {feedToDelete?.name} Feed Deleted Successfully!
                </h2>
                <button
                  onClick={handleDone}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
