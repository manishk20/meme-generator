import React  from 'react';
import Header from './header.js';
import MemeGenerator from './memegenerator.js';
import "./style.css";

function App(){
  return(
    <div>
      <Header />    
      <MemeGenerator/>
    </div>
  );
}
export default App;