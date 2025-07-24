import '@/styles/global.css'

import {Route, Routes} from 'react-router-dom'
import router from './routes'

import ReactGA from 'react-ga4'
import {useEffect} from 'react'

ReactGA.initialize('G-VX9XMGW1W0')

const App = () => {
  useEffect(() => {
    ReactGA.send({hitType: 'pageview', page: window.location.pathname})
  }, [])

  return (
    <Routes>
      {router.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default App
