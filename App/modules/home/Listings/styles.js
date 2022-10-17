/**
 * 
 * @format
 */
import { ScaledSheet } from "react-native-size-matters";
import Colors from "../../../styles/Colors";
export default styles = ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    Image:{
        width:"100%",
        height:"150@vs",
        marginBottom:"10@vs"
    },
    headtextview:{
        marginLeft:"15@ms",
        marginRight:"15@ms",
        flexDirection:"row"
    },
    headtext:{
        textAlign:"justify",
        fontSize:14,
        lineHeight:18,
        color:Colors.lightblack,
        marginBottom:"10@ms",
        
        
    },
 
   
    

})