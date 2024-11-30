import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import RecipeDetails from './components/recipe-details';


import './App.css'; 
function App() {
  return (
    <BrowserRouter>
    <div class="container">
      <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-details/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
