import React from "react";
class Official extends React.Component{
    render(){
        const {rankingListDetail} =this.props;
        return(
            <div className={"officialRanking"}>
                <h3>官方榜</h3>
                <ul>
                    {
                        rankingListDetail.map((v,i)=>{
                            if(v.ToplistType){
                                return(
                                    <li key={i}>
                                        <span>{v.updateFrequency}</span>
                                        <img src={v.coverImgUrl} alt=""/>
                                        <dl>
                                            {
                                                v.tracks.map((n,j)=>{
                                                    return(
                                                        <dd key={j}>
                                                            {++j}.{n.first?n.first:n.name}--{n.second?n.second:n.name}
                                                        </dd>
                                                    )
                                                })
                                            }
                                        </dl>
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
export default Official