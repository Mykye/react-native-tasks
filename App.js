import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import EncryptedStoreDemo from "./components/react-native-encrypted-storage";

const fonts = () => Font.loadAsync({
        'psn-reg': require('./assets/fonts/PTSansNarrow-Regular.ttf'),
        'psn-bold': require('./assets/fonts/PTSansNarrow-Bold.ttf')
});

const App = () => {
    const [font, setFont] = useState(false);
    if (font) {
        return (
            <GestureHandlerRootView style={{flex: 1}}>
                <View style={styles.container}>
                    <EncryptedStoreDemo />
                </View>
            </GestureHandlerRootView>
        );
    } else {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => {setFont(true)}}
                onError={console.warn('warn')}
            />
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    text: {
        fontFamily: 'psn-reg'
    },
});

export default App;