import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';
import Form from './Form.js';
import Books from "./pages/Books"
import Add from "./pages/Add"
import Update from "./pages/Update"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
        {/* <Navbar />
        <h1>CS 230L</h1>
        <h2>Section - 01</h2>
        <p>WVU ID: 800377339</p>
        <p>Hi I am Daniel</p>
        <br></br>
        <div class="row justify-content-md-center"><Form /></div>
        <br></br>
        <Card /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
