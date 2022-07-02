
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PostDetails from './components/posts/PostDetails';
import CretePost from './components/posts/CretePost';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
           <Route path="/" exict element={<Main />} />
           <Route path='/create' element={<CretePost />} />
           <Route path='/post/:id' element={<PostDetails/>}/>
        </Routes>
        
        <Footer />
      </div>

 
  
    </Router>
   
  );
}

export default App;
