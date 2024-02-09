import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
