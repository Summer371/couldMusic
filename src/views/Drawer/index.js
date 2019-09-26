import React from 'react';
import { Icon } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import "../../assets/style/home/drawer.css"
import { Drawer, Button, Radio } from 'antd';
import createDispatch from '../../store/actionCreator/userDetail';
const RadioGroup = Radio.Group;
class Drawer1 extends React.Component{
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
            <span style={{display:"inline-block",fontSize:"16px"}}>
                <Icon type="menu" onClick={this.showDrawer}/>
                <RadioGroup
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                </RadioGroup>
                <Drawer
                    bodyStyle = {{padding:0}}
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className="drawer">
                        <img className="Img" src={this.props.userList.userList.avatarUrl} alt=""/>
                        <div className="one">
                            <span className="two">
                                <span>{this.props.userList.userList.nickname}</span>
                                <span className="small">LV.{this.props.userList.num?this.props.userList.num:0}</span>
                            </span>
                            <span className="diandao">签到</span>
                        </div>
                        <div className="only">
                            <div className="flex">
                                <span>开通黑胶VIP</span>
                                <span>新客仅5元</span>
                            </div>
                            <div>
                                <span>黑胶新客首月仅5元</span>
                                <img src="" alt=""/>
                            </div>
                        </div>
                        <div className="around">
                            <li className="flex"><i className={"iconfont iconmassage three"}></i><span>我的消息</span></li>
                            <li className="flex"><i className={"iconfont iconhaoyou three"}></i><span >我的好友</span></li>
                            <li className="flex"><i className={"iconfont icontinggeshiqu three"}></i><span>听歌识曲</span></li>
                            <li className="flex"><i className={"iconfont icongexingzhuangban three"}></i><span>个性装扮</span></li>
                        </div>
                        <div className="row">
                            <li className = "between"><span><i className={"iconfont iconpiao"}></i><span className={"four"}>演出</span></span><span>Alan Walker</span></li>
                            <li className = "between"><span><i className={"iconfont icongouwuche"}></i><span className={"four"}>商城</span></span><span>3折49元秒杀<i className={"iconfont iconerji"}></i></span></li>
                            <li><i className={"iconfont iconfujinderen"}></i><span className={"four"}>附近的人</span></li>
                            <li><i className={"iconfont iconlingsheng"}></i><span className={"four"}>口袋铃声</span></li>
                            <li><i className={"iconfont iconwodedingdan"}></i><span className={"four"}>我的订单</span></li>
                            <li><i className={"iconfont icondengpao"}></i><span className={"four"}>创作者中心</span></li>
                            <li><i className={"iconfont icondingshi"}></i><span className={"four"}>定时停止播放</span></li>
                            <li><i className={"iconfont iconscan_icon"}></i><span className={"four"}>扫一扫</span></li>
                            <li><i className={"iconfont iconclock"}></i><span className={"four"}>音乐闹钟</span></li>
                            <li><i className={"iconfont iconyunpan"}></i><span className={"four"}>音乐云盘</span></li>
                            <li><i className={"iconfont iconzaixiantinggemianliuliang"}></i><span className={"four"}>在线听歌免流量</span></li>
                            <li className = "between"><span><i className={"iconfont iconyouxituijian"}></i><span className={"four"}>游戏推荐</span></span><span>领取专属宠物<i></i></span></li>
                            <li><i className={"iconfont iconyouhuijuan"}></i><span className={"four"}>优惠券</span></li>
                            <li className = "between"><span><i className={"iconfont iconcebianlan_qingshaonianmoshi_"}></i><span className={"four"}>青少年模式</span></span><span>未开启</span></li>
                        </div>
                        <div className={"fixed"}>
                            <li><i className={"iconfont iconnight"}></i><span className={"five"}>夜间模式</span></li>
                            <li><i className={"iconfont iconshezhi"}></i><span className={"five"}>设置</span></li>
                            <li><i className={"iconfont icontuichu"}></i><span className={"five"}>退出</span></li>
                        </div>
                    </div>
                </Drawer>
            </span>
        )
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };
    componentDidMount(){
        this.props.getUserList();
    }
}
function mapState(state) {
    return {
        userList:state.userDetail
    }
}
function mapDispatch(dispatch) {
    return bindActionCreators(createDispatch,dispatch)
}
export default connect(mapState,mapDispatch)(Drawer1)
