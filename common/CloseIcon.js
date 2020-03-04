import React from "react";
import { Svg, G, Use, Circle, Path, } from "react-native-svg";
import Colors from "../constants/Colors";
import { View } from "react-native";
import Layout from "../constants/Layout";

const CloseIcon = () => (
  <View
    style = {{
        width: Layout.window.width * 0.25,
        height: Layout.window.width * 0.25,
    }}
  >
    <Svg width="100%" height="100%" viewBox="0 0 69 69">
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="4.1.-Current-Projects-Screen-Pop-Up"
          transform="translate(-295.000000, -420.000000)"
        >
          <G id="Group-10" transform="translate(0.000000, 417.000000)">
            <G
              id="Group-8"
              filter="url(#filter-1)"
              transform="translate(314.000000, 20.000000)"
            >
              <Circle
                id="Oval"
                fill="#38CCFE"
                cx="15.5"
                cy="15.5"
                r="15.5"
              ></Circle>
              <G
                id="Group-4"
                transform="translate(9.500000, 9.500000)"
                fill="#FFFFFF"
              >
                <Path
                  d="M5.89255651,-1.44077682 L5.89255651,-1.44077682 C6.44484126,-1.44077682 6.89255651,-0.993061573 6.89255651,-0.440776823 L6.89255651,12.2258898 C6.89255651,12.7781746 6.44484126,13.2258898 5.89255651,13.2258898 L5.89255651,13.2258898 C5.34027176,13.2258898 4.89255651,12.7781746 4.89255651,12.2258898 L4.89255651,-0.440776823 C4.89255651,-0.993061573 5.34027176,-1.44077682 5.89255651,-1.44077682 Z"
                  id="Rectangle"
                  transform="translate(5.892557, 5.892557) rotate(45.000000) translate(-5.892557, -5.892557) "
                ></Path>
                <Path
                  d="M5.89255651,-1.44077682 L5.89255651,-1.44077682 C6.44484126,-1.44077682 6.89255651,-0.993061573 6.89255651,-0.440776823 L6.89255651,12.2258898 C6.89255651,12.7781746 6.44484126,13.2258898 5.89255651,13.2258898 L5.89255651,13.2258898 C5.34027176,13.2258898 4.89255651,12.7781746 4.89255651,12.2258898 L4.89255651,-0.440776823 C4.89255651,-0.993061573 5.34027176,-1.44077682 5.89255651,-1.44077682 Z"
                  id="Rectangle-Copy"
                  transform="translate(5.892557, 5.892557) rotate(-45.000000) translate(-5.892557, -5.892557) "
                ></Path>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default CloseIcon;