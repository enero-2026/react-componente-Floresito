# Instrucciones Ejercicio de Componente reutilizable
Crear un componente de React

Crear aplicación React
1. En terminal: **npx create-expo-app hola-mundo --template**
2. Seleccionar **Blank / En blanco**
3. Escribir el nombre de tu aplicación
4. Correr el comando **npm run web**
5. Puedes presionar en la terminal la tecla i para correr el simuador de iOS o a para el de Android
6. Puedes escanear el código QR y otorgar permisos en tu celular a Expo GO, esto te permitirá abrir tu proyecto en el celular

Crear Componente de React
1. Crear un archivo llamo Alumno.js
2. Lógica del componente:
```javascript

import { StyleSheet, Text, View, Button } from 'react-native';
 
export default Alumno(props){

return(
<View>
   <Text>{props.nombre}</Text>
   <Text>{props.matricula}</Text>
</View>
)
}
```

3. Agrega los estilos utilizando el prop style

Importa el componente creado en App.js
1. Para crear una instancia utilizarás la etiqueta <Alumno></Alumno> proporcionando en los props de la forma:
   <Alumno nombre="Diego" matricula="123ABC"></Alumno>
2. Implementa diferentes instancias de ese componente
    
