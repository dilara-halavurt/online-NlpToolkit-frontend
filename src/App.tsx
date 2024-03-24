import React from 'react';
import './App.css';
import TextCorrector from './TextCorrector'; // Adjust the path as necessary
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MorphologicalAnalyzer from './MorphologicalAnalyzer';
import Deasciifier from './Deasciifier';
function Home() {
  return <div className="App">
  <main className="App-header">
    <TextCorrector />
  </main>
</div>;
}

function Page1() {
  return <div className="App">
  <main className="App-header">
    <MorphologicalAnalyzer />
  </main>
</div>;
}

function Page2() {
  return <div className="App">
  <main className="App-header">
    <Deasciifier />
  </main>
</div>;
}

function Page3() {
  return <div>Page 3</div>;
}

function Page4() {
  return <div>Page 4</div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main className="App-header">
          <Routes>
            <Route path="/spellchecker" element={<Home />} />
            <Route path="/morphological-analyzer" element={<Page1 />} />
            <Route path="/deasciifier" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
