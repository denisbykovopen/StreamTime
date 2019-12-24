import React from "react";
import { Svg, G, Path } from "react-native-svg";
import Colors from "../constants/Colors";

const BoxIcon = props => (
  <Svg width="30px" height="25px" viewBox="0 0 30 25">
    <G>
      <G 
        fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault} 
        fill-rule="nonzero" 
        // stroke="#000000" 
        stroke-width="8">
        <G>
          <Path
            d="M29.3980466,17.8535894 C29.1936801,17.1333745 28.5691476,16.5974167 27.8052742,16.4866322 L27.8052742,5.66037736 L28.7808979,5.66037736 C29.0502901,5.66037736 29.2687097,5.4491727 29.2687097,5.18867925 L29.2687097,0.471698113 C29.2687097,0.21097441 29.0502901,0 28.7808979,0 L7.31717743,0 C7.04778524,0 6.8293656,0.21097441 6.8293656,0.471698113 L6.8293656,5.18867925 C6.8293656,5.4491727 7.04778524,5.66037736 7.31717743,5.66037736 L8.29280109,5.66037736 L8.29280109,15.0943396 L7.80498926,15.0943396 C6.59427268,15.0915758 5.4083278,15.427154 4.39030646,16.060768 L4.39030646,13.6792453 C4.39030646,13.4185216 4.17188682,13.2075472 3.90249463,13.2075472 L0.487811829,13.2075472 C0.218419637,13.2075472 0,13.4185216 0,13.6792453 L0,24.5283019 C0,24.7887953 0.218419637,25 0.487811829,25 L3.90249463,25 C4.17188682,25 4.39030646,24.7887953 4.39030646,24.5283019 L4.39030646,22.1470096 C5.40856603,22.7801629 6.59427268,23.1157411 7.80498926,23.1132075 L15.8148214,23.1132075 C16.3698026,23.1122863 16.9221637,23.041808 17.458328,22.9036152 L28.0198829,20.1678583 C29.0591031,19.8940061 29.6748226,18.8603239 29.3980466,17.8535894 Z M7.80498926,0.943396226 L28.2930861,0.943396226 L28.2930861,4.71698113 L7.80498926,4.71698113 L7.80498926,0.943396226 Z M9.26842475,5.66037736 L26.8296506,5.66037736 L26.8296506,16.5677053 L21.1681275,18.0357735 C20.9349401,17.4982035 20.4592759,17.0944502 19.8778557,16.9403652 L13.30502,15.235757 C12.9348737,15.1415555 12.5537707,15.093879 12.1710004,15.0943396 L9.26842475,15.0943396 L9.26842475,5.66037736 Z M3.4146828,24.0566038 L0.975623658,24.0566038 L0.975623658,14.1509434 L3.4146828,14.1509434 L3.4146828,24.0566038 Z M27.7666876,19.2564767 L17.2070382,21.9922336 C16.7528112,22.1094672 16.2850072,22.1691204 15.8148214,22.1698113 L7.80498926,22.1698113 C6.6435779,22.1723449 5.51289294,21.8079765 4.58538357,21.1319834 L4.39030646,20.990566 L4.39030646,17.2169811 L4.58538357,17.0753335 C5.51289294,16.3993404 6.6435779,16.0347417 7.80498926,16.0377358 L12.1710004,16.0377358 C12.4689753,16.0375055 12.7659975,16.0748176 13.0544448,16.1485205 L19.6251367,17.8517468 C20.0133854,17.9551611 20.2975453,18.27692 20.3418485,18.6640902 C20.3470887,18.6834371 20.3535198,18.7025538 20.3613801,18.7212098 C20.3556635,18.7414781 20.3513761,18.7619768 20.3485179,18.782936 C20.3489942,18.859633 20.3382757,18.9360996 20.3163623,19.0098025 C20.201555,19.4209261 19.8164028,19.7067549 19.3759907,19.7074459 C19.2900043,19.7081368 19.2047325,19.697542 19.1218426,19.6763525 L14.975442,18.6012124 C14.8053749,18.5523843 14.6212544,18.596606 14.4945377,18.7168337 C14.3680591,18.8370615 14.318754,19.0141786 14.3661536,19.1795494 C14.4135533,19.3446897 14.5500359,19.4722877 14.7227231,19.5121334 L18.8691237,20.587734 C19.0346652,20.6298828 19.2054471,20.6510724 19.3769434,20.6508421 C20.2539566,20.6503814 21.0225938,20.0831 21.254352,19.2649986 C21.2815056,19.1703365 21.2998462,19.0736015 21.3096119,18.9759453 L27.2564859,17.4339439 C27.2988836,17.4235794 27.3448542,17.4129846 27.3882046,17.406075 C27.8738728,17.3455005 28.3304818,17.6423847 28.4560076,18.0998029 C28.477921,18.179494 28.4888778,18.2617188 28.4881632,18.3441738 C28.4888778,18.7711896 28.1930465,19.1452315 27.7666876,19.2564767 Z"
            id="Shape"
          ></Path>
        </G>
      </G>
    </G>
  </Svg>
);

export default BoxIcon;
