import React from "react";
import { Carousel } from 'antd';
import {connect} from "react-redux";
import {
    bindActionCreators
} from "redux";
import banner from "../../../store/actionCreator/banner";

class Banner extends React.Component{
    render(){
        const {banner} =this.props;
        return(
            <div className={"banner"}>
                <Carousel autoplay>
                    {
                        banner.map((v,i)=>{
                            return(
                                <div key={i} onClick={()=>{
                                    this.props.history.push({
                                        pathname:"/songSheetDetail",
                                        backname:this.props.location.pathname,
                                        state:{
                                            id:v.id
                                        }
                                    })
                                }}>
                                    <img src={v.pic} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
    componentDidMount(){
        this.props.getBannerList();
    }
}
function mapStateToProps(state) {
    return{
        banner:state.banner.banner//轮播
    }
}
function mapDispatchToProps(dispatch) {
    return  bindActionCreators(banner,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Banner)