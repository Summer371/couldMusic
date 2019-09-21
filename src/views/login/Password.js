import React from "react";
import { Button,Input,Icon } from 'antd';
export default class Password extends React.Component{
    render(){
        return(
            <div  style={{padding:10,width:"100%"}}>
                <nav style={{fontSize:18,height:40}}>
                    <Icon type="arrow-left" onClick={()=>this.props.history.go(-1)}/> <b>请输入密码</b>
                </nav>
                <Input type="password" style={{border:"none",width:"80%"}} placeholder={"请输入密码"} ref={"password"}/>
                <Button  style={{marginTop:20,width:"90%",borderRadius:20}} onClick={this.login.bind(this)} type="danger" >立即登录</Button>
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