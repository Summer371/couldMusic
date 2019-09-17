import React from "react";
import {
    Icon
} from "antd";
class Ranking extends React.Component{
    render(){
        return(
            <div className={"ranking"}>
                <nav className={"topNav"}>
                    <Icon type="arrow-left" onClick={() => this.props.history.push("/songSheet")}/> <b>排行榜</b>
                </nav>
            </div>
        )
    }
}
export default Ranking