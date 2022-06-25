import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" exact element={<Countries />} />
          <Route path="/:Slug" exact element={<CountryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
