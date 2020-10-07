import React, { Component } from 'react'
import Post from './post'

export default class Left extends Component {
    render() {
        return (
            <div className="left">
                <h3>SERIES: REACT JS: TU CO BAN DEN NANG CAO</h3>
                <div className="block bdTop"></div>
                <Post imgPost = "https://i.ytimg.com/vi/HXkh7EOqcQ4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAlY6KF9y8_zg0tA9dkz-3cTUZxnw"
                        titlePost = "CON TRAI CƯNG (Piano Version) | K-ICM ft B Ray | MV Official"
                        nhoPost = "52.417.429 lượt xem"
                        ndPost = "Con Trai của đấng cha mẹ. Rapper B Ray cùng K-ICM đã lột tả sắc nét nhất từng góc "/>
                <Post imgPost = "https://i.ytimg.com/vi/55F8bT91KG4/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCZ7RE3mwdFoc9GJIdydTBdXx7bTg"
                        titlePost = "[OFFICIAL MV] Westside SQUAD - jombie ft Dế Choắt & Endless"
                        nhoPost = "39.896.444 lượt xem"
                        ndPost = "Westside Squad MP3 nhạc nền của bộ phim 798Mười Movie "/>
                <Post imgPost = "https://i.ytimg.com/vi/cUmpJ2zwfVU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLA7PVjOg4rawzS502jLwUpjK0ixqg"
                        titlePost = "CON TRAI CƯNG (Piano Version) | K-ICM ft B Ray | MV Official"
                        nhoPost = "213.421.429 lượt xem"
                        ndPost = "Đi qua những rung rinh, những xao xuyến nhẹ, cũng thấm thía  "/>
                <Post imgPost = "https://i.ytimg.com/vi/wTUKCnHN-xg/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDQqdauOMOjDq5bBak7LvlIc8PrPw"
                        titlePost = "YEU LA THA THU | OFFICIAL OST | ONLY C | LYRIC VIDEO"
                        nhoPost = "105.444.901 lượt xem"
                        ndPost = "Lời từ trái tim chân thành nên nói chung hơi bị tâm đắc với sản phẩm lần này "/>
            </div>
        )
    }
}
