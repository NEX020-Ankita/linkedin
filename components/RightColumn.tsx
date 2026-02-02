export default function RightColumn() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">LinkedIn News</h4>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
          <li className="text-gray-800 hover:text-blue-600 cursor-pointer py-1">Tech trends in 2024</li>
          <li className="text-gray-800 hover:text-blue-600 cursor-pointer py-1">Remote work updates</li>
          <li className="text-gray-800 hover:text-blue-600 cursor-pointer py-1">Industry insights</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">People you may know</h4>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Profile" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium truncate">Jane Smith</p>
              <p className="text-xs text-gray-600 truncate">Designer at Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
