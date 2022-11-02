import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';


function App() {
  return (

    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route exact path="/" element={  <Create/>} />
        <Route path="read/" element={<Read />} />
        <Route path="update/" element={<Update />} />

      </Routes>


      
       </BrowserRouter>
     </div>
  );
}

export default App;
