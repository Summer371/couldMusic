import
    React, {
    Fragment
}
    from 'react';
import { connect } from "react-redux"
import actionCreators from '../../../../store/actionCreator/station'
import "../../../../assets/style/station/anchor.css"
import {
    bindActionCreators
} from "redux"
class Program extends React.Component {
    constructor(){
        super();
        this.state={
            todayRecommendList: [{
                dj:{
                    nickname:'',
                    avatarUrl:'',
                    province:'',
                    backgroundUrl:''
                },
                copywriter:''
            }]
        }
    }
    render() {
        return (
            <Fragment>
                    <section>
                        <div className="hearf">
                            <div className="h_hearf">
                                <span>24小时榜</span>
                                <i className="iconfont icon-next"></i>
                            </div>
                            <div className="n_hearf">
                                <li>
                                    <div><img src="https://p2.music.126.net/WRInlDoL55NoWcaCx2fucg==/109951163601365892.jpg" alt=""/></div>
                                    <p>雅俗共赏</p>
                                </li>
                                <li>
                                    <div><img src="https://p2.music.126.net/m6rUjx5KXBxjnluU_bufcg==/19083123812315996.jpg" alt=""/></div>
                                    <p>我还能记得你</p>
                                </li>
                                <li>
                                    <div><img src="https://p2.music.126.net/JpGpHfy_DUAWeuIQHrjYbg==/1418370012865049.jpg" alt=""/></div>
                                    <p>忙能治愈一切矫情</p>
                                </li>
                            </div>
                        </div>
                        <div className="chorusf">
                            <div className="s_chorusf">
                                <div className="sz_chorusf">
                                    <h4>最热节目</h4>
                                    <i className="iconfont icon-wenhao"></i>
                                </div>
                            </div>
                            <div className="x_chorusf">
                                {
                                    this.state.todayRecommendList.map((v, index) => (
                                        <div key={index}>
                                            <li onClick={() => {
                                                this.props.history.push({
                                                    pathname: "/ShowDetails",
                                                    state: {
                                                        id: v.id,
                                                        img: v.picUrl
                                                    }
                                                })
                                            }}>
                                                <div className="z_chorusf"  >
                                                    <div className="z_shuf">
                                                        <p>{index + 1}</p>
                                                        <span>-0</span>
                                                    </div>
                                                    <div className="znz_chorusf">
                                                        <img src={v.dj.avatarUrl} alt=""/>
                                                    </div>
                                                    <div className="zny_chorusf">
                                                        <h5>{v.dj.nickname}</h5>
                                                        <div className="znx_chorusf">
                                                            <div className="nzx_chorusf">
                                                                <div>
                                                                    <img src={v.dj.backgroundUrl} alt=""/>
                                                                </div>
                                                                <span>{v.copywriter}</span>
                                                            </div>
                                                            <div className="nyx_chorusf">
                                                                |&nbsp;
                                                                <i className="iconfont icon-redu"></i>
                                                                <span>{this.$filter.djCount(v.dj.province)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="y_chorusf" >
                                                    <i className="iconfont icon-bofang"></i>
                                                </div>
                                            </li>
                                        </div>

                                    ))
                                }

                            </div>
                        </div>
                    </section>
            </Fragment>)
    }
    componentDidMount() {
        this.props.todayRecommend(0, 100); //电台推荐
    }
    componentWillReceiveProps(nextProps) {
            this.setState({
                todayRecommendList: nextProps.todayRecommendList
            })
        }
}
function mapStateToProps(state) {
    return {
        todayRecommendList: state.todayRecommendList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Program)