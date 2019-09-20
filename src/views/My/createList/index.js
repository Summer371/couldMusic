import { Collapse } from 'antd';
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Modal } from 'antd';
import createDispatch from '../../../store/actionCreator/userPlayList'
import { Drawer, Button, Radio } from 'antd';
const RadioGroup = Radio.Group;
const { Panel } = Collapse;
class CreateList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            visible: false,
            placement: 'left',
            visible1: false,
        }
    }
    render() {
        const jia = ()=>(
            <div className={"position"}><span className={"jia"} onClick={(event)=>{
                event.stopPropagation();
                this.showModal()
            }}>+</span><span className={"iconfont iconcaidan-dian jia"}></span></div>
        )
        return (
            <div className={"create"}>
                <Collapse defaultActiveKey={['1']} accordion={false} bordered={false} onChange={callback}>
                    <Panel header={`创建的歌单(${this.props.songListed.length})`} extra={jia()} key="1">
                        <div>
                            <Modal
                                title="新建歌单"
                                closable={false}
                                style={{background:"red",height:200+"px"}}
                                bodyStyle={{height:"200px"}}
                                visible={this.state.visible1}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <input type="text" placeholder={"请输入歌单标题"}/><br/>
                                <input type="checkbox"/><label htmlFor="">设置为隐私歌单</label>
                            </Modal>
                        </div>
                                {this.props.songListed?this.props.songListed.map((v,i)=>(
                                        <div className={"myLove"} key={i}>
                                            <div className={"left"} onClick={()=>{
                                                this.props.props.history.push({
                                                    pathname:"/myMusic",
                                                    state:{
                                                        playListId:v.id
                                                    }
                                                })
                                            }}>
                                                <img className={'love'} src={v.coverImgUrl} alt=""/>
                                                <div className={i === 0 ? "center" : "onCenter"}>
                                                    <span>{v.name}</span>
                                                    <span>
                                                        <span
                                                            className={"num"}>{v.trackCount}首{i === 0 ? ",已下载4首" : ''}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={"loveItem"}>
                                                <span id={"aaaaa"}>{i===0?'心动模式':(<div>
                                                    <i className={"iconfont iconcaidan-dian"} onClick={this.showDrawer}></i>
                                                    <RadioGroup
                                                        defaultValue={this.state.placement}
                                                        onChange={this.onChange}
                                                    >
                                                    </RadioGroup>
                                                    <Drawer
                                                        bodyStyle={{padding:0}}
                                                        getContainer = {false}
                                                        placement={'bottom'}
                                                        closable={false}
                                                        onClose={this.onClose}
                                                        visible={this.state.visible}
                                                    >
                                                        <div className={"songListName"}>歌单：{v.name}</div>
                                                        <div className={"songOption"}>
                                                            <li><i className="tu iconfont iconbofang"></i><span>下载</span></li>
                                                            <li><i className="tu iconfont iconbofang"></i><span>分享</span></li>
                                                            <li><i className="tu iconfont iconbofang"></i><span>编辑歌单信息</span></li>
                                                            <li><i className="tu iconfont iconbofang"></i><span>删除</span></li>
                                                        </div>
                                                    </Drawer>
                                                </div>)}</span>
                                            </div>
                                        </div>
                                )):null}
                    </Panel>
                </Collapse>

            </div>
        );
    };
    componentDidMount() {
        this.props.getSongListed();
    }
    showModal = () => {
        this.setState({
            visible1: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible1: false,
        });
    };
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
    }
}
function callback(key) {
}
function mapState(state) {
    return {
        songListed:state.userPlayList.songListed
    };
};
function mapDispatch(dispatch) {
    return bindActionCreators(createDispatch,dispatch)
}
export default connect(mapState,mapDispatch)(CreateList)



