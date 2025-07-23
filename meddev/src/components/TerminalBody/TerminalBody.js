import React, { useState, useEffect } from 'react';
import SkillCommandOutput from '../SkillCommandOutput/SkillCommandOutput';
import './TerminalBody.css';

const TerminalBody = ({ command }) => {
  const [typedCommand, setTypedCommand] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCommand((prev) => prev + command[index]);
      index++;
      if (index === command.length) {
        clearInterval(interval);
        setTimeout(() => setTypingDone(true), 300);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [command]);

  return (
    <div className="terminal-body">
      <div className="terminal-line">
        <span className="prompt">➜</span> {typedCommand}
        {!typingDone && <span className="cursor">█</span>}
      </div>
      {typingDone && <SkillCommandOutput />}
    </div>
  );
};

export default TerminalBody;