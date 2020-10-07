import React, { Component } from 'react'

export default class New extends Component {
    render() {
        return (
            <div className="_block">
                <div className="img-r">
                    <img src={this.props.imgNew} alt="" />
                </div>
                <div className="content-r">
                    <p className="title-r">{this.props.titleNew}</p>
                    <p className="nho-r">{this.props.contentNew}</p>
                </div>
            </div>

        )
    }
}
