import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { feedsService } from "../../api/services/feeds";
import { Feed } from "../../api/types";

interface FormData {
  name: string;
  url: string;
  keyword: string;
}

const Modal: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  refreshAll: () => void;
  feedToEdit?: Feed | null;
}> = ({ isOpen, setIsOpen, refreshAll, feedToEdit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    url: "",
    keyword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (feedToEdit) {
      setFormData(feedToEdit);
      setIsEditMode(true);
    }
  }, [feedToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (isEditMode && feedToEdit) {
      await feedsService.updateFeed(feedToEdit.id, {
        name: formData.name,
        keyword: formData.keyword,
      });
    } else {
      await feedsService.createFeed(formData);
    }
    setIsSuccess(true);
    setIsLoading(false);
  };

  const handleDone = () => {
    refreshAll();
    setIsOpen(false);
    resetModal();
  };

  // Reset the modal to initial state
  const resetModal = () => {
    setFormData({ name: "", url: "", keyword: "" });
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
                  {isEditMode ? "Edit RSS Feed" : "Add New RSS Feed"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter name"
                      className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="keyword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Keyword
                    </label>
                    <input
                      type="text"
                      id="keyword"
                      value={formData.keyword}
                      onChange={handleChange}
                      placeholder="Enter keyword"
                      className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      URL
                    </label>
                    <input
                      type="url"
                      id="url"
                      value={formData.url}
                      onChange={handleChange}
                      disabled={isEditMode}
                      placeholder="Enter URL"
                      className="mt-1 w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  {/* Buttons */}
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
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center justify-center"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="loader border-t-blue-600 border-2 border-gray-200 w-4 h-4 rounded-full animate-spin mr-2"></span>
                      ) : isEditMode ? (
                        "Update"
                      ) : (
                        "Add"
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <CheckCircleIcon className="text-green-500" />
                <h2 className="text-lg font-medium text-gray-800">
                  {isEditMode
                    ? "RSS Feed Updated Successfully!"
                    : "RSS Feed Added Successfully!"}
                </h2>
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={handleDone}
                    className="px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Done
                  </button>
                  <button
                    onClick={resetModal}
                    className="px-4 py-2 bg-blue-600 text-sm font-medium text-white rounded-md hover:bg-blue-700"
                  >
                    Add More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
