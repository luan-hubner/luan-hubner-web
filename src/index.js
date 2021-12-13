import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<About />}></Route>
        <Route path="articles" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
