import React,{Component} from 'react';
import ChildComp from './ChildComp';
class Mainc extends Component{
    render(){
        return(
            <div>
                <center>
                <h3><ChildComp text =" I am first child component"/></h3>
                <h3><ChildComp text =" I am second child component"/></h3>
                <h3><ChildComp text =" I am third child component"/></h3>
                </center>
                
            </div>

        )    
        
    }
}
export default Mainc;