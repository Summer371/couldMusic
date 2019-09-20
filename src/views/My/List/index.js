import React from "react";
export default class List extends React.Component{
    render() {
        return (
            <div className={"list"}>
                <ul className={"left"}>
                    <li>
                        <span className={"iconfont iconbendiyinle"}></span>
                    </li>
                    <li>
                        <span className={"iconfont iconzuijinbofang"}></span>
                    </li>
                    <li>
                        <span className={"iconfont iconxiazaiguanli"}></span>
                    </li>
                    <li>
                        <span className={"iconfont iconwodediantai"}></span>
                    </li>
                    <li>
                        <span className={"iconfont iconwodeshoucang"}></span>
                    </li>
                </ul>
                <ul className={"right"}>
                    <li>本地音乐（70）</li>
                    <li>最近播放（70）</li>
                    <li>下载管理（80）</li>
                    <li>我的电台（78）</li>
                    <li>我的收藏（78）</li>
                </ul>
            </div>
        );
    }
}
