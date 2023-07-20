import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogArticle from './components/BlogArticle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogArticle />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
