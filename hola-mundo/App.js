import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Alumno from './Alumno';

export default function App() {
  const alumnos = [
    { matricula: '2114354', nombre: 'CANDELARIA MORA SAMANTHA' },
    { matricula: '2121179', nombre: 'AGUILAR ORTIZ LUIS ROLANDO' },
    { matricula: '2048051', nombre: 'BARRIENTOS GALLEGOS DIEGO' },
    { matricula: '1979822', nombre: 'CANO MONTIEL KELLY YISSETH' },
    { matricula: '2111889', nombre: 'CANTU SILVA JAVIER' },
    { matricula: '2069119', nombre: 'CARMONA LOZANO ANGEL EMILIANO' },
    { matricula: '2132842', nombre: 'CASTILLO ACOSTA JORGE' },
    { matricula: '1994122', nombre: 'DAVILA GONZALEZ ALDO ADRIAN' },
    { matricula: '2018230', nombre: 'DURAN BARRIENTOS FABRIZIO' },
    { matricula: '2104564', nombre: 'FLORES GONZALEZ SEBASTIAN' },
    { matricula: '2066033', nombre: 'FLORES LÓPEZ DIEGO' },
    { matricula: '2132976', nombre: 'FLORES MARTINEZ ERICK ADRIAN' },
    { matricula: '2066114', nombre: 'GARZA AVALOS DIEGO' },
    { matricula: '2031243', nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL' },
    { matricula: '2064733', nombre: 'GRANJA PEÑA DIEGO' },
    { matricula: '2094647', nombre: 'IBARRA RODRIGUEZ ALEXIS' },
    { matricula: '2005102', nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN' },
    { matricula: '2064574', nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA' },
    { matricula: '2024783', nombre: 'MIRELES VELAZQUEZ ALEJANDRO' },
    { matricula: '2066077', nombre: 'MONSIVAIS SALAZAR ANDRES' },
    { matricula: '2092151', nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA' },
    { matricula: '2103708', nombre: 'PEÑA MUNGARRO LUIS ANGEL' },
    { matricula: '2115192', nombre: 'PUENTE REYNOSO JULIO CESAR' },
    { matricula: '2103765', nombre: 'RAMIREZ LOPEZ BRYAN' },
    { matricula: '2056778', nombre: 'RAMOS AVILA LILIANA VALERIA' },
    { matricula: '2037503', nombre: 'RICO JAUREGUI MAURICIO' },
    { matricula: '2131513', nombre: 'RIVERA LUNA ADRIAN' },
    { matricula: '2013503', nombre: 'RIVERA REYNA JOSE EMILIO' },
    { matricula: '2004613', nombre: 'RODRIGUEZ OLVERA ROSA ISELA' },
    { matricula: '2133022', nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL' },
    { matricula: '2026061', nombre: 'SANCHEZ GALARZA JUAN CARLOS' },
    { matricula: '2095320', nombre: 'SOLIS ORTIZ ALFREDO' },
    { matricula: '2025350', nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL' },
    { matricula: '2103895', nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL' },
    { matricula: '1857791', nombre: 'ZACATENCO OLIVE RODRIGO' },
    { matricula: '2025218', nombre: 'ZAVALA CANTU TERESA MARGARITA' },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Alumnos</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {alumnos.map((alumno) => (
            <Alumno key={alumno.matricula} nombre={alumno.nombre} matricula={alumno.matricula} />
          ))}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cafff2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '30%',
  },
});
