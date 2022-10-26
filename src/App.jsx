import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import About from './components/routes/About'
import Blog from './components/routes/Blogs'
import Navbar from './components/navbar/navbar'
import NotFound from './components/routes/error404/NotFound'
import Users from './components/routes/users/users'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/about' element={<About />} />  
          <Route path='/blogs/*' element={<Blog />} /> 
          <Route path='/users' element={ <Users /> } />
          <Route path='*' element={<NotFound />} />  

        </Routes>   
z
        
    </div>
    </BrowserRouter>
  )
}

export default App
