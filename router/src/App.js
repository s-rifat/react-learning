import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

const NewRoute = () => {
  return (
    <div>
       <p>New Route</p>
    </div>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/new" Component={NewRoute}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
