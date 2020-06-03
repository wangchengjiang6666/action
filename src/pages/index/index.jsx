import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import API from "../../service/api";
import { add, minus, asyncAdd } from "../../store/counter/action";

import "./index.scss";

// @connect(
//   ({ counter }) => ({
//     counter
//   }),
//   dispatch => ({
//     add() {
//       dispatch(add());
//     },
//     dec() {
//       dispatch(minus());
//     },
//     asyncAdd() {
//       dispatch(asyncAdd());
//     }
//   })
// )
class Index extends Component {
  //   config = {
  //     navigationBarBackgroundColor:'#333333'
  //     }
  //   }

  componentDidMount() {
    let result = await API.post(
      "/reset/login",
      {
        username: '112',
        password: '1'
      },
      "application/x-www-form-urlencoded"
    );
    console.log(result)
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <View>首页</View>;
  }
}

export default Index;
