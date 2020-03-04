import React from "react";
import { Svg, G, Rect, Path } from "react-native-svg";
import { View } from "react-native";
import Layout from "../constants/Layout";

const GIcon = () => (
  <View
    style={{
      width: Layout.window.width * 0.15,
      height: Layout.window.width * 0.15
    }}
  >
    <Svg width="50px" height="50px" viewBox="0 0 50 50">
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="1.-Lock-Screen---Log-in"
          transform="translate(-86.000000, -615.000000)"
        >
          <G id="Group-4" transform="translate(86.000000, 615.000000)">
            <Rect
              id="Rectangle"
              fill="#D0021B"
              x="0"
              y="0"
              width="50"
              height="50"
              rx="25"
            ></Rect>
            <G
              id="google-plus"
              transform="translate(16.000000, 16.000000)"
              fill="#FFFFFF"
            >
              <Path
                d="M9.375,7.5 L9.375,11.25 L14.679375,11.25 C13.905,13.4325 11.82,15 9.375,15 C6.27375,15 3.75,12.47625 3.75,9.375 C3.75,6.27375 6.27375,3.75 9.375,3.75 C10.719375,3.75 12.013125,4.231875 13.018125,5.1075 L15.481875,2.28 C13.794375,0.81 11.626875,0 9.375,0 C4.205625,0 0,4.205625 0,9.375 C0,14.544375 4.205625,18.75 9.375,18.75 C14.544375,18.75 18.75,14.544375 18.75,9.375 L18.75,7.5 L9.375,7.5 Z"
                id="Path"
              ></Path>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  </View>
);
export default GIcon;