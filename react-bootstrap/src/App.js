import logo from './logo.svg';
import './App.css';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridDemo from './layout/GridDemo';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Alert variant='secondary'>This is a button</Alert>
        <Button> Test Button</Button>
        <GridDemo></GridDemo>
        <Navbar></Navbar>
    </div>
  );
}

export default App;
