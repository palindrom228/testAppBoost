import React from "react";
import { Button, SafeAreaView } from "react-native";
import RNUssdDial from "react-native-ussd-dial";

const App = () => {
  const getDeviceName = async () => {
    const deviceName = await RNUssdDial.getDeviceName();
    console.log('deviceName: ', deviceName);
  };
  return (
    <SafeAreaView>
      <Button
        title="GetDeviceName"
        onPress={getDeviceName}
      />
    </SafeAreaView>

  )
}

export default App