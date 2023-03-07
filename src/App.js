import React from 'react';
import { Route, Routes } from 'react-router';
import Docs from './Template/Docs/Docs';
import Form from "./Template/Form/Form";
import HomeDuck from "./Template/HomeDuck/HomeDuck";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeDuck />} />
      <Route path="/from" element={<Form />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
};

export default App;