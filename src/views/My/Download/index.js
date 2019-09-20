import React from 'react';
import '../../../assets/style/my/myRecentlyPlay.css';
import LocalMusicRouter from '../../../router/LocalMusic';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Tabs } from 'antd';
import createDispatch from '../../../store/actionCreator/myRecentlyPlay'
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
class myRecentlyPlay extends React.Component{
    render() {
        const { TabPane } = Tabs;
        function callback(key) {
        }
        return (
            <div className={"recentlyPlay"}>
                <div className={"top fiexd"}>
                    <div className={"left"}>
                        <i className={"iconfont iconxia"} onClick={()=>{
                            this.props.history.push('/my')
                        }}></i>
                        <span className={"size"}>下载管理</span>
                    </div>
                    <div className={"right"}>
                        <i className={"iconfont iconsousuo"}></i>
                        <i className={"iconfont iconcaidan-dian"}></i>
                    </div>
                </div>
                <div className={"fixed"}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="单曲" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="电台节目" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="视频" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>,
                    {/*<Router>*/}
                    {/*    <nav  className={"bottom"}>*/}
                    {/*        <NavLink className={"router"}  exact activeStyle={{color:"red",borderBottom:"2px solid red"}} to={'/localmusic'}>单曲</NavLink>*/}
                    {/*        <NavLink className={"router"} exact activeStyle={{color:"red",borderBottom:"2px solid red"}} to={'/localmusic/ator'}>歌手</NavLink>*/}
                    {/*        <NavLink className={"router"} activeStyle={{color:"red",borderBottom:"2px solid red"}} to={'/localmusic/zhuanji'}>专辑</NavLink>*/}
                    {/*    </nav>*/}
                    {/*    <Switch>*/}
                    {/*        {*/}
                    {/*            LocalMusicRouter.map((v,i)=>(*/}
                    {/*                <Route key={i} exact={v.exact}  path={v.path} component={v.component}></Route>*/}
                    {/*            ))*/}
                    {/*        }*/}
                    {/*    </Switch>*/}
                    {/*</Router>*/}
                </div>
            </div>
        );
    };
    componentDidMount() {
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