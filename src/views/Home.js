import React from "react";
import { Icon } from 'antd';
import {
    Route,
    Switch,
    NavLink
} from "react-router-dom";
import Discover from "./discover/Discover";
import My from './My/My'
import "../assets/style/home/home.css";
export default class Home extends React.Component{
    render(){
        return(
            <div className={"home"}>
                    <nav className={"homeNav"}>
                        <Icon type="menu" />
                        <NavLink to={"/my"}>我的</NavLink>
                        <NavLink to={"/"}>发现</NavLink>
                        <NavLink to={"/video"}>视频</NavLink>
                        <Icon type="search" />
                    </nav>
                    <Switch>
                        <Route path={"/my"} component={My}></Route>
                        <Route path={"/video"} ></Route>
                        <Route path={"/discover"}  component={Discover}></Route>
                        <Route path={"/"}  component={Discover}></Route>
                    </Switch>
            </div>
        )
    }
}