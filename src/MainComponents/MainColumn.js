import { Component } from "react";
import FilterPostsCategory from "../PostComponents/FilterPosts/FilterPostsCategory.js";
import FilterPostsQuery from "../PostComponents/FilterPosts/FilterPostsQuery"
class MainColumn extends Component{
    /**
     * The main Column contains the filter bars for categories and topic, it also serves
     * as a bridge to pass on the forumData for the filters to use
     * @returns {HTMLElement}
     */
    render(){
        if(this.props.query === '' || this.props.query.q === ''){
            return (
            <section id="mainColumn">
                <FilterPostsCategory forumData={this.props.forumData}/>
            </section>
            )
        } else {
            return(
                <section id="mainColumn">
                    <FilterPostsQuery forumData={this.props.forumData} query={this.props.query.q}/>
                </section>
            )
        }
    }
}
export default MainColumn;