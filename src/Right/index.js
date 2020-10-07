import React, { Component } from 'react'
import Bottom from './bottom'
import Top from './top'

export default class Right extends Component {
    render() {
        return (
            <div className="right">
                <Top/>
                <Bottom/>
            </div>

        )
    }
}
