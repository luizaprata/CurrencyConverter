import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const imgW = Dimensions.get("window").width * 0.75;
const imgH = Dimensions.get("window").height * 0.75;
const imgSize = Math.min(imgH, imgW);

export default EStyleSheet.create({
  $smallContainerSize: imgSize * 0.5,
  $largeContainerSize: imgSize,

  container: {
    alignItems: "center"
  },
  containerImage: {
    width: '$largeContainerSize',
    height: '$largeContainerSize'
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginTop: 0,
    color: "$white"
  }
});
