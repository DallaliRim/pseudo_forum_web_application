import { Component } from "react";

class ForumPost extends Component {
    /**
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            likes:this.props.post.likes,
            relatedPosts:this.props.relatedPosts,
            id:this.props.post.id,
            show:true
        }
    }
    /**
     * returns a single post to the forumPosts with all of the 
     * necessary information inside a div
     * @returns {HTMLElement}
     */
    render() {
        return(
            <div id="forumPostsDiv" className="singlePost" key={this.props.post.id} onLoad={()=> this.handlePutItBackPlz()}>
                {this.state.show ?
                <div>
                    <h3 id="forumPosts"> {this.props.post.text} </h3>
                    <hr/>
                    <div className = "postInfo">
                        <p> by : {this.props.post.author} </p>    
                        <p> {this.props.post.date} </p> 
                        <p> likes : {this.state.likes}</p>
                        <button id="likeBtn" onClick={() => this.handleLike()}> like </button>
                        <button id="dislikeBtn" onClick = {() => this.handleDislike()}> dislike </button>
                        <button onClick = {() => this.handleDelete()}> DELETE </button>
                    </div>
                </div>
                :
                <div> 
                    <h1> THIS POST HAS BEEN DELETED --------- POST ID : {this.props.post.id} </h1>
                    <button class="showBtn" onClick = {() => this.handleDelete()}> SHOW </button> 
                </div>}
            </div>
        )
    } 

    //deletes the post calling the handle delete
    handleDelete() {
        this.setState({show: !this.state.show})
    }
    //decrements the like count on the post calling the handleDislike
    handleDislike() {
        if(this.state.likes === this.props.post.likes) {
            this.setState({likes:this.state.likes-1})
        }
        else if(this.state.likes === this.props.post.likes-1){
            this.setState({likes:this.state.likes+1})
        }
        else{
            this.handleLike()
        }
    }
    //increments the like count on the post calling the handleLike
    handleLike() {
        if(this.state.likes === this.props.post.likes) {
            this.setState({likes:this.state.likes+1})
        }
        else if(this.state.likes === this.props.post.likes+1){
            this.setState({likes:this.state.likes-1})
        }
        else {
            this.handleDislike()
        }
    }
}
export default ForumPost;