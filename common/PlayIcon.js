import React from "react";
import { Svg, G, Use } from "react-native-svg";
import Colors from "../constants/Colors";
import { View } from "react-native";
import Layout from "../constants/Layout";

const PlayIcon = () => (
  <View
    style={
      {
        width: Layout.window.width * 0.1,
        height: Layout.window.width * 0.1,
        // backgroundColor: Colors.play
      }
    }
  >
    <Svg width="100%" height="100%" viewBox="0 0 34 38">
      <G
        id="Page-1"
        stroke="black"
        stroke-width="1"
        fill="black"
        fill-rule="evenodd"
      >
        <G id="3.-Home-Screen" transform="translate(-305.000000, -223.000000)">
          <G id="Group-15" transform="translate(30.000000, 211.000000)">
            <G id="Path-3">
              <Use
                fill="black"
                fill-opacity="1"
                filter="url(#filter-2)"
                href="#path-1"
              ></Use>
              <Use 
                fill="black" 
                fill-rule="evenodd" 
                href="#path-1"
              ></Use>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default PlayIcon;
