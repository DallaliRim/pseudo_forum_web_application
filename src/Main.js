import MainColumn from "./MainComponents/MainColumn";
import RightColumn from "./MainComponents/RightColumn";
import LeftColumn from "./MainComponents/LeftColumn";
import forum from "./json/forum.json";
import user from "./json/users.json";
import { Component } from "react";

class Main extends Component{
    render(){
        return(
            <section id="mainContent">
                <LeftColumn forumData={forum}/>
                <MainColumn forumData={forum} query={this.props.query}/>
                <RightColumn forumData={forum} userData={user}/>
            </section>
        )
    }
}
export default Main;