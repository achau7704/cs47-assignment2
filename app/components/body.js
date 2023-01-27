import { View, Text, Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import Icons from "../../assets/Icons";
import Profiles from "../../assets/Profiles";

 const windowWidth = Dimensions.get("window").width;
 const windowHeight = Dimensions.get("window").height;

const Body = () => {
console.log("Profiles", Profiles.mtl);

    return (
        <View style={{justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={Profiles.mtl.image} 
            style={styles.image}
            imageStyle={styles.image}>
                <Text style={styles.name_text}>{Profiles.mtl.name}</Text>
                <Text style={styles.caption_text}>{Profiles.mtl.caption}</Text>
            </ImageBackground>
            <View style={styles.rectangle}>       
                <Text style={{ fontFamily: "Sydney", fontSize: 23 }}>My hottest take </Text>   
                <View style={styles.body}>
                    <Image source={Icons.player.light} style={styles.playIcon}/>
                    <Image source={Icons.audioWave.light} style={styles.audioIcon}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 8,
        padding: 2,
        width: windowWidth * 0.85,
        aspectRatio: 1 / 1.1,
        height: undefined,
        justifyContent: "space-between",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,  
        elevation: 5
    },
    imageStyle: {
        width: windowWidth * 0.85,
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    name_text: {
        padding: 8,
        fontWeight: "bold",
        fontSize: 35,
        color: "white",
        fontFamily: "Sydney",
    },
    caption_text: {
        padding: 8,
        fontSize: 17,
        color: "white",
    },
    body: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
     playIcon: {
        margin: 7,
        height: windowWidth * 0.15,
        width: windowWidth * 0.15,
        justifyContent: "stretch",
        alignItems: "stretch",
    },
    audioIcon: {
        height: windowWidth * 0.12,
        width: windowWidth * 0.62,
        justifyContent: "stretch",
        alignItems: "stretch",
    },
    rectangle: {
        borderRadius: 20,
        margin: 20,
        padding: 10,
        height: windowWidth * 0.36,
        width: windowWidth * 0.85,
        backgroundColor: 'white',
        justifyContent: "space-betweem",
        alignItems: "left",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,  
        elevation: 5
      },
});

export default Body;