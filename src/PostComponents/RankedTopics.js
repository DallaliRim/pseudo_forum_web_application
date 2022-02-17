import {Component} from "react";

class RankedTopics extends Component {
    /**
     * dynamically generates the ranked topics list on the right column
     * the list is sorted by the number od posts per topic
     * @returns {HTMLElement}
     */
    render() {
        let allTopics = []
        this.props.forumData.categories.map(elem => {
            return (
                elem.topicList.forEach(topic => {
                    allTopics.push(topic)
                })
            )
        })

        let rankedTopics = allTopics.sort((a, b) => a.nberPost < b.nberPost).map(elem=> {
            return (
                <tr key={elem.topic_title}><td key={elem.topic_title}> {elem.topic_title} </td><td key={elem.nberPost}>{elem.nberPost}</td><td key={elem.status}>{elem.status}</td></tr>
            )
        })
        
        return (
            <table className="tables">
                <tbody>
                    <tr><th>RANKED TOPICS</th></tr>
                    <tr><th>Title</th><th>Posts #</th><th>state</th></tr>
                    {rankedTopics}
                </tbody>
            </table>
        )
    }
}
export default RankedTopics