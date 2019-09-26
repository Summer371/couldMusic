import React from "react";
import { Button,Input,Icon } from 'antd';
export default class Password extends React.Component{
    render(){
        return(
            <div  className={"password"}>
                <nav >
                    <Icon type="arrow-left" onClick={()=>this.props.history.go(-1)}/> <b>请输入密码</b>
                </nav>
                <Input type="password" style={{border:"none",width:"80%"}} placeholder={"请输入密码"} ref={"password"}/>
                <Button onClick={this.login.bind(this)} type="danger" >立即登录</Button>
            </div>
        )
    }
   login(){
        this.$axios.post(`/login/cellphone?phone=${localStorage.telNum}&password=${this.refs.password.state.value}`).then(({data})=>{
            console.log(data)
            if(data.account.id){
                localStorage.wyId=data.account.id;
                    this.props.history.push("/")
            }
        })
   }
}