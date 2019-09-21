import React from "react";
import {connect} from "react-redux";
import {
    bindActionCreators
} from "redux";
import personalized from "../../../store/actionCreator/personalized";
 class NewSong extends React.Component{
    render(){
        const {newSong}=this.props;
        return (
            <ul>
                {
                    newSong.map((v, i) => {
                        return (
                            <li key={i} onClick={()=>{
                                this.props.history.push({
                                    pathname:"/songSheetDetail",
                                    backname:this.props.location.pathname,
                                    state:{
                                        id:v.id
                                    }
                                })
                            }}>
                                <img src={v.picUrl} alt=""/>
                                <p>{v.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
     componentDidMount(){
         this.props.newSongs();
     }
}
function mapStateToProps(state) {
    return{
        newSong:state.personalized.newSong//推荐新歌
    }
}
function mapDispatchToProps(dispatch) {
    return  bindActionCreators(personalized,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(NewSong)