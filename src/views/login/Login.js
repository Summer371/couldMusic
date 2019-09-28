import React from "react";
import "../../assets/style/login.css";
import { Icon,message } from 'antd';
import 'antd/dist/antd.css';
import {
    Link
} from "react-router-dom"
export default class Login extends React.Component{
    /*constructor(){
        super();
        this.state={
            checked:false
        }
    }*/
    loginByTel(){
        if(this.refs.sure.checked){
            this.props.history.push("/loginByTel")
        }else{
                message.warning('"请同意《用户协议》和《隐私政策》"');
            //alert("请同意《用户协议》和《隐私政策》")
        }
    }
    render(){
        return(
            <div className={"login"}>
                <div className={"bigLogo"}>
                    <img src={require("../../assets/img/logo.png")} style={{width:140}} alt="网易云"/>
                </div>
                <div className={"loginBy"}>
                    <button className={"telLogin"} onClick={this.loginByTel.bind(this)}>手机账号登录</button>
                    <button className={"rightNow"} onClick={this.props.history.push("/")}>立即体验</button>
                    <div className={"loginByOthers"}>
                        <Icon type="qq" style={{color:"white",fontSize:14}}/><Icon type="wechat" style={{color:"white"}}/>
                        <Icon type="weibo-circle" style={{color:"white"}}/><Icon type="github" style={{color:"white"}}/>
                    </div>
                    <div className={"sure"}>
                        <input type="checkbox"  ref={"sure"}/><label>同意<Link to={"/"}>《用户协议》</Link>和<Link to={"/"}>《隐私政策》</Link></label>
                    </div>
                </div>
            </div>
        )
    }
}