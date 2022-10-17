
/**
 * 
 * @format
 */import { ScaledSheet } from "react-native-size-matters";
import Colors from "../../styles/Colors";
export default styles = ScaledSheet.create({
    headcontainer:{
        flex:1,
        backgroundColor:Colors.white,
        
    },
    image:{
        width:"100%",
        height:"180@vs",
        marginTop:"12@ms"
    },
    bottomcontainer:{
        marginLeft:"15@ms",
        marginRight:"13@ms"
    },
    text:{
        fontSize:14,
        lineHeight:18,
        letterSpacing:0.5,
        color:Colors.lightblack,
        marginBottom:"10@ms"
    },
    categoryicon:{
        flexDirection:"row",
        flex:1,
        marginLeft:"-5@ms",
        marginBottom:"4@ms",
        justifyContent:"space-evenly"
    },
    categoryimage:{
        height:"85@ms",
        width:"80@ms",

        
    }


  });
  