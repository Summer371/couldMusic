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
            imgs.push(v.al.picUrl);
            singers.push(v.ar[0].name);
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
                                        <img src={v.al.picUrl} width={"100px"} alt=""/>
                                        <div className={"songListsMiddle"}>
                                            <h4>{v.name}</h4>
                                            <p>{v.ar[0].name}</p>
                                        </div>
                                    </div>
                                    <div className={"songListsRight"}>
                                        <i className={"iconfont icon-zanting-wangyiicon"} onClick={()=>{
                                            this.props.history.push({
                                                pathname:"/player",
                                                state:{
                                                    id:v.id,
                                                    ids,
                                                    img:v.al.picUrl,
                                                    imgs,
                                                    singer:v.ar[0].name,
                                                    singers,
                                                    songName:v.name,
                                                    songNames
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