import React from "react";
import { Icon } from 'antd';
import "../assets/style/font/iconfont.css"
import {
    Route,
    Switch,
    NavLink
} from "react-router-dom";
import Search from "./Search";
import Discover from "./discover/Discover";


import Video from './Video'

import My from './My/My';

import "../assets/style/home/home.css";
export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            open:false
        }
    }
    render(){
        return(
            <div className={"home"}>
                    <nav className={"homeNav"}>
                        <Icon type="menu"/>
                        <NavLink to={"/my"}>我的</NavLink>
                        <NavLink to={"/"}>发现</NavLink>
                        <NavLink to={"/video"}>视频</NavLink>
                        <NavLink to={"/search"}><i className="iconfont">&#xe6cf;</i></NavLink>
                    </nav>
                    <Switch>
                        <Route path={"/my"} component={My}></Route>
                        <Route path={"/video"} component={Video}></Route>
                        <Route path={"/search"} component={Search}></Route>
                        <Route path={"/discover"}  component={Discover}></Route>
                        <Route path={"/"}  component={Discover}></Route>
                    </Switch>
            </div>
        )
    }
}