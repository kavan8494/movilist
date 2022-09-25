import CreateMovies from './CreateMovies';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import MovieDetails from './MovieDetails';
function App() {
  return ( 
    <div className="App">
        <Router>  
        <Navbar/>      
        <Switch>
          <Route  path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <CreateMovies/>
          </Route>
          <Route path="/movie:id">
            <MovieDetails/>
          </Route>
        </Switch>
    </Router>
      </div>
  );
}

export default App;
