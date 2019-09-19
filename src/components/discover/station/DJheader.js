import React, { Fragment } from "react";
import { Carousel } from 'antd';
export default class stationList extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {djBannerList}=this.props
        return (
            <Fragment>
                <header className={"station"}>
                    <div className="go_back">
                        <div className="n_go_back">
                            <i className="iconfont icon-xia" onClick={() => {
                                this.props.history.push("/")
                            }}></i>
                            <span onClick={() => {
                                this.props.history.push("/")
                            }}>电台</span>
                        </div>
                    </div>
                    <div className="player">
                        <ul>
                            <Carousel autoplay>
                                {
                                    djBannerList.map((v, i) => {
                                        return (
                                            <li key={i}>
                                                <img src={v.imageUrl} alt="" />
                                            </li>
                                        )
                                    })
                                }
                            </Carousel>
                        </ul>

                    </div>
                    <div className="sort">
                        <li>
                            <div onClick={()=>{
                                this.props.history.push("/Djclassify")
                            }}><i className="iconfont icon-leimupinleifenleileibie"></i></div>
                            <span>电台分类</span>
                        </li>
                        <li>
                            <div><i className="iconfont icon-changyemianpaixingbang"></i></div>
                            <span>电台排行</span>
                        </li>
                        <li>
                            <div onClick={()=>{
                                this.props.history.push("/PayFine")
                            }}><i className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i></div>
                            <span>付费精品</span>
                        </li>
                        <li>
                            <div><i className="iconfont icon-xueyuan"></i></div>
                            <span>主播学院</span>
                        </li>
                    </div>
                </header>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.djBanner();
    }
}