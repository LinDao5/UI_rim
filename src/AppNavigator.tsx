import React from "react";
import {StatusBar, Text} from 'react-native'



export default () => {
    return(
        <>
            <StatusBar
                backgroundColor="transparent"
                barStyle="dark-content"
                translucent
            />
            <Text>AppNavigator</Text>
        </>
    )
}
