export default function Post() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
      <div className="flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" alt="Profile" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-sm sm:text-base truncate">John Smith</h4>
          <p className="text-xs sm:text-sm text-gray-600 truncate">Software Engineer at Tech Corp</p>
          <p className="text-xs text-gray-500">2h</p>
        </div>
      </div>
      
      <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base leading-relaxed">
        Excited to share my latest project! Working on innovative solutions that make a difference.
      </p>
      
      <div className="flex justify-between items-center pt-2 sm:pt-3 border-t border-gray-200">
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm">
          <span>👍</span>
          <span className="hidden xs:inline">Like</span>
        </button>
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm">
          <span>💬</span>
          <span className="hidden xs:inline">Comment</span>
        </button>
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm">
          <span>🔄</span>
          <span className="hidden sm:inline">Repost</span>
        </button>
        <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm">
          <span>📤</span>
          <span className="hidden sm:inline">Send</span>
        </button>
      </div>
    </div>
  )
}
