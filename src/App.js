import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Landingpage from './Components/Landingpage';
import Postview from './Components/Postview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/postview' element={<Postview/>}/>
      </Routes>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
