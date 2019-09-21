import React from "react"
import "../../../assets/style/video/mvTop.css"
export default class MvTop extends React.Component{
    render(){
       return(
            <div>
                <div className={"m-top"}>
                    <div className={"t-title"}>
                        <h3>排行榜 <span>></span></h3>
                        <h5>更新时间：2019-1-1</h5>
                    </div>
                    <div className={"t-img"}>
                        <img src={require("../../../assets/img/adv.jpg")}/>
                        <i className={"iconfont"}>&#xe656;</i>
                    </div>
                </div>
            </div>
        )
    }
}
