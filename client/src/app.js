import React from 'react';
import { render} from 'react-dom';
import Main from './Main';


window.onload = ()=>{
  render(
    <Main/>,
    document.getElementById('app')
  );
}
