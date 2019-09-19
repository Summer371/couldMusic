import
    React, {
    Fragment
}
    from 'react';
import {
    NavLink,
    Route
}from "react-router-dom"
import "../../../../assets/style/station/anchor.css"

import ListOfRadio from "./ListOfRadio"
import TheHostList from './TheHostList'
import Program from './Program'
class DJHome extends React.Component {
    render() {
        return (
            <Fragment>
                <header className="programsheader">
                    <div className="go_backf">
                        <div className="flex_headerf">
                            <div className="n_go_backf">
                                <i className="iconfont icon-xia" onClick={()=>{
                                    this.props.history.push("/station")}
                                }></i>
                                <span onClick={()=>{
                                    this.props.history.push("/station")}
                                }>主播电台排行榜</span>
                            </div>
                            <div className="navf">

                                <li><NavLink to={"/DjHome/thehostlist"} activeStyle={{color:'red',borderBottom:'0.185vw solid red'}}>主播榜</NavLink></li>
                                <li><NavLink to={"/DjHome"} exact  activeStyle={{color:'red',borderBottom:'0.185vw solid red'}}>节目榜</NavLink></li>
                                <li><NavLink to={"/DjHome/listofradio"} activeStyle={{color:'red',borderBottom:'0.185vw solid red'}}>电台榜</NavLink></li>

                            </div>
                        </div>
                    </div>
                </header>
                <Route path={"/DjHome"}exact component={Program}/>
                <Route path={"/DjHome/listofradio"} component={ListOfRadio}/>
                <Route path={"/DjHome/thehostlist"} component={TheHostList}/>
            </Fragment>)
    }
}
export default DJHome