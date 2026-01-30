import React from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function Combo() {
  const [pop, setPop] = React.useState("0");
  const [drink, setDrink] = React.useState("0");
  const [nachos, setNachos] = React.useState("0");
  const [freq, setFreq] = React.useState(false);

  const result = React.useMemo(() => {
    const subtotal =
      Number(pop) * 2.5 +
      Number(drink) * 1.75 +
      Number(nachos) * 3;

    const discount = freq ? subtotal * 0.1 : 0;
    return { subtotal, discount, total: subtotal - discount };
  }, [pop, drink, nachos, freq]);

  return (
    <View style={styles.container}>
      <Text>Popcorn $2.50</Text>
      <TextInput value={pop} onChangeText={setPop} style={styles.input} />
      <Text>Bebida $1.75</Text>
      <TextInput value={drink} onChangeText={setDrink} style={styles.input} />
      <Text>Nachos $3.00</Text>      
      <TextInput value={nachos} onChangeText={setNachos} style={styles.input} />

      <View style={styles.row}>
        <Text>Cliente frecuente-aplica descuento (-10%)</Text>
        <Switch value={freq} onValueChange={setFreq} />
      </View>

      <View style={styles.card}>
        <Text>Subtotal: {result.subtotal.toFixed(2)}</Text>
        <Text>Descuento: {result.discount.toFixed(2)}</Text>
        <Text>Total:  {result.total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    marginTop: 12,
  },
  card: {
    marginTop: 16,
    padding: 14,
    backgroundColor: "white",
    borderRadius: 8,
  },
  total: { fontWeight: "900", marginTop: 8 },
});
