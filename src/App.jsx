import DesktopView from './components/DesktopView'
import MobileView from './components/MobileView'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="lg:hidden">
        <MobileView />
      </div>
      <div className="hidden lg:block">
        <DesktopView />
      </div>
    </div>
  )
}

export default App
