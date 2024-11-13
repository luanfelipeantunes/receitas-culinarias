import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReceitasIndex from './pages/ReceitasIndex';
import ReceitaShow from './pages/ReceitaShow';
import ReceitaNew from './pages/ReceitaNew';
import ReceitaEdit from './pages/ReceitaEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReceitasIndex />} />
        <Route path="/receitas" element={<ReceitasIndex />} />
        <Route path="/receitas/show/:id" element={<ReceitaShow />} />
        <Route path="/receitas/new" element={<ReceitaNew isCreating />} />
        <Route path='/receitas/edit/:id' element={<ReceitaEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
