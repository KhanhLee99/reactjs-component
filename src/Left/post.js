import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className="block">
                <div className="img">
                    <img src={this.props.imgPost} alt="" />
                </div>
                <div className="content">
                    <p className="title">{this.props.titlePost}</p>
                    <p className="nho">{this.props.nhoPost}</p>
                    <p className="nd">{this.props.ndPost}</p>
                    <button className="btn">READ MORE</button>
                </div>
            </div>

        )
    }
}
