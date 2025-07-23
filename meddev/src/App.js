import React, { useState } from 'react';
import './App.css';
import TerminalHeader from './components/TerminalHeader/TerminalHeader';
import TerminalBody from './components/TerminalBody/TerminalBody';

function App() {
  const [command, setCommand] = useState('show-skills');

  return (
    <div className="app">
      <div className="terminal">
        <TerminalHeader />
        <TerminalBody command={command} />
      </div>
    </div>
  );
}

export default App;