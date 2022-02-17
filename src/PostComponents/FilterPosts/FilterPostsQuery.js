import { Component } from "react";
import ForumPost from "../ForumPost";
class FilterPostsQuery extends Component{
    /**
     * displays forum posts based on what a user types in the search bar in header
     * searches the json by author or title and will display accordingly
     * @returns {HTMLElement}
     */
    render(){
        const forumData = this.props.forumData
        const forumQuery = this.props.query
        let rQuery = new RegExp("^" + forumQuery);
        let emptySearchArr = []
        //creates an array of posts to later be filters
        forumData.categories.forEach((elem) => {
            elem.topicList.forEach((elem) => {
                elem.listPosts.forEach((elem) => {
                    emptySearchArr.push(elem)
                })
            })
        })
        //filters the array using the regex expression
        let searchResults = emptySearchArr.filter((elem)=>{
            return rQuery.test(elem.text) || rQuery.test(elem.author)
        })
        const relatedPosts = ""
        //makes each filtered post into a working forum post component 
        const forumPost = searchResults.map((elem,i)=>{
            return(
                <ForumPost key={i} post={elem} relatedPosts={relatedPosts}/>
            )
            
        })
        return(
            <section id="forumPostsInfo">
                <div id="allPosts">
                    {forumPost}
                </div>
            </section>
        )
    }
}
export default FilterPostsQuery