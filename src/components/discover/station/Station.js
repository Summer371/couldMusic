import React, { Fragment } from "react";
export default class stationList extends React.Component {
    constructor() {
        super();
        this.state = {
            stationList: {
                book: {
                    categoryName: "",
                    radios: []
                },
                broadcastList: {
                    categoryName: "",
                    radios: []
                },
                recreation: {
                    categoryName: "",
                    radios: []
                },
                reading: {
                    categoryName: "",
                    radios: []
                },
                talkShow: {
                    categoryName: "",
                    radios: []
                },
                knowledge: {
                    categoryName: "",
                    radios: []
                },
                business: {
                    categoryName: "",
                    radios: []
                },
                pastRecords: {
                    categoryName: "",
                    radios: []
                },
                foreign: {
                    categoryName: "",
                    radios: []
                },
                treasure: {
                    categoryName: "",
                    radios: []
                },
                folkArts: {
                    categoryName: "",
                    radios: []
                },
                journey: {
                    categoryName: "",
                    radios: []
                }
            },
            todayRecommendList: [],
            num:0
        }
    }
    render() {
        const book = this.state.stationList.book;//有声书
        const broadcastList = this.state.stationList.broadcastList;//广播剧
        const recreation = this.state.stationList.recreation;//娱乐影视
        const reading = this.state.stationList.reading;//美文读物
        const talkShow = this.state.stationList.talkShow;//脱口秀
        const knowledge = this.state.stationList.knowledge;//知识技能
        const business = this.state.stationList.business;//商业财经
        const pastRecords = this.state.stationList.pastRecords;//人文历史
        const foreign = this.state.stationList.foreign;//外语世界
        const treasure = this.state.stationList.treasure;//亲子宝贝
        const folkArts = this.state.stationList.folkArts;//相声曲艺
        const journey = this.state.stationList.journey;//旅途城市

        const { PayFineList } = this.props;//付费精品
        return (
            <Fragment>
                <section style={{ dispatch:this.props.stationList !== null&&PayFineList.length>1 ? "block" : "none" }}>
                    <div className="recommend">
                        <div className="s_recommend">
                            <div className="sz_recommend"> <span>电台推荐</span></div>
                            <div className="sy_chorus" onClick={this.onSwitch.bind(this)}>
                                <i className="iconfont icon-shuaxin"></i>
                                <span>换一换</span>
                            </div>
                        </div>
                        <div className="n_hear">
                            {
                                this.state.todayRecommendList.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdtext}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="boutique">
                        <div className="s_boutique">
                            <div className="sz_boutique">
                                <h4>精品推荐</h4><span>你值得拥有的优质内容</span>
                            </div>
                            <div className="sy_chorus">
                                <span onClick={()=>{
                                    this.props.history.push("/PayFine")
                                }}>全部精品</span>
                            </div>
                        </div>
                        <div className="n_hear">
                            {
                                PayFineList.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="chorus">
                        <div className="s_chorus">
                            <div className="sz_chorus">
                                <h4>创作|翻唱</h4>
                                <i className="iconfont icon-next"></i>
                            </div>
                            <div className="sy_chorus">
                                <i className="iconfont icon-bofang1"></i>
                                <span>播放全部</span>
                            </div>
                        </div>
                        <div className="x_chorus">
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{book.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                book.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="chorus">
                        <div className="s_chorus">
                            <div className="sz_chorus">
                                <h4>情感调频</h4>
                                <i className="iconfont icon-next"></i>
                            </div>
                            <div className="sy_chorus">
                                <i className="iconfont icon-bofang"></i>
                                <span>播放全部</span>
                            </div>
                        </div>
                        <div className="x_chorus">
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{broadcastList.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                broadcastList.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="chorus">
                        <div className="s_chorus">
                            <div className="sz_chorus">
                                <h4>音乐故事</h4>
                                <i className="iconfont icon-next"></i>
                            </div>
                            <div className="sy_chorus">
                                <i className="iconfont icon-bofang"></i>
                                <span>播放全部</span>
                            </div>
                        </div>
                        <div className="x_chorus">
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{recreation.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                recreation.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="chorus">
                        <div className="s_chorus">
                            <div className="sz_chorus">
                                <h4>3D|电子</h4>
                                <i className="iconfont icon-next"></i>
                            </div>
                            <div className="sy_chorus">
                                <i className="iconfont icon-bofang"></i>
                                <span>播放全部</span>
                            </div>
                        </div>
                        <div className="x_chorus">
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                            <li>
                                <div className="z_chorus">
                                    <div className="znz_chorus">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="zny_chorus">
                                        <h5>雅俗共赏</h5>
                                        <div className="znx_chorus">
                                            <div className="nzx_chorus">
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <span>不不不</span>
                                            </div>
                                            <div className="nyx_chorus">
                                                |&nbsp;
                                    <i className="iconfont icon-redu"></i>
                                                <span>11万</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_chorus">
                                    <i className="iconfont icon-bofang"></i>
                                </div>
                            </li>
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{reading.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                reading.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl}alt=""  /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{talkShow.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                talkShow.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{knowledge.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                knowledge.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{business.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                business.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl}alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{pastRecords.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                pastRecords.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl}alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{foreign.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                foreign.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl}alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{treasure.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                treasure.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl}alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{folkArts.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                folkArts.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl}alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hear">
                        <div className="h_hear">
                            <span>{journey.categoryName}</span>
                            <i className="iconfont icon-next"></i>
                        </div>
                        <div className="n_hear">
                            {
                                journey.radios.map(v => (
                                    <li key={v.id} onClick={()=>{
                                        this.props.history.push({
                                            pathname:"/ShowDetails",
                                            state:{
                                                id:v.id,
                                                img:v.picUrl
                                            }
                                        })
                                    }}>
                                        <div><img src={v.picUrl} alt="" /></div>
                                        <div className="box-shadow"></div>
                                        <span>{v.name}</span>
                                        <p>{v.rcmdText}</p>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                </section>
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
                            <div className="d_border">
                                <li className="n_border blue">
                                    <i className="iconfont icon-wenhao"></i>
                                    <span>我要做主播</span>
                                </li>
                            </div>

                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.recommend();
        this.onSwitch(); //电台推荐
        this.props.PayFine(3)
    }
    onSwitch(){ //点击切换推荐
        if(this.state.num===15){
            this.setState({
                num:0
            })
        }else{
            this.setState({
                num:this.state.num+3
            })
        }
        this.props.todayRecommend(this.state.num); //电台推荐
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.stationList.length > 0 && nextProps.todayRecommendList.length > 0) {
            this.setState({
                stationList: {
                    book: {//有声书
                        categoryName: nextProps.stationList[5].categoryName,
                        radios: nextProps.stationList[5].radios
                    },
                    broadcastList: {//广播剧
                        categoryName: nextProps.stationList[6].categoryName,
                        radios: nextProps.stationList[6].radios
                    },
                    recreation: {//娱乐影视
                        categoryName: nextProps.stationList[11].categoryName,
                        radios: nextProps.stationList[11].radios
                    },
                    reading: {//美文读物
                        categoryName: nextProps.stationList[7].categoryName,
                        radios: nextProps.stationList[7].radios
                    },
                    talkShow: {//脱口秀
                        categoryName: nextProps.stationList[10].categoryName,
                        radios: nextProps.stationList[10].radios
                    },
                    knowledge: {//知识技能
                        categoryName: nextProps.stationList[13].categoryName,
                        radios: nextProps.stationList[13].radios
                    },
                    business: {//商业财经
                        categoryName: nextProps.stationList[16].categoryName,
                        radios: nextProps.stationList[16].radios
                    },
                    pastRecords: {//人文历史
                        categoryName: nextProps.stationList[9].categoryName,
                        radios: nextProps.stationList[9].radios
                    },
                    foreign: {//外语世界
                        categoryName: nextProps.stationList[12].categoryName,
                        radios: nextProps.stationList[12].radios
                    },
                    treasure: {//亲子宝贝
                        categoryName: nextProps.stationList[14].categoryName,
                        radios: nextProps.stationList[14].radios
                    },
                    folkArts: {//相声曲艺
                        categoryName: nextProps.stationList[8].categoryName,
                        radios: nextProps.stationList[8].radios
                    },
                    journey: {//旅途城市
                        categoryName: nextProps.stationList[18].categoryName,
                        radios: nextProps.stationList[18].radios
                    }
                },
                todayRecommendList: nextProps.todayRecommendList
            })
        }

    }
}
