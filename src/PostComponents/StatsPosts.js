import { Component } from "react";

class StatsPosts extends Component {
    /**
     * dynamically generates the stats posts list on the right column
     * the list is sorted by number of posts posted by the user
     * @returns {HTMLElement}
     */
    render() {
        const userStats = this.props.userData.users.sort((a, b) => a.nberPosts < b.nberPosts).map(elem=> {
            return (
                <tr key={elem.user_id}><td>{elem.user_id}</td><td>{elem.nberPosts}</td></tr>
            )
        })

        return (
            <div>
                <table className="tables">
                    <tbody>
                        <tr><th>STATS</th></tr>
                        <tr><th>User</th><th>nb. of Posts</th></tr>
                        {userStats}
                    </tbody>
                </table>
            </div>

        )
    }
}
export default StatsPosts;
