import React from 'react';
import { Modal,Input,  } from 'antd';
import { Drawer, Radio,Checkbox } from 'antd';
import axios from 'axios'
const RadioGroup = Radio.Group;
const { confirm } = Modal;
class PlayListDrawer extends React.Component{
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
        return (
            <div>
                <i className={"iconfont iconcaidan-dian"} onClick={this.showDrawer}></i>
                <RadioGroup
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
                    <div className={"songListName"}>歌单：{this.props.list.name}</div>
                    <div className={"songOption"}>
                        <li><i className="tu iconfont iconbofang"></i><span>下载</span></li>
                        <li><i className="tu iconfont iconbofang"></i><span>分享</span></li>
                        <li><i className="tu iconfont iconbofang"></i><span>编辑歌单信息</span></li>
                        <li onClick={this.showDeleteConfirm.bind(this,this.props.list.id)} type="dashed"><i className="tu iconfont iconbofang"></i>
                            <span>删除</span>
                            {/**/}
                        </li>
                    </div>
                </Drawer>
            </div>
        )
    }
    componentDidMount() {
    };
    showDeleteConfirm(id) {
        this.onClose()
        confirm({
            title: '确定要删除此歌单么？',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            cancelType:"danger",
            onOk() {
                axios.get("/playlist/delete?id="+id)
            },
            onCancel() {
            },
        });
        this.props.props.getSongListed()
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
    }
};
export default PlayListDrawer;