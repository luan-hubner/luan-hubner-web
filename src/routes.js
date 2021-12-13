import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { createBrowserHistory } from 'history';

import Home from './pages/home'
import App from './App';

const history = createBrowserHistory();

export default function Router() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
}