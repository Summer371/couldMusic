import React from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/lib/date-picker/style/css';  
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom";
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/lib/date-picker/style/css';  
import CloudVillage from "../router/CloudVillage";
import Video from "../router/Video"
import Discover from "../router/Discover";
import My from "../router/My";
import Search from "../router/Search"
class MyMenu extends React.Component {
    state = {
        open: true,
      }
      onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
      }
  render() {
    // fix in codepen
     // fix in codepen
     const sidebar = (<List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
          if (index === 0) {
            return (<List.Item key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine
            >Category</List.Item>);
          }
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >Category{index}</List.Item>);
        })}
      </List>);

return (<div>
    <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>
    <Router>
                    <nav>
                        
                        <NavLink to={"/my"}>我的</NavLink>
                        <NavLink to={"/"}>发现</NavLink>
                        <NavLink to={"/cloudVillage"}>云村</NavLink>
                        <NavLink to={"./video"}>视频</NavLink>
                        <NavLink to={"/search"}>搜索</NavLink>
                    </nav>
                    <Switch>
                        <Route path={"/my"} component={My}></Route>
                        <Route path={"/cloudVillage"} component={CloudVillage}></Route>
                        <Route path={"/video"} component={Video}></Route>
                        <Route path={"/search"} exact component={Search}></Route>
                        <Route path={"/"} component={Discover}></Route>
                        
                    </Switch>
                </Router>
    </NavBar>
    <Drawer
      className="my-drawer"
      style={{ minHeight: document.documentElement.clientHeight }}
      enableDragHandle
      contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
      sidebar={sidebar}
      open={this.state.open}
      onOpenChange={this.onOpenChange}
    >
      Click upper-left corner
    </Drawer>
  </div>);
  }
}
export default MyMenu;