import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');

const metric = {
   screenWidth: width < height ? width : height,
   screenHeight: width < height ? height : width,
   width,
   height
}

var heightRef = 710;
var widthRef = 360

const ratioHeight = metric.screenHeight / heightRef
const ratioWidth = metric.screenWidth / widthRef

export {ratioHeight, ratioWidth}