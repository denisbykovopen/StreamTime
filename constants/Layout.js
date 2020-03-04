import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
<<<<<<< HEAD
=======

>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
