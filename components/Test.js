import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Test(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Nathalya Raisa
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      <Text style={styles.paragraph}>
        Foi um pouco complicado para mim, espero que o senhor considere minha atividade, pelo amor de Deus!"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
