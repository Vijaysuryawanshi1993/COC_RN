import React from "react";
import { View } from "react-native";

class Splash extends React.Component {
  componentDidMount() {
    let self = this;
    setTimeout(function() {
      self.props.navigation.replace("Home");
    }, 3000);
  }

  render() {
    return <View style={{ flex: 1, backgroundColor: "blue" }} />;
  }
}

export default Splash;
