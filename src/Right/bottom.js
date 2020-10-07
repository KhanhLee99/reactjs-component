import React, { Component } from 'react'
import New from './new'

export default class Bottom extends Component {
    render() {
        let imgNew = "https://i.ytimg.com/vi/KhTCatAKVpk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCyBWwQSwuscDRDlzYux6vTZLcZjw";
        let titleNew = "title3";
        let contentNew = "content3";
        let new3 = {imgNew, titleNew, contentNew};
        return (
            <div className="bottom">
                <div className="title-bottom">
                    Bai viet moi
                    </div>
                <New imgNew="https://i.ytimg.com/vi/CulBRA4HFgk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCwGAWffWBYstStu8vsn8AbQKOX9Q" titleNew= "title1" contentNew = "content1"/>
                <New imgNew="https://i.ytimg.com/vi/l4RyIm0dZyo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBiy0kZj0Z1YX99AFs7aSVWD_100A" titleNew= "title2" contentNew = "content2"/>
                <New {...new3}/>
            </div>
        )
    }
}
