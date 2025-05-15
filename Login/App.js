import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const imgLocal = require ('./assets/psg.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Formulario de inicio de sesión</Text>
        <ImageBackground
        source={imgLocal}
        resizeMode='cover'
        style={styles.ImageBackground}>
       </ImageBackground>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el correo electrónico"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese la contraseña"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}
        onPress= {() => Alert.alert ('Registro exitoso!!!!!!!!!! buena polshu')}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
          
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
