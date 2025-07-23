import React from 'react';
import './HackerLogo.css';

const HackerLogo = () => {
  return (
    <pre className="hacker-logo">
{String.raw`
 __  __ ______ _____  _____  ______ _____  
|  \/  |  ____|  __ \|  __ \|  ____|  __ \ 
| \  / | |__  | |  | | |  | | |__  | |__) |
| |\/| |  __| | |  | | |  | |  __| |  _  / 
| |  | | |____| |__| | |__| | |____| | \ \ 
|_|  |_|______|_____/|_____/|______|_|  \_\
     meddev - full-stack | secure | fast
`}
    </pre>
  );
};

export default HackerLogo;
