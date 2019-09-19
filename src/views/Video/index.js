import React from "react"
import Tv from "./recommend/index"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom"
import "../../assets/style/video/video.css"
class Video extends React.Component{
    render(){
        return(
            <div>
                <div className={"V-list"}>
                    <>
                        <NavLink className={"v-recommend"}to={"/"} activeStyle={{color:"red"}} exact>推荐</NavLink>
                        <NavLink className={"v-recommend"}to={"/video/mv"} activeStyle={{color:"red"}}>MV</NavLink>
                        <NavLink className={"v-recommend"}to={"/now"} activeStyle={{color:"red"}}>现场</NavLink>
                        <NavLink className={"v-recommend"}to={"/dancer"} activeStyle={{color:"red"}}>舞蹈</NavLink>
                    </>
                    <Switch>
                        <Route path={"/video/mv"} component={""}></Route>
                        <Route path={"/dancer"} component={""}></Route>
                        <Route path={"/now"} component={""}></Route>
                        <Route path={"/"} component={""}></Route>
                    </Switch>
                </div>
            <Tv></Tv>
        </div>
    )
    }
}
export default Video