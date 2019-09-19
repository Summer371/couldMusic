import { Collapse } from 'antd';
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import createDispatch from '../../../store/actionCreator/userPlayList'
const { Panel } = Collapse;
class CreateList extends React.Component{
    render() {
        return (
            <div className={"create"}>
                <Collapse defaultActiveKey={['1']} accordion={false} bordered={false} onChange={callback}>
                    <Panel header={`创建的歌单(${this.props.songListed.length})`} key="1">
                                {this.props.songListed?this.props.songListed.map((v,i)=>(
                                        <div className={"myLove"} key={i} onClick={()=>{
                                            this.props.props.history.push({
                                                pathname:"/myMusic",
                                                state:{
                                                    playListId:v.id
                                                }
                                            })
                                        }}>
                                            <img className={'love'} src={v.coverImgUrl} alt=""/>
                                            <div className={i===0?"center":"onCenter"}>
                                                <span>{v.name}</span>
                                                <span>
                                            <span className={"num"}>{v.trackCount}首{i===0?",已下载4首":''}</span>
                                        </span>
                                            </div>
                                            <div className={"loveItem"}>
                                                <i></i>
                                                <span>{i===0?'心动模式':'...'}</span>
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



