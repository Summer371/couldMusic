import React from 'react';
import '../../../assets/style/my/myRecentlyPlay.css';
import RecentlyRouter from '../../../router/recentlyPlay';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import createDispatch from '../../../store/actionCreator/myRecentlyPlay'
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
class myRecentlyPlay extends React.Component{
    render() {
        return (
            <div className={"recentlyPlay"}>
                <div className={"top fiexd"}>
                    <div className={"left"}>
                        <i className={"iconfont iconxia"} onClick={()=>{
                            this.props.history.push('/my')
                        }}></i>
                        <span className={"size"}>最近播放</span>
                    </div>
                    <div className={"right"}>
                        <span>清空</span>
                    </div>
                </div>
                <div className={"fixed"}>
                    <Router>
                        <nav  className={"bottom"}>
                            <NavLink className={"router"}  exact activeStyle={{color:"red",borderBottom:"2px solid red"}} to={'/myRecentlyPlay'}>歌曲{"100"}</NavLink>
                            <NavLink className={"router"} exact activeStyle={{color:"red",borderBottom:"2px solid red"}} to={'/myRecentlyPlay/recentlyZhiBo'}>直播{"0"}</NavLink>
                            <NavLink className={"router"} activeStyle={{color:"red",borderBottom:"2px solid red"}} to={'/myRecentlyPlay/recentlyVedios'}>视频{"37"}</NavLink>
                        </nav>
                        <Switch>
                            {
                                RecentlyRouter.map((v,i)=>(
                                    <Route key={i} exact={v.exact}  path={v.path} component={v.component}></Route>
                                ))
                            }
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    };
    componentDidMount() {
        console.log(this.props.location.state)
        if(this.props.location.state){
            localStorage.recentlyId=this.props.location.state.id
        }
    };
};
function mapState(state) {
    return {
        PlayList:state.myRecentlyPlay.playList
    }
};
function mapDispatch(dispatch) {
    return bindActionCreators(createDispatch,dispatch)
}
export default connect(mapState,mapDispatch)(myRecentlyPlay);