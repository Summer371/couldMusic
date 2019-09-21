import React from "react";
class SongLists extends React.Component{
    render(){
        const {songSheetDetial}=this.props;
        const ids=[];
        const imgs=[];
        const singers=[];
        const songNames=[];
        songSheetDetial.map(v=>{
            ids.push(v.id);
            imgs.push(v.album.picUrl);
            singers.push(v.artists[0].name);
            songNames.push(v.name);
        })
        return(
            <div className={"songLists"}>
                <ul>
                    {
                        songSheetDetial.map((v,i)=>{
                            return(
                                <li key={i}>
                                    <div className={"songListsLeft"}>
                                        <img src={v.album.picUrl} width={"100px"} alt=""/>
                                        <div className={"songListsMiddle"}>
                                            <h4>{v.name}</h4>
                                            <p>{v.artists[0].name}</p>
                                        </div>
                                    </div>
                                    <div className={"songListsRight"}>
                                        <i className={"iconfont icon-zanting-wangyiicon"} onClick={()=>{
                                            this.props.history.push({
                                                pathname:"/player",
                                                backname:this.props.location.pathname,
                                                state:{
                                                    id:v.id,
                                                    ids,
                                                    img:v.album.picUrl,
                                                    imgs,
                                                    singer:v.artists[0].name,
                                                    singers,
                                                    songName:v.name,
                                                    songNames,
                                                    songSheetDetial
                                                }
                                            });
                                        }}></i>
                                        <i className={"iconfont icon-xinxipt"}></i>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default SongLists