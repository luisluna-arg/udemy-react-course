import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PokemonsProvider from './../../context/pokemons/Provider';

import './styles.css'

import Home from '../Home';
import FourOFour from '../404';
import PokeDetail from '../Home/PokeDetail';
import ScrollToTop from '../../components/ScrollToTop';

function App() {
  return (
    <PokemonsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/404'} element={<FourOFour />} />
          <Route path={'/pokemon/:id'} element={<PokeDetail />} />
        </Routes>
      </BrowserRouter>
    </PokemonsProvider>
  );
}

export default App;
