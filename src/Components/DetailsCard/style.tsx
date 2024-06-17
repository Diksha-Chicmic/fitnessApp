import { StyleSheet } from "react-native"
import { COLORS,SIZES} from "../../Constants/commonStyles"

export const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
         marginVertical:"10%"
    },
    
    box:{
       marginHorizontal:"15%",
      },

    itemSeparator:{
        borderRightWidth:1,
        borderRightColor:COLORS.SECONDARY.GREY

    },
    title:{
        fontSize:SIZES.font14
    },
    text:{
        fontSize:SIZES.font11,
        color:COLORS.SECONDARY.GREY
    }
})