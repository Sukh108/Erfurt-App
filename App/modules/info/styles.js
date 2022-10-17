/**
 * 
 * @format
 */
import { ScaledSheet } from "react-native-size-matters";
import Colors from "../../styles/Colors";
export default styles = ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    header:{
      fontSize:18,
      marginBottom:"10@ms"
    },
    body:{
        margin:"15@ms"
    },
    text:{
      marginBottom:"2@ms",
      fontSize:14,
      letterSpacing:0.1
    },
    boldtext:{
        fontWeight:"700",
        color:Colors.lightblack
    },
    textbox:{
        marginBottom:"20@vs"
    }
})