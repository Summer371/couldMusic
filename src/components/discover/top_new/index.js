import React  from "react";
import {
    NavLink ,
    Route,
    Switch
} from "react-router-dom";
import Topalbum from "../topAlbum";
import NewSong from "../newSong";
export default class Top_New extends React.Component{
    render(){
        return(
            <div className={"topAlbum"}>
                <h4><NavLink to={{pathname:"/discover"}}>新碟</NavLink> | <NavLink to={{pathname:"/discover/newSong"}}>新歌</NavLink></h4>
                <Switch>
                    <Route path={"/discover/newSong"} component={NewSong}></Route>
                    <Route path={"/discover"} component={Topalbum}></Route>
                </Switch>

            </div>
        )
    }
}