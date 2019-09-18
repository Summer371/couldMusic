import React  from "react";
import { Icon } from 'antd';
import {
    NavLink
} from "react-router-dom";
export default class DiscoverNav extends React.Component{
    render(){
        return(
            <nav className={"discoverNav"}>
                <div onClick={()=>{
                    this.props.history.push("/everydayRecommend")
                }}>
                    <Icon type="apple" />
                    <p>每日推荐</p>
                </div>
                <NavLink to={"/songSheet"}>
                    <Icon type="apple" />
                    <p>歌单</p>
                </NavLink>
                <div onClick={()=>{
                    this.props.history.push("/ranking")
                }}>
                    <Icon type="apple" />
                    <p>排行榜</p>
                </div>
                <div onClick={()=>{
                    this.props.history.push("/station")
                }}>
                    <Icon type="apple" />
                    <p>电台</p>
                </div>
            </nav>
        )
    }
}