export default function CreatePost() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="Profile" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
        <input 
          type="text" 
          placeholder="Start a post..." 
          className="flex-1 bg-gray-100 rounded-full px-3 lg:px-4 py-2 text-gray-600 text-sm lg:text-base"
        />
      </div>
      <div className="flex justify-between">
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded text-sm lg:text-base">
          <span>📷</span>
          <span className="hidden sm:inline">Photo</span>
        </button>
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded text-sm lg:text-base">
          <span>🎥</span>
          <span className="hidden sm:inline">Video</span>
        </button>
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded text-sm lg:text-base">
          <span>📄</span>
          <span className="hidden sm:inline">Article</span>
        </button>
      </div>
    </div>
  )
}
