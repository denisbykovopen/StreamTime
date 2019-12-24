import React from "react";
import {
  Svg,
  G,
  Path,
  Rect,
  Circle,
  Defs,
  ClipPath,
  Mask,
  Image
} from "react-native-svg";
import Colors from "../constants/Colors";
import { View } from "react-native";
import Layout from "../constants/Layout";
import { SvgXml } from "react-native-svg";

const AddIcon = props => (
  <View
    style={{
      // position: "absolute",
      width: Layout.window.width * 0.275,
      height: Layout.window.height * 0.15,
      bottom: Layout.window.height * 0.05,
      // borderWidth: Layout.window.width * 0.05,
      borderRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      // borderColor: Colors.bgColor,
      // shadowColor: Colors.shadowColor,
      // shadowOpacity: 1.0,
      // shadowOffset: { width: 0, height: 0 },
      // shadowRadius: Math.round(Layout.window.width + Layout.window.height) / 2,
      // elevation: 1,

      // backgroundColor: Colors.w,
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <View style={{width:"100%",height:"100%"}}>
      <SvgXml xml={addIcon} ></SvgXml>
    </View>
    

    {/* <Svg
      width="87px"
      height="87px"
      viewBox="0 0 87 87"
      // style={{
      //   // bottom: Layout.window.height * 0.05,
      //   borderWidth: Layout.window.width * 0.15,
      //   borderRadius:
      //     Math.round(Layout.window.width + Layout.window.height) / 2,
      //   borderColor: Colors.black
      // }}
    >
      <G
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      
      >
        <G id="Tab-Bar" transform="translate(-144.000000, 15.000000)">
          <G id="Group-9">
            <G id="Group-10">
              <G
                id="Group"
                filter="url(#filter-1)"
                transform="translate(161.000000, 0.000000)"
              >
                <Circle
                  id="Oval"
                  stroke="#F4F8F9"
                  stroke-width="13"
                  fill="#38CCFE"
                  cx="26.5"
                  cy="26.5"
                  r="33"
                 
                ></Circle>

                <G
                  id="Group-2"
                  filter="url(#filter-2)"
                  transform="translate(15.356036, 15.947817)"
                  fill="#FFFFFF"
                >
                  <Rect
                    id="Rectangle"
                    x="10.1181818"
                    y="0"
                    width="2.02363636"
                    height="21"
                    rx="1"
                  ></Rect>
                  <Path
                    d="M11.13,-0.124090909 L11.13,-0.124090909 C11.6822847,-0.124090909 12.13,0.323624341 12.13,0.875909091 L12.13,20.1240909 C12.13,20.6763757 11.6822847,21.1240909 11.13,21.1240909 L11.13,21.1240909 C10.5777153,21.1240909 10.13,20.6763757 10.13,20.1240909 L10.13,0.875909091 C10.13,0.323624341 10.5777153,-0.124090909 11.13,-0.124090909 Z"
                    id="Rectangle"
                    transform="translate(11.130000, 10.500000) rotate(90.000000) translate(-11.130000, -10.500000) "
                  ></Path>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg> */}
  </View>
);

export default AddIcon;

const addIcon = `
<svg width="100%" height="100%" viewBox="0 0 87 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <filter x="-47.2%" y="-47.2%" width="194.3%" height="194.3%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.904947917   0 0 0 0 0.904947917   0 0 0 0 0.904947917  0 0 0 0.986356431 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
        <filter x="-54.5%" y="-57.1%" width="209.1%" height="214.3%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.150447237 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Tab-Bar" transform="translate(-144.000000, 15.000000)">
            <g id="Group-9">
                <g id="Group-10">
                    <g id="Group" filter="url(#filter-1)" transform="translate(161.000000, 0.000000)">
                        <circle id="Oval" stroke="#F4F8F9" stroke-width="13" fill="#38CCFE" cx="26.5" cy="26.5" r="33"></circle>
                        <g id="Group-2" filter="url(#filter-2)" transform="translate(15.356036, 15.947817)" fill="#FFFFFF">
                            <rect id="Rectangle" x="10.1181818" y="0" width="2.02363636" height="21" rx="1"></rect>
                            <path d="M11.13,-0.124090909 L11.13,-0.124090909 C11.6822847,-0.124090909 12.13,0.323624341 12.13,0.875909091 L12.13,20.1240909 C12.13,20.6763757 11.6822847,21.1240909 11.13,21.1240909 L11.13,21.1240909 C10.5777153,21.1240909 10.13,20.6763757 10.13,20.1240909 L10.13,0.875909091 C10.13,0.323624341 10.5777153,-0.124090909 11.13,-0.124090909 Z" id="Rectangle" transform="translate(11.130000, 10.500000) rotate(90.000000) translate(-11.130000, -10.500000) "></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;
