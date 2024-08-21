import './index.css'
import {Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <div className='bg-bgPrimary min-h-screen flex flex-col'>
      <Navbar/>
      <div className='flex-grow'>
      <Outlet/>
      </div>
      <footer className="text-center py-4 bg-gray-100">
          &copy; 2024 Hotels with Rooftop. All rights reserved.
      </footer>
      </div>
    </>
  )
}
export default App;