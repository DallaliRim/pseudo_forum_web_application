import RankedTopics from "../PostComponents/RankedTopics";
import RecentPosts from "../PostComponents/RecentPosts";
import StatsPosts from "../PostComponents/StatsPosts";
import {Component} from "react";

class RightColumn extends Component {
    state = '';
    /**
     * this is the handle for the topic change, updates the id and its value
     * @param {event} e 
     */
    handleTopicChange = (e) => {
        const {id, value} = e.target

        this.setState ({
            [id]:value,
        })
    }
    /**
     * The right column is in charge of containing the ranked topics, recent posts, and stats posts table
     * The forumData is being passed on to everyone along with the user data for the statsposts
     * @returns {HTMLElement}
     */
    render() {
        return (
            <section id="rightColumn">
                <RankedTopics forumData={this.props.forumData}/>
                <RecentPosts forumData={this.props.forumData}/>
                <StatsPosts userData={this.props.userData}/>
            </section>
        )
    }
}
export default RightColumn;