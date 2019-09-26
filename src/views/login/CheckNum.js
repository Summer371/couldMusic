import React from "react";
import { Button,Input,Icon } from 'antd';
export default class CheckNum extends React.Component{
    render(){
        return(
            <div className={"checkNum"}>
                <nav className={"topNav"}>
                    <Icon type="arrow-left" onClick={()=>this.props.history.go(-1)}/> <b>请输入验证码</b>
                </nav>
                <Input type="text" style={{border:"none",width:"80%"}} placeholder={"请输入验证码"} ref={"checkNum"}/>
                <Button onClick={this.login.bind(this)} type="danger" >立即登录</Button>
            </div>
        )
    }
    login(){
        this.$axios.post(`/captcha/verify?phone=${localStorage.telNum}&captcha=${this.refs.state.checkNum.value}`).then(data=>{
            this.props.history.push("/")
        })
    }
}