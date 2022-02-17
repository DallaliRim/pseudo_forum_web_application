import { Component } from "react";
import FilterPostsTopic from "./FilterPostsTopic";  

class FilterPostsCategory extends Component {
    state = '';
    /**
     * Takes event as a parameter and takes care of updating the value then the category is changed
     * @param {event} e 
     */
    handleCategoryChange = (e) => {
        const {id, value} = e.target
        this.setState({
            [id]:value,
            forumData:null
        })
    }

    /**
     * fetches the data from the json file
     */
    componentDidMount() {
        let url="../../json/forum.json"
        fetch(url) 
        .then(response => { 
            if(response.ok) {
              return response.json()
            } else {
              throw new Error('status error : ', response.status);
            }
          })
          .then(data => { 
            this.setState({forumData:data});
          })
          .catch(error => {console.log('An error occured, please check the url : ', error)})
    }

    /**
     * dynamically populated the category selection and calls the topic filter
     * @returns {HTMLElement}
     */
    render() {
        const forumCategory = this.props.forumData.categories.map((elem) => {
            return(
                <option key={elem.id}>
                    {elem.name}
                </option>
            )
        })

        return(
        <section id="categorySection">
            <label> Category </label>
                <select id="categorySelect" onChange={this.handleCategoryChange}>
                    {forumCategory}
                </select> 
            <FilterPostsTopic forumData={this.props.forumData} state={this.state} show={true}/>
        </section>
        )
    }
}
export default FilterPostsCategory;