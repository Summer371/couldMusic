import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import appList from "./router";//路由
import './App.css';
import 'antd/dist/antd.css'; // 加载 JS
import 'antd/es/date-picker/style/css'; // 加载 CSS
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        {
                            appList.map((v, i) => {
                                return (
                                    <Route path={v.path} key={i} exact={v.exact} component={v.component}></Route>
                                )
                            })
                        }
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default App;
