import React,{Component} from "react";

import { Button,Input,Icon } from 'antd';
export default class LoginByTel extends Component{
    render(){
        return(
            <div style={{padding:10,width:"100%"}}>
                <nav className={"topNav"}>
                    <Icon type="arrow-left" onClick={()=>this.props.history.go(-1)}/> <b>手机号登录</b>
                </nav>
                <p style={{marginBottom:30,marginTop:30,color:"grey"}}>未注册的手机号登录后自动创建账号</p>
                <span style={{color:"grey"}}>+86</span><Input style={{border:"none",width:"80%"}} placeholder="请输入手机号"  ref={"telNum"} />

                <Button  style={{marginTop:20,width:"90%",borderRadius:20}} type="danger" onClick={this.next.bind(this)}>下一步</Button>
            </div>
        )
    }
    next(){
        localStorage.telNum=this.refs.telNum.state.value;
        this.$axios.get("/cellphone/existence/check?phone="+this.refs.telNum.state.value).then(({data})=>{
            if(data.exist===1){
                localStorage.nickName=data.nickname;
                this.props.history.push({
                    pathname:"/password",
                    state:{
                        telNum:localStorage.telNum
                    }
                });
            }else{
                this.props.history.push("/checkNum");
                this.$axios.get("/captcha/sent?phone="+localStorage.telNum)
            }
        })
    }
    componentDidMount(){

    }
}