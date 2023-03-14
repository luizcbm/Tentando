import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Device } from '@capacitor/device';

const DeviceInfoScreen = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    async function fetchDeviceInfo() {
      const { deviceId, model, platform, osVersion } = await Device.getInfo();

      setDeviceInfo({ deviceId, model, platform, osVersion });
    }

    fetchDeviceInfo();
  }, []);

  if (!deviceInfo) {
    return <Text>Loading device info...</Text>;
  }

  return (
    <View >
      <Text >Device Information:</Text>
      <Text>Device Name: {deviceInfo.deviceName}</Text>
      <Text>Device Model: {deviceInfo.deviceModel}</Text>
      <Text>OS Name: {deviceInfo.osName}</Text>
      <Text>OS Version: {deviceInfo.osVersion}</Text>
    </View>
  );
};

export default DeviceInfoScreen;



