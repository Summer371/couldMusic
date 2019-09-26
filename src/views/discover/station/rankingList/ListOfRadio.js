import
    React, {
    Fragment
}
    from 'react';
import {
    bindActionCreators
} from "redux"
import {connect} from "react-redux"
import actionCreators from '../../../../store/actionCreator/station'
import "../../../../assets/style/station/broadcasting.css"

class ListOfRadio extends React.Component {
    constructor() {
        super();
        this.state = {
            stationList: {
                book: {
                    categoryName: "",
                    radios: []
                }
            },
            todayRecommendList: [{
                picUrl: "",
                name:'',
                rcmdtext: '',
                subCount:""
            }]
        }
    }

    render() {
        const {PayFineList} = this.props;//付费精品
        let book = this.state.stationList.book;//有声书
        return (
            <Fragment>
                <section>
                    <div className="hearfff">
                        <div className="h_hearfff">
                            <span>付费精品榜</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hearfff">
                            {
                                PayFineList.map(v => (
                                    <li key={v.id} onClick={() => {
                                        this.props.history.push({
                                            pathname: "/ShowDetails",
                                            state: {
                                                id: v.id,
                                                img: v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt=""/></div>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }

                        </div>
                    </div>
                    <div className="hearfff">
                        <div className="h_hearfff">
                            <span>有声书|广播剧榜</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hearfff">
                            {
                                book.radios.map(v => (
                                    <li key={v.id} onClick={() => {
                                        this.props.history.push({
                                            pathname: "/ShowDetails",
                                            state: {
                                                id: v.id,
                                                img: v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt=""/></div>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="chorusfff">
                        <div className="s_chorusfff">
                            <div className="sz_chorusfff">
                                <h4>最热电台</h4>
                                <i className="iconfont icon-wenhao"></i>
                            </div>
                        </div>
                        <div className="x_chorusfff">
                            {
                                this.state.todayRecommendList.map((v, index) => (
                                    <div key={index}>
                                        <li  onClick={() => {
                                            this.props.history.push({
                                                pathname: "/ShowDetails",
                                                state: {
                                                    id: v.id,
                                                    img: v.picUrl
                                                }
                                            })
                                        }}>
                                            <div className="z_chorusfff" >
                                                <div className="z_shufff">
                                                    <p>{index + 1}</p>
                                                    <span>-0</span>
                                                </div>
                                                <div className="znz_chorusfff">
                                                    <img src={v.picUrl} alt=""/>
                                                </div>
                                                <div className="zny_chorusfff">
                                                    <h5>{v.name}</h5>
                                                    <div className="znx_chorusfff">
                                                        <div className="nzx_chorusfff">
                                                            <span>{v.rcmdtext}</span>
                                                        </div>
                                                        <div className="nyx_chorusfff">
                                                            <i className="iconfont icon-redu"></i>
                                                            <span>{this.$filter.djCount(v.subCount)}</span>
                                                        </div>
                                                    </div>
                                                </div>
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
        this.props.PayFine(3);
        this.props.recommend();
        this.props.todayRecommend(0, 100); //电台推荐
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.stationList.length > 0 && nextProps.todayRecommendList.length > 0) {
            this.setState({
                stationList: {
                    book: {//有声书
                        categoryName: nextProps.stationList[5].categoryName,
                        radios: nextProps.stationList[5].radios
                    }
                },
                todayRecommendList: nextProps.todayRecommendList
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        stationList: state.stationList,
        PayFineList: state.PayFineList, //付费精品
        todayRecommendList: state.todayRecommendList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfRadio)