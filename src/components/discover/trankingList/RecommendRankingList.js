import React from "react";
class RecommendRankingList extends React.Component{
    render(){
        const {rankingListDetail} =this.props;
        console.log(this.props)
        return(
            <div className={"recommendRanking"}>
                <h3>推荐榜</h3>
                <ul>
                    {
                        rankingListDetail.map((v,i)=>{
                            if(!v.ToplistType){
                                return(
                                    <li key={i}>
                                        <span>{v.updateFrequency}</span>
                                        <img src={v.coverImgUrl} alt=""/>
                                        <p>{v.name}</p>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default RecommendRankingList