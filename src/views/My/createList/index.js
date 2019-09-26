import { Collapse, Popconfirm, message } from 'antd';
import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Modal,Input,  } from 'antd';
import createDispatch from '../../../store/actionCreator/userPlayList'
import { Drawer, Radio,Checkbox } from 'antd';
import PlayListDrawer from '../../playListDrawer'
const RadioGroup = Radio.Group;
const { Panel } = Collapse;
const { confirm } = Modal;
class CreateList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            visible: false,
            placement: 'left',
            visible1: false,
            checked:false
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
                                cancelText={"取消"}
                                okText={"确定"}
                                visible={this.state.visible1}
                                onOk={this.handleOk.bind(this)}
                                onCancel={this.handleCancel}
                            >
                                <Input placeholder="请输入歌单名" id={"input"}/>
                                <Checkbox onChange={this.onChange1}>设置为隐私歌单</Checkbox>
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
                                                <span id={"aaaaa"}>{i===0?'心动模式':(
                                                    <PlayListDrawer {...this} list={v}></PlayListDrawer>
                                                )}</span>
                                            </div>
                                        </div>
                                )):null}
                    </Panel>
                </Collapse>

            </div>
        );
    };
    showDeleteConfirm(id) {
        confirm({
            title: '确定要删除此歌单么？',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            cancelType:"danger",
            onOk() {
                console.log(id);
            },
            onCancel() {
            },
        });
    }
    componentDidMount() {
        this.props.getSongListed();
    }
    onChange1(e) {
        this.setState({
            checked:e.target.checked
        })
    }
    showModal = () => {
        this.setState({
            visible1: true,
        });
    };
    async handleOk (e) {
        this.setState({
            visible1: false,
        });
        let input = document.querySelector("#input")
        console.log(input.value)
        let data = await axios.get("/playlist/create?name="+input.value)
        this.props.getSongListed();
    };
    handleCancel = e => {
        this.setState({
            visible1: false,
        });
    };
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



