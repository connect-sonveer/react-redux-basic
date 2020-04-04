import React, { Component } from 'react'

export class MountingLifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sonveer'
        }
        console.log('Mounting constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Mounting getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    

    render() {
        return (
            <div>
                Mounting lifecycle Occurence (to see details open console)
                {console.log('Mounting render')}
            </div>
        )
    }
}

export default MountingLifecycle
