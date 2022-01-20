import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Articles from './pages/articles';
import Projects from './pages/projects';

import AC001 from './pages/articles/pages/voce-ja-se-sentiu-enjoado-ou-cansado-de-um-projeto-no-meio-do-caminho';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />}></Route>
        <Route path="articles" element={<Articles />}>
          <Route path="voce-ja-se-sentiu-enjoado-ou-cansado-de-um-projeto-no-meio-do-caminho" element={<AC001 />} />
        </Route>
        <Route path="projects" element={<Projects />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
