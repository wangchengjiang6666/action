import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">登录页面</View>;
  }
}

export default Index;
