import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Alumno(props) {

  const [mostrarMatricula, setMostrarMatricula] = useState(false);
  
  let foto_personalizada = require('./assets/champurrado-placeholder.jpeg'); 
  if (props.matricula === '2066033') { foto_personalizada = require('./assets/champulenguetazo.jpeg'); }
  return (
    <View style={styles.card}>
      {/* Fila 1: Foto | Nombre | Botón */}
      <View style={styles.row}>
        <Image
          source={foto_personalizada}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.nombre}>{props.nombre}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setMostrarMatricula(!mostrarMatricula)}>
          <Text style={styles.buttonText}>{mostrarMatricula ? 'Ocultar ↑' : 'Ver más ↓'}</Text>
        </TouchableOpacity>
      </View>

      {/* Fila 2: Matricula */}
      {mostrarMatricula && (
        <View style={styles.rowFull}>
            <Text style={styles.matricula}>{props.matricula}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#c993f7',
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  info: {
    flex: 2,
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    backgroundColor: '#ded2e9',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
  },
  rowFull: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  matricula: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
