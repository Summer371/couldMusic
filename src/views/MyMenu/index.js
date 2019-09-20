import React from 'react';

/*import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom";*/
import 'antd-mobile/lib/date-picker/style/css';
import { Drawer, Button, Radio } from 'antd';
const RadioGroup = Radio.Group;

/*import CloudVillage from "../router/CloudVillage";
import Video from "../router/Video"
import Discover from "../router/Discover";
import My from "../router/My";
import Search from "../router/Search"*/
class MyMenu extends React.Component {
    state = {visible: false, placement: 'left'};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };
    render() {
        return (
            <div>
                <RadioGroup
                    style={{marginRight: 8}}
                    defaultValue={this.state.placement}
                    onChange={this.onChange}
                >
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </RadioGroup>
                <Button type="primary" onClick={this.showDrawer}>
                    Open
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}
export default MyMenu;