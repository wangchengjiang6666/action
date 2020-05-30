import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";
import { AtTabs, AtTabsPane } from "taro-ui";

class Index extends Component {
  config = {
    navigationBarTitleText: "登录"
  };
  state = {
    current: 0
  };
  handleClick(value) {
    this.setState({
      current: value
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const tabList = [{ title: "手机" }, { title: "邮箱" }];
    return (
      <View className="loginContent">
        <View className="loginLogo">
          <img src={require("../../assets/images/logo.png")} alt="" />
        </View>
        <View className="loginMian">
          <AtTabs
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
            animated={false}
          >
            <AtTabsPane current={this.state.current} index={0}>
              <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
                标签页一的内容
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
                标签页二的内容
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    );
  }
}

export default Index;
