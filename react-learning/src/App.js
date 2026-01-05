import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline></Inline>
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter></Counter>
      <Message/>
      <Greet name="a" heroName="e">
         <p>This is children prop</p>
      </Greet>
      <Greet name="b" heroName="f">
        <button>Action</button>
      </Greet>
      <Greet name="c" heroName="g"/>
      <Welcome name="a" heroName="d"/>
      <Welcome name="b" heroName="e"/>
      <Welcome name="c" heroName="f"/>
      <Hello/> */}
    </div>
  );
}

export default App;
