import React, { Component } from 'react'

export default class Top extends Component {
    render() {
        return (
            <div className="top">
                <b>DK bai viet moi</b>
                <p className="detail">Cong nghe dang thay doi nhanh chong hay ...</p>
                <input type="text" placeholder="Ten cua ban" />
                <input type="text" placeholder="Email cua ban" />
                <button>Dang ki</button>
                <p className="duoi">ban se nhan duoc email thong bao khi co bai viet moi</p>
            </div>
        )
    }
}
