import React, { Component } from 'react'
import FragmentsTableRow from './FragmentsTableRow'

class Fragments extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <FragmentsTableRow />
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Fragments
