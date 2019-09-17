import React from "react";
import "../../assets/style/home/discover.css";
import Banner from "../../components/discover/banner";//轮播
import SongsList from "../../components/discover/songsList";//歌单列表
import TopNew from "../../components/discover/top_new";//新碟 and 新歌
import DiscoverNav from "../../components/discover/discoverNav";//发现导航
import Listen from "../../components/discover/listen";//听听
 class Discover extends React.Component{
    render(){
        return(
            <div className={"discover"}>
                <Banner></Banner>
                <DiscoverNav {...this.props}></DiscoverNav>
               <SongsList></SongsList>
                <TopNew></TopNew>
                <Listen></Listen>
            </div>
        )
    }
}

export default Discover