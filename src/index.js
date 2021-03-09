import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Mainc from './component/Mainc';
//component called App is created below.
//functional component
const App = () =>{
    return(
        <div>
            <center>
            <h1>REACT APP</h1>
            </center>
            
             
             <Header/>
             <Mainc/>
        </div>
       
    )
}
//rendering in public, index.html using reactdom
ReactDOM.render(<App/>,document.getElementById('root'))

//things to note
//<h2>Two consecutive tags should be present in a div</h2>