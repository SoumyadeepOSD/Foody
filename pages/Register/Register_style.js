import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    login_image_style:{
        height: '30%',
        width: '50%',
        transform: [{rotate: '-10deg'}],
        alignSelf:"center",
        marginTop:5,
        marginBottom:'20%'
    },
    title:{
        color:"black",
        fontWeight:"bold", 
        // fontFamily:"MartianMono",
        textAlign:"left",
        paddingLeft: 20,
        fontSize: 40,
        marginTop: '5%'
    },
    login_section_element:{
        display:"flex",
        flexDirection:"row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    input_section:{
        marginHorizontal: 32,
        marginVertical:0
    },
    register___button:{
        backgroundColor:"orange",
        paddingHorizontal:0,
        width: '100%',
        padding:10,
        borderRadius:30,
        alignSelf:"center",
        marginVertical:20,
        elevation:5
    }
});

export default Style;