import React, { Component } from 'react'
import ReactDom from 'react-dom'

class Portals extends Component {
    render() {
        return ReactDom.createPortal(
            <div>
                Portals Demo
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default Portals
