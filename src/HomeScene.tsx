import {useNavigation} from '@react-navigation/native'
import {useHeaderHeight} from '@react-navigation/stack'
import React, {useState} from 'react'
import {Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Config from './Config'


interface Props{}

const HomeScene: React.FC<Props> = () => {

    const headerHeight = useHeaderHeight();
    const navigation = useNavigation<any>();
    const [isGrid, setGrid] = useState(true);

    const marginTop = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

    return(
       <SafeAreaView style={{flex : 1, marginTop}} >
           <View
               style={{flexDirection: "row", padding: 8}}
           >
               <Pressable
                   style={({pressed}) => [
                       {padding : 8, opacity: !Config.isAndroid && pressed ? 0.6 : 1},
                   ]}
                   onPress={() => navigation.toggleDrawer()}
                   android_ripple={{color:"grey", radius: 20, borderless: true}}
               >
                   <Icon name="menu" size={25} color="black"/>
               </Pressable>

               <Text style={styles.headerText} >React-Native UI</Text>
               <Pressable
                   style={({pressed}) => [
                       {padding: 8, opacity: !Config.isAndroid && pressed ? 0.6 : 1},
                   ]}
                   onPress={() => setGrid(!isGrid)}
                   android_ripple={{color:"grey", radius: 20, borderless: true}}
               >
                   <Icon name={isGrid ? "dashboard" : "view-agenda"}
                         size={25}
                         color="black"
                   />
               </Pressable>
           </View>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   headerText: {
       flex: 1,
       fontSize: 22,
       fontFamily: "WorkSans-Bold",
       textAlign:"center",
       textAlignVertical:"center"
   }
});

export default HomeScene;
