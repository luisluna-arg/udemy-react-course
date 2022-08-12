import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './../App'
import Home from './../views/Home'
import FourOFour from './../views/404'

<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />  {/* Ahora el componente es sustituido por element */}
    <Route path="home" element={<Home />} />
    <Route path="FourOFour" element={<FourOFour />} />
  </Routes>
</BrowserRouter>