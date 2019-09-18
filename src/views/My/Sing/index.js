import React from 'react';
export default class Sing extends React.Component{
    render() {
        return (
            <div className={'Sing'}>
                <nav className={'center'}>
                    <div className={'singPic'}>
                        <img className={"img"} src={require('../../../assets/img/logo.png')} alt=""/>
                    </div>
                    <div className={"singName"}>
                        <span>绝不会放过</span>
                        <span className={"move"}>横划可以切换上下首哦</span>
                    </div>
                </nav>
                <div className={"btn"}>
                    <span>
                        <i  className={"iconfont iconbofang"}></i>
                    </span>
                    <span >
                        <i className={"iconfont iconbofangliebiao"}></i>
                    </span>
                </div>
            </div>
        );
    }
}