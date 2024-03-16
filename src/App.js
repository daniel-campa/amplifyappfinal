import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';
import Form from './Form.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 230L</h1>
      <h2>Section - 01</h2>
      <p>WVU ID: 800377339</p>
      <p>Hi I am Daniel</p>
      <br></br>
      <div class="row justify-content-md-center"><Form /></div>
      <br></br>
      <Card />
    </div>
  );
}

export default App;
