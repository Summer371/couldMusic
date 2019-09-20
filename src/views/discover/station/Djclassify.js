import
    React, {
    Fragment
}
    from 'react';
// import {connect} from "react-redux"
// import actionCreators from '../../../store/actionCreator/station'
// import {
//     bindActionCreators
// } from "redux"
import "../../../assets/style/station/classify.css"

class Djclassify extends React.Component {
    render() {
        return (
            <Fragment>
                <header className={"classifyHeader"}>
                    <div className="go_back">
                        <div className="n_go_back">
                            <i className="iconfont icon-xia" onClick={()=>{
                                this.props.history.push("/station")}
                            }></i>
                            <span onClick={()=>{
                                this.props.history.push("/station")}
                            }>电台分类</span>
                        </div>
                    </div>
                </header>
                <footer>
                    <div className="s_footer">
                        <div className="ss_footer">
                            <h4>热门分类</h4>
                        </div>
                        <div className="sx_footer">
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-huatong"></i>
                                    <span>合作|翻唱</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-icon_erji"></i>
                                    <span>3D|电子</span>
                                </li>
                            </div>
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-kaixin"></i>
                                    <span>情感调频</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-yinyuered"></i>
                                    <span>音乐故事</span>
                                </li>
                            </div>
                            <div className="d_border">
                                <li className="n_border">
                                    <i className="iconfont icon-biaoqing"></i>
                                    <span>二次元</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-book"></i>
                                    <span>有声书</span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="x_footer">
                        <div className="xs_footer">
                            <h4>更多分类</h4>
                        </div>
                        <div className="xx_footer">
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-dengpao"></i>
                                    <span>知识技能</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-shangyecaijing"></i>
                                    <span>商业财经</span>
                                </li>
                            </div>
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-renwen"></i>
                                    <span>人文历史</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-abc1153313easyiconnet"></i>
                                    <span>外语世界</span>
                                </li>
                            </div>
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-qinzi"></i>
                                    <span>亲子宝贝</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-shanzi"></i>
                                    <span>相声曲艺</span>
                                </li>
                            </div>
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-youshengduwu"></i>
                                    <span>美文读物</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-ico_tuokouxiu"></i>
                                    <span>脱口秀</span>
                                </li>
                            </div>
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-guangbo"></i>
                                    <span>广播剧</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-mingxing"></i>
                                    <span>明星做主播</span>
                                </li>
                            </div>
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-yule"></i>
                                    <span>娱乐|影视</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-kexue"></i>
                                    <span>科技科学</span>
                                </li>
                            </div>
                            <div>
                                <li className="n_border">
                                    <i className="iconfont icon-xiaoyuan"></i>
                                    <span>校园|教育</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-feiji"></i>
                                    <span>旅途|城市</span>
                                </li>
                            </div>
                            <div className="anchor">
                                <li className="n_border blue">
                                    <i className="iconfont icon-wenhao"></i>
                                    <span>我要做主播</span>
                                </li>
                            </div>

                        </div>
                    </div>
                </footer>
            </Fragment>)
    }

    componentDidMount() {

    }
}

// function mapStateToProps(state) {
//     return {
//
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actionCreators, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Djclassify)
export default Djclassify

