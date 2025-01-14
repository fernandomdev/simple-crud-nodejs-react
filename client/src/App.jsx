import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Books from './pages/Books';
import Update from './pages/Update';
import Add from './pages/Add';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App