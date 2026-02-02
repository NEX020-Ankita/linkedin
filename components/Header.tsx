export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-12 sm:h-14">
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
          <h1 className="text-blue-600 font-bold text-base sm:text-lg lg:text-xl">LinkedIn</h1>
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-gray-100 px-2 sm:px-3 py-1 rounded-md w-24 sm:w-32 md:w-48 lg:w-64 text-xs sm:text-sm"
          />
        </div>
        <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm lg:text-base">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm lg:text-base hidden sm:block">Network</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm lg:text-base hidden md:block">Jobs</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm lg:text-base hidden lg:block">Messages</a>
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Profile" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
        </nav>
      </div>
    </header>
  )
}
