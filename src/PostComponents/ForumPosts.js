import { Component } from "react";
import ForumPost from "./ForumPost";

class ForumPosts extends Component {
    /**
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        this.state = {
            postsList:this.props.chosenCategory.topicList[0].listPosts,
        } 
    }
    /**
     * dynamically generates the posts list according to the selected topic
     * and category by calling the forumPost so that each post is its own component
     * @returns {HTMLElement}
     */
    render(){     
        let relatedPosts = this.props.chosenCategory.topicList[0].listPosts
        for(let i = 0 ; i < this.props.chosenCategory.topicList.length ; i++) {
            if(this.props.chosenTopic.topicSelect === this.props.chosenCategory.topicList[i].topic_title) {
                relatedPosts = this.props.chosenCategory.topicList[i].listPosts
            }
        }

        const forumPost = relatedPosts.map((elem, i) => {
            return(
                <ForumPost key={i} post={elem} state={this.state} relatedPosts={this.state.postsList} show={true}> </ForumPost>
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
export default ForumPosts;