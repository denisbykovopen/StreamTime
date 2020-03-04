import React from "react";
import { Svg, G, Rect, Path } from "react-native-svg";
import { View } from "react-native";
import Layout from "../constants/Layout";

const FBIcon = () => (
  <View
    style={{
      width: Layout.window.width * 0.15,
      height: Layout.window.width * 0.15
    }}
  >
    <Svg width="100%" height="100%" viewBox="0 0 50 50">
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="1.-Lock-Screen---Log-in"
          transform="translate(-26.000000, -615.000000)"
        >
          <G id="Group-2" transform="translate(26.000000, 615.000000)">
            <Rect
              id="Rectangle"
              fill="#4A90E2"
              x="0"
              y="0"
              width="50"
              height="50"
              rx="25"
            ></Rect>
            <G
              id="facebook-(4)"
              transform="translate(19.000000, 13.000000)"
              fill="#FFFFFF"
            >
              <Path
                d="M7.8125,8.59375 L7.8125,5.46875 C7.8125,4.60625 8.5125,3.90625 9.375,3.90625 L10.9375,3.90625 L10.9375,0 L7.8125,0 C5.2234375,0 3.125,2.0984375 3.125,4.6875 L3.125,8.59375 L0,8.59375 L0,12.5 L3.125,12.5 L3.125,25 L7.8125,25 L7.8125,12.5 L10.9375,12.5 L12.5,8.59375 L7.8125,8.59375 Z"
                id="Path"
              ></Path>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default FBIcon;