import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
export default class PagePicker extends Component {
  state = {
    selector: ["美国", "中国", "巴西", "日本"],
    selectorChecked: "美国",
    timeSel: "12:01",
    dateSel: "2018-04-22"
  };
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    });
  };
  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    });
  };
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    });
  };
  render() {
    return (
      <View className="container">
        <View className="page-body">
          <View className="page-section">
            <Text>地区选择器</Text>
            <View>
              <Picker
                mode="selector"
                range={this.state.selector}
                onChange={this.onChange}
              >
                <AtList>
                  <AtListItem
                    title="国家地区"
                    extraText={this.state.selectorChecked}
                  />
                </AtList>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text>时间选择器</Text>
            <View>
              <Picker mode="time" onChange={this.onTimeChange}>
                <AtList>
                  <AtListItem
                    title="请选择时间"
                    extraText={this.state.timeSel}
                  />
                </AtList>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text>日期选择器</Text>
            <View>
              <Picker mode="date" onChange={this.onDateChange}>
                <AtList>
                  <AtListItem
                    title="请选择日期"
                    extraText={this.state.dateSel}
                  />
                </AtList>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
