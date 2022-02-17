import { Component } from "react";
import ForumPosts from "../ForumPosts";
class FilterPostsTopic extends Component {
    state ='';
    /**
     * Handles the topic change
     * @param {event} e 
     */
    handleTopicChange = (e) => {
        const {id, value} = e.target
        this.setState({
            [id]:value,
        })
        this.setState({show:true})
    }
    componentDidUpdate() {
        console.log("updating topic")
        let allBtns = []
        allBtns = document.querySelectorAll(".showBtn")
        allBtns.forEach(btn => {
            btn.click()
        });
    }
    /**
     * dynamically populates the topic selection bar according to the selected
     * category in the category selection bar and passes on information to the
     * forum posts
     * @returns {HTMLElement}
     */
    render() {
        let relatedTopics = this.props.forumData.categories[0].topicList
        let chosenCategory = this.props.forumData.categories[0] 
        
        for(const i of this.props.forumData.categories) {
            if(this.props.state.categorySelect === i.name) {
                relatedTopics = i.topicList
                chosenCategory = i
            }
        }

        let topicList = []

        for (let i = 0; i < relatedTopics.length; i++) {
            topicList.push(relatedTopics[i].topic_title)
        }
        const forumTopic = topicList.map(elem => {
            return(
                <option key={elem}>
                    {elem}
                </option>
            )
        })

        return(
            <section id="topicSection">
                <label> Related Topic </label>
                    <select id="topicSelect" name="topicSelect" onChange={this.handleTopicChange}>
                        {forumTopic}
                    </select>
                    <ForumPosts forumData = {this.props.forumData} chosenCategory = {chosenCategory}  chosenTopic = {this.state} show = {true}/>
            </section>
        )
    }
}
export default FilterPostsTopic;