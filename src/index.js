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
import Articles from './pages/articles';
import Projects from './pages/projects';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="articles" element={<Articles />}></Route>
        <Route path="projects" element={<Projects />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
