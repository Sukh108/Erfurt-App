/**
 * 
 * @format
 */
 import { ScaledSheet } from "react-native-size-matters";
 import Colors from "../../styles/Colors";
 export default styles = ScaledSheet.create({
    searchview:{
        backgroundColor:Colors.silvergrey,
        height:"50@vs"
    },
     search:{
        backgroundColor:Colors.white,
        height:"40@vs",
        margin:"4.8@vs",
        flexDirection:"row",
        borderRadius:5,
        },
   searchicon:{
            width:"20@ms",
            height:"20@ms",
            marginTop:"12@ms",
            marginLeft:"5@ms"
           
        },
        Textinput:{
            fontSize:20,
            color:Colors.lightblack,
            
        }
 })