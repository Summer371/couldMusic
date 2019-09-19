import React  from "react";
export default class DiscoverNav extends React.Component{
    render(){
        return(
            <nav className={"discoverNav"}>
                <div onClick={()=>{
                    this.props.history.push("/everydayRecommend")
                }}>
                    <span><i className={"iconfont icon-weibiaoti-"} /></span>
                    <p>每日推荐</p>
                </div>
                <div onClick={()=>{
                    this.props.history.push("/songSheet")
                }}>
                    <span><i className={"iconfont icon-gedan"} /></span>
                    <p>歌单</p>
                </div>
                <div onClick={()=>{
                    this.props.history.push("/ranking")
                }}>
                    <span><i className={"iconfont"}>&#xe7bd;</i></span>
                    <p>排行榜</p>
                </div>
                <div onClick={()=>{
                    this.props.history.push("/station")
                }}>
                    <span><i className={"iconfont icon-diantai"} /></span>
                    <p>电台</p>
                </div>
            </nav>
        )
    }
}