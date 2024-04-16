import { HashRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './Pages/home'
// import {Page1} from './Pages/page1'
// import {Page2} from './Pages/page2'
// import {Page3} from './Pages/page3'
// import { Layout } from 'antd'

function App(){
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} /> 
    </Routes>
  </Router>
  )
}

export default App