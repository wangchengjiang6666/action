import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import PropTypes from "prop-types";
import { connect } from "@tarojs/redux";
import FakeSearchBar from "../../components/fake-search-bar";
import URL from "../../constants/urls";
import "./index.scss";
import Panel from "../../components/panel";
import HorizonList from "../../components/horizon-list";
import {
  getNewBooks,
  getHotBooks,
  getRecommendBooks
} from "@store/home/action";

@connect(
  ({ home }) => ({
    newBooks: home.newBooks,
    hotBooks: home.hotBooks,
    recommendBooks: home.recommendBooks
  }),
  {
    dispatchGetNewBooks: getNewBooks,
    dispatchGetHotBooks: getHotBooks,
    dispatchGetRecommendBooks: getRecommendBooks
  }
)
class Home extends Component {
  state = {
    newBooks: []
  };
  config = {
    navigationBarTitleText: "首页"
  };
  static propTypes = {
    newBooks: PropTypes.arrayOf(PropTypes.object),
    hotBooks: PropTypes.arrayOf(PropTypes.object),
    recommendBooks: PropTypes.arrayOf(PropTypes.object)
  };
  constructor() {
    super(...arguments);
    this.onClickSearchBar = this.onClickSearchBar.bind(this);
  }
  onClickSearchBar() {
    Taro.navigateTo({ url: URL.SEARCH });
  }
  componentDidMount() {
    this.props.dispatchGetNewBooks();
    this.props.dispatchGetHotBooks();
    this.props.dispatchGetRecommendBooks();
  }

  /* componentWillReceiveProps(nextProps) {
    this.setState({
      newBooks: nextProps.newBooks
    });
  } */
  render() {
    return (
      <View>
        <FakeSearchBar onClick={this.onClickSearchBar} />
        <Panel
          url={`${URL.BOOK_LIST}?type=new`}
          title="新书速递"
          className="panel--first"
        >
          <HorizonList data={this.props.newBooks} />
        </Panel>
        <Panel
          url={`${URL.BOOK_LIST}?type=hot`}
          title="近期热门"
          className="margin-top-lg"
        >
          <HorizonList data={this.props.hotBooks} />
        </Panel>
        <Panel
          url={`${URL.BOOK_LIST}?type=recommend`}
          title="为你推荐"
          className="margin-top-lg"
        >
          <HorizonList data={this.props.recommendBooks} />
        </Panel>
      </View>
    );
  }
}
export default Home;
