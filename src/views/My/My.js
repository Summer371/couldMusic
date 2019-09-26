import React from "react";
import Logo from './Logo'
import List from './List'
import CreateList from './createList'
import Sing from './Sing'
import '../../assets/style/home/My.css';
import '../../assets/style/icon/my/iconfont.css';
export default class My extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
        }
    }

    render() {
        return (
            <div className={"my"}>
                <div>
                    <Logo></Logo>
                    <List id={this.state.id} {...this}></List>
                    <CreateList id={this.state.id}{...this}></CreateList>
                </div>
                <Sing></Sing>
            </div>
        )
    }

    componentDidMount() {
        if (localStorage.wyId) {
            this.setState({
                id: localStorage.wyId
            })
        } else {
            this.props.history.push("/login")
        }
    }
}