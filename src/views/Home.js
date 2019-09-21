import React from "react";
import "../assets/style/font/iconfont.css"
import Drawer1 from './Drawer'
import {
    Route,
    Switch,
    NavLink
} from "react-router-dom";
import Search from "./Search";
import Discover from "./discover/Discover";
import My from './My/My';
import "../assets/style/home/home.css";
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            visible: false,
            placement: 'left',
            open:false
        }
    }
    render(){
        return(
            <div className={"home"}>
                    <nav className={"homeNav"}>
                        <Drawer1></Drawer1>
                        <NavLink to={"/my"} activeClassName={"activeA"}>我的</NavLink>
                        <NavLink to={"/"} exact activeClassName={"activeA"}>发现</NavLink>
                        <NavLink to={"/video"} activeClassName={"activeA"}>视频</NavLink>
                        <NavLink to={"/search"}><i className="iconfont">&#xe6cf;</i></NavLink>
                    </nav>
                    <Switch>
                        <Route path={"/my"} component={My}></Route>
                        <Route path={"/video"} ></Route>
                        <Route path={"/search"} component={Search}></Route>
                        <Route path={"/discover"}  component={Discover}></Route>
                        <Route path={"/"}  component={Discover}></Route>
                    </Switch>
            </div>
        )
    };
};
export default Home;