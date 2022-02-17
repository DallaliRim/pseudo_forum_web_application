import { Component } from "react";

class HeaderSearchBar extends Component{
    /**
     * sets the initial state of search query to an empty string
     * @param {*} props 
     */
    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
    }
    
    /**
     * state = this.initialState
     * handles if the search bar is actively being typed in
     * and changes the query value in real time
     * passes the value back to app to update global variable
     * @param {event} event 
     */
    handleChange = (event) => {
        const {value} = event.target
        this.setState({
          query: value
        })
        this.props.queryFunction(value)
    }
    /**
     * @returns {HTMLElement}
     */
    render(){
        return(
            <input type="text"
                id="query" 
                name="query"
                value={this.state.query}
                onChange={this.handleChange}/>
        )
    }
}
export default HeaderSearchBar;