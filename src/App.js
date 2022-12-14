import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouterm as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path='/homepage/:type?'>
          <HomePage />
      </Route>
    </Router>
  );
}

export default App;
