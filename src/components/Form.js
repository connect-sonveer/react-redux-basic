import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: ''
        }
    }

    handlefieldChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    

    render() {
        return (
            <div>
                Name <input type="text" name="name" value={this.state.name} onChange={this.handlefieldChange} />
            </div>
        )
    }
}

export default Form
