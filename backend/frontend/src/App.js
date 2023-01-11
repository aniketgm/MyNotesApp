import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotesPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
