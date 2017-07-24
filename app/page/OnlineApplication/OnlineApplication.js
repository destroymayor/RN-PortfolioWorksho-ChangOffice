/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//線上申辦
import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, Image, Linking, Text, View } from "react-native";

import Btn from "../../utils/Button";
import screen from "../../Style/screen";

export default class OnlineApplication extends Component {
  _NavigationBtn(page, PageName, PageUrl) {
    const { navigate } = this.props.navigation;
    if (Platform.OS === "android") {
      navigate(page, {
        PageName: PageName,
        PageUrl: PageUrl
      });
    } else {
      Linking.openURL(PageUrl);
    }
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/onlineapplication.png")}>
        <ScrollView>
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o1.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(this, "WebPage", "全國地政電子謄本系統", "http://210.71.181.102/")}
          />
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o2.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "彰化縣地政電傳資訊整合系統",
              "http://pgo-chcgetw.land.nat.gov.tw/HE90_CHHG/chhg_2/plug_in/begin.cfm"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o3.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "地政電子資料流通服務網",
              "http://ccs.land.moi.gov.tw/jsp/HomePageController"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o4.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={() => Linking.openURL("https://clir.land.moi.gov.tw/cap/?websn=474")}
          />
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o5.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "測繪圖資整合資料查詢申購",
              "http://eservice.nlsc.gov.tw/CaseApply/login.aspx"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o6.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "Hinet地政服務",
              "http://land.hinet.net/index.asp"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o7.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "下班延時預約",
              "http://www.xh-land.gov.tw/chaspx/Service_Detail.aspx?web=88&id=1479"
            )}
          />
          <Btn
            ImageSource={require("../../image/btn/OnlineApplication/o8.png")}
            ImageStyle={{ width: 180, height: 100 }}
            onPress={this._NavigationBtn.bind(
              this,
              "WebPage",
              "假日預約",
              "http://www.xh-land.gov.tw/chaspx/Service_Detail.aspx?web=88&id=1480"
            )}
          />
        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: screen.width,
    height: screen.height
  }
});
