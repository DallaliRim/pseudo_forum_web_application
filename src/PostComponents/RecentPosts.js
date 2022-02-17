import {Component} from "react";

class RecentPosts extends Component {
    /**
     * dynamically generates the recent posts list on the right column
     * the list is sorted by date from recent-old
     * @returns {HTMLElement}
     */
    render() {
        let allPosts = []
        this.props.forumData.categories.map(elem => {
            return (
                elem.topicList.forEach(topic => {
                    topic.listPosts.forEach(post => {
                        allPosts.push(post)
                    });
                })
            )
        })
        let recentPosts = allPosts.sort((a, b)=> a.date < b.date).map(elem=> {
            return (
                <tr key={elem.text}><td key={elem.author}>{elem.author}</td><td key={elem.rate}>{elem.rate}</td><td key={elem.date}>{elem.date}</td></tr>
            )
        })
        return (
            <table id="recentPostsTable" className="tables">
                <tbody>
                    <tr><th>RECENT TOPICS</th></tr>
                    <tr><th>Author</th><th>Rank</th><th>When</th></tr>
                    {recentPosts}
                </tbody>
            </table>
        )
    }
}
export default RecentPosts;