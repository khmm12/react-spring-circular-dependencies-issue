import React, { useReducer } from 'react';
import { animated, useSpring } from 'react-spring'
import logo from './logo.svg';
import './App.css';

function App() {
  const [isExpanded, toggle] = useReducer(x => !x, false)

  const transition = useSpring({ scale: isExpanded ? 1.8 : 1, rotateZ: isExpanded ? 180 : 0 })

  return (
    <div className="App">
      <header className="App-header">
        <animated.img style={transition} src={logo} className="App-logo" alt="logo" onClick={toggle} />
      </header>
    </div>
  );
}

export default App;
