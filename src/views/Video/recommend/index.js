import React from "react"
import "../../../assets/style/video/recommend.css"
class Tv extends React.Component{
    render(){
        return(
            <div className={"video"}>
                <div className={"v-ul"}>
                    <div className={"v-li"}>
                        <div className={"v-img"}>
                            <img src={require("../../../assets/img/1.jpg")}/>
                            <div className={"v-now"}>音乐现场</div>
                            <div className={"v-action"}><i className={"iconfont"}>&#xe621;</i>734万</div>
                        </div>
                        <div className={"v-name"}>
                            <div className={"v-singing"}>陈月季-月半小夜曲速度深V是</div>
                            <img src={require("../../../assets/img/1.jpg")}/>
                        </div>
                        <div className={"v-bottom"}>
                            <img src={require("../../../assets/img/1.jpg")}/>
                            <div className={"v-live"}>音乐现场Live</div>
                            <div className={"v-good"}>
                                <i className={"iconfont"}>&#xe601;</i>
                                <span>666</span>
                            </div>
                            <div className={"v-comment"}>
                                <i className={"iconfont"}>&#xe6a5;</i>
                                <span>64545</span>
                            </div>
                            <i className={"iconfont"}>&#xe6c6;</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tv