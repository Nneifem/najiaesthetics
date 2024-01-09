import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './pages/Contact'
import './App.css'

function App() {

  return (
    <>
      <Outlet />
      <Contact />
    </>
  )
}

export default App
