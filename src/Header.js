import { Component } from "react";
import HeaderSearchBar from "./PostComponents/HeaderSearchBar.js";

class Header extends Component{
    /**
     * 
     * @returns {HTMLElement}
     */
    render(){
        let queryFunction = this.props.updateQuery
        let queryDefined = this.props.queryDefined
        return(        
            <header>
                <h1> Pseudo (mini) Forum </h1>
                <HeaderSearchBar queryFunction={queryFunction} queryDefined={queryDefined}/>
            </header>
        )
    }
}

// const Header = () => {
//     return (
//         <header>
//             <h2> Pseudo (mini) Forum </h2>
//             <HeaderSearchBar/>
//         </header>
//     )
// }
export default Header;