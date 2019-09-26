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
import Video from "./Video"
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
                        <Drawer1 {...this}></Drawer1>
                        <NavLink to={"/my"} activeStyle={{color:'red',fontWeight:'bold'}}>我的</NavLink>
                        <NavLink to={"/"} exact activeStyle={{color:'red',fontWeight:'bold'}}>发现</NavLink>
                        <NavLink to={"/video"} activeStyle={{color:'red',fontWeight:'bold'}}>视频</NavLink>
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
    };
};
export default Home;