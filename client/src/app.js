import React from 'react';
import { render} from 'react-dom';
import Main from './Main';


window.onload = ()=>{
  render(
    <Main />,//transactions={[{where: "Freud", value: 6.00, date:"24/03", tag: "supermarket"},
    // {where: "boots", value: 7.00, date:"23/03", tag: "pharmacy"},
    // {where: "boots", value: 8.00, date:"23/03", tag: "pharmacy"},
    // {where: "coop", value: 8.00, date:"25/03", tag: "supermarket"}
    // ]} />,
    document.getElementById('app')
  );
}
