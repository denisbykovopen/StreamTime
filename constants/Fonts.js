import Layout from "./Layout";

const scale = 812;

const scaleFontSize = (fontSize) => {
    const ratio = fontSize / scale; 
    const newSize = Math.round(ratio * Layout.window.height);
    return newSize; 
}

const small = scaleFontSize(14);
const medium = scaleFontSize(16);
const large = scaleFontSize(18);
const xlarge = scaleFontSize(22);
const xxlarge = scaleFontSize(30);

export default {
    small,
    medium,
    large,
    xlarge,
    xxlarge
}