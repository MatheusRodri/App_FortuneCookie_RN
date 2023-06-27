import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function App() {
  const [img, setImag] = useState(require('./src/biscoito.png'));
  const [text, setText] = useState('');

  let phrases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  ];

  function quebraBiscoito() {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    setText('"' + phrases[randomNumber] + '"');
    setImag(require('./src/biscoitoAberto.png'));
  }
  function reiniciarBiscoito() {
    setText('');
    setImag(require('./src/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textCookie}>{text}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => quebraBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, {marginTop: 15, borderColor: '#121212'}]}
        onPress={() => reiniciarBiscoito()}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, {color: '#121212'}]}>
            Reiniciar biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textCookie: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
