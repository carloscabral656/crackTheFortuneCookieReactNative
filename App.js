import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fraseText: '',
      img: require('./src/biscoito.png'),
    };

    this.frases = [
      'A sorte favorece os audaciosos.',
      'Grandes oportunidades estão à sua frente.',
      'Você é mais forte do que imagina.',
      'Um encontro inesperado trará alegria.',
      'Confie em seu instinto; ele o guiará corretamente.',
      'A paciência é a chave para o sucesso.',
      'Seja gentil consigo mesmo e com os outros.',
      'Hoje é um ótimo dia para começar algo novo.',
      'O que você procura está mais perto do que imagina.',
      'Sua persistência será recompensada em breve.',
      'Boas notícias estão a caminho.',
      'A felicidade está em pequenos momentos, aproveite-os.',
      'Aprenda algo novo hoje e isso mudará seu futuro.',
      'Acredite nos seus sonhos, eles são possíveis.',
      'Uma amizade verdadeira iluminará seu caminho.',
      'A simplicidade é o segredo da verdadeira felicidade.',
      'A gratidão abre portas para bênçãos inesperadas.',
      'Você está prestes a alcançar um grande marco.',
      'Algo maravilhoso está prestes a acontecer em sua vida.',
      'Siga em frente, o universo conspira a seu favor.',
    ];

    this.crackTheFortuneCookie = this.crackTheFortuneCookie.bind(this);
  }

  crackTheFortuneCookie() {
    let randomNumber = Math.floor(Math.random() * this.frases.length);
    this.setState({
      fraseText: `" ${this.frases[randomNumber]} "`,
      img: require('./src/biscoitoAberto.png'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.fraseText}>{this.state.fraseText}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={this.crackTheFortuneCookie}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  fraseText: {
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
    flexDirection: 'row',
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
