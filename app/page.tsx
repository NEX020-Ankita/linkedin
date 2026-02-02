import Header from '../components/Header'
import LeftColumn from '../components/LeftColumn'
import CenterColumn from '../components/CenterColumn'
import RightColumn from '../components/RightColumn'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 lg:gap-6">
          <div className="hidden md:block md:col-span-2 lg:col-span-3">
            <LeftColumn />
          </div>
          <div className="col-span-1 md:col-span-6 lg:col-span-6">
            <CenterColumn />
          </div>
          <div className="hidden lg:block lg:col-span-3">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  )
}