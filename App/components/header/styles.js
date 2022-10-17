/**
 * 
 * @format
 */
import { ScaledSheet } from "react-native-size-matters";
import Colors from "../../styles/Colors";
export default styles = ScaledSheet.create({
    container: {
        height:'40@vs',
        flexDirection:"row",
        backgroundColor:Colors.primery,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontWeight:"700",
        fontSize:24,
        color:Colors.white
    },
    image1:{
        width:"30@ms",
        height:"30@ms",
        position:"absolute",
        right:"90@ms",
        top:"-13@ms"
    
    },
    image2:{
        width:"30@ms",
        height:"30@ms",
        position:"absolute",
        left:"80@ms",
        top:"-13@ms"
    },
    
   
})