import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá seja bem vindo,</Text>
      <Text style={styles.title}>para onde você quer ir</Text>

      <Text style={styles.title}></Text>
      <Button
        title="Ver informações do seu dispositivo"
        onPress={() => navigation.navigate('DeviceInfoScreen')}
      />
      

      
      <Button
        title="Formulario"
        onPress={() => navigation.navigate('FormScreen')}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

