export default function LeftColumn() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
        <div className="text-center">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="Profile" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-2" />
          <h3 className="font-semibold text-sm sm:text-base">John Doe</h3>
          <p className="text-xs sm:text-sm text-gray-600">Software Developer</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4">
        <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Recent</h4>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer py-1">Groups</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer py-1">Events</li>
          <li className="text-gray-600 hover:text-blue-600 cursor-pointer py-1">Followed Hashtags</li>
        </ul>
      </div>
    </div>
  )
}
