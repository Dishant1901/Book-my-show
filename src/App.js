import './App.css';
import axios from   'axios';
// routing
import { Routes , Route} from 'react-router-dom';

// react slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// importing pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

axios.defaults.BaseURL = "https://api.themoviedb.org/3";
// axios.defaults.params={};
// axios.defaults.params["api_key"] = "b06a08969b696df04f46583b900e2bd";

function App() {

  
  return   (
    <Routes>

      <Route path='/' element = {<HomePage/>}/>
      <Route path='/movie/:id' element = {<MoviePage/>} />
      <Route path='/plays' element  = {<PlayPage/>} />

    </Routes>
  )
}

export default App;
