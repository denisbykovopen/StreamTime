import React from "react";
import { Svg, G, Path } from "react-native-svg";
import Colors from "../constants/Colors";
import { View } from "react-native";
import Layout from "../constants/Layout";

const CheckIcon = props => (
  <View
    style={{
      width: Layout.window.width * 0.15,
      height: Layout.window.height * 0.2
      // backgroundColor: 'black',
      // position: "relative"
    }}
  >
    <Svg width="100%" height="100%" viewBox="0 0 52 47">
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="8.1.-Tools--Drop-Down"
          transform="translate(-294.000000, -390.000000)"
          fill="#38CCFE"
          stroke="#38CCFE"
        >
          <G id="Group-2" transform="translate(30.000000, 283.000000)">
            <G id="Group-8" filter="url(#filter-1)">
              <G id="Group-7">
                <G id="Group-6" transform="translate(15.000000, 20.000000)">
                  <G id="Group-3" transform="translate(265.000000, 101.000000)">
                    <Path
                      d="M4.28554609,5.51814854 C4.15351926,5.51851416 4.04655419,5.62540108 4.04609207,5.75742761 L4.01765255,13.8825989 C4.01765077,13.8833228 4.01765077,13.8833228 4.01765202,13.8840466 C4.01800517,14.0115675 4.12166762,14.1146574 4.24918858,14.1143043 C4.38121541,14.1139386 4.48818048,14.0070517 4.4886426,13.8750252 L4.51708212,5.74985385 C4.5170839,5.74913005 4.5170839,5.74913005 4.51708265,5.74840625 C4.5167295,5.62088528 4.41306705,5.5177954 4.28554609,5.51814854 Z"
                      id="Rectangle"
                      transform="translate(4.267367, 9.816226) rotate(-44.000000) translate(-4.267367, -9.816226) "
                    ></Path>
                    <Path
                      d="M12.8033353,-1.13281289 C12.8026537,-1.1328141 12.8026537,-1.1328141 12.801972,-1.13281247 C12.6817174,-1.13239889 12.5845671,-1.03457799 12.5849806,-0.914323374 L12.6400124,15.0868384 C12.6404413,15.2115338 12.7414612,15.3124914 12.8661568,15.3128433 C12.8668385,15.3128445 12.8668385,15.3128445 12.8675201,15.3128428 C12.9877747,15.3124293 13.0849251,15.2146084 13.0845115,15.0943537 L13.0294797,-0.906808071 C13.0290508,-1.03150346 12.9280309,-1.13246102 12.8033353,-1.13281289 Z"
                      id="Rectangle-Copy"
                      transform="translate(12.834746, 7.090015) rotate(45.000000) translate(-12.834746, -7.090015) "
                    ></Path>
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default CheckIcon;
