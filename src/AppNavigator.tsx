import React from 'react';
import {
    Pressable,
    StatusBar,
    StyleSheet,
    useWindowDimensions,
    View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScene, DrawerContent} from ".";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator: React.FC = () => {
    const window = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContentOptions={{ activeBackgroundColor: '#5cbbff' }}
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerType="back"
            overlayColor="transparent"
            drawerStyle={{
                width: window.width * 0.75,
                backgroundColor: '#FFFEFEFE',
            }}
            sceneContainerStyle={styles.drawerSceneContainer}
            edgeWidth={window.width}
        >
            <Drawer.Screen name="Home" component={HomeScene} />
            <Drawer.Screen name="Help" component={HomeScene} />
            <Drawer.Screen name="Feedback" component={HomeScene} />
            <Drawer.Screen name="Invite Friend" component={HomeScene} />
        </Drawer.Navigator>
    );
};

export default () => {
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
                translucent
            />

            <Stack.Navigator screenOptions={{ headerBackTitle: '', title: '' }}>
                <Stack.Screen
                    name="MainDrawer"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    drawerSceneContainer: {
        elevation: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
    },
});
