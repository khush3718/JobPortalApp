import { Stack } from "expo-router";
import { useCallback , useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

SplashScreen.preventAutoHideAsync();

// const fetchFonts = () => 
//     Font.loadAsync({
//         DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
//         DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
//         DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
//     });


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "home",
  };

const AppLayout =() => {
    

    // if(fontsloaded){
    //     return null
    // }
    // else{
    //     return(
    //         <AppLoading
    //             startAsync={fetchFonts}
    //             onFinish={() => setFontsLoaded(true)}
    //             onError={console.warn}
            
    //         />
    //     )
    // }


    // const [fontsLoaded] = useFonts({
    //     DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    //     DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    //     DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    // });

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // },[fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    return (
    <Stack initialRouteName="home">
        <Stack.Screen name="home"  />
    </Stack>
    )
}

export default AppLayout;