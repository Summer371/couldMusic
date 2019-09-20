import React from "react";
class SongLists extends React.Component{
    render(){
        const {everydaySongs}=this.props;
        const ids=[];
        const imgs=[];
        const singers=[];
        const songNames=[];
        everydaySongs.map(v=>{
            ids.push(v.id);
            imgs.push(v.album.picUrl);
            singers.push(v.artists[0].name);
            songNames.push(v.name);
        })
        return(
            <div className={"songLists"}>
                <ul>
                    {
                        everydaySongs.map((v,i)=>{
                            return(
                                <li key={i} onClick={()=>{
                                    this.props.history.push({
                                        pathname:"/player",
                                        state:{
                                            id:v.id,
                                            ids,
                                            img:v.album.picUrl,
                                            imgs,
                                            singer:v.artists[0].name,
                                            singers,
                                            songName:v.name,
                                            songNames
                                        }
                                    });
                                }}>
                                    <div className={"songListsLeft"}>
                                        <img src={v.album.picUrl} width={"100px"} alt=""/>
                                        <div className={"songListsMiddle"}>
                                            <h4>{v.name}</h4>
                                            <p>{v.artists[0].name}</p>
                                        </div>
                                    </div>
                                    <div className={"songListsRight"}>
                                        <i className={"iconfont icon-zanting-wangyiicon"}></i>
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