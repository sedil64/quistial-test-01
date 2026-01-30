import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function Entradas() {
  const [type, setType] = React.useState("General");
  const [qty, setQty] = React.useState("1");
  const [wed, setWed] = React.useState(false);

  const prices: any = {
    General: 5,
    Estudiante: 3.5,
    VIP: 8,
  };

  const result = React.useMemo(() => {
    const q = Number(qty);
    if (q <= 0) return null;

    const subtotal = prices[type] * q;
    const discount = wed ? subtotal * 0.15 : 0;
    return {
      subtotal,
      discount,
      total: subtotal - discount,
    };
  }, [type, qty, wed]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>comprar entradas</Text>

      <Picker selectedValue={type} onValueChange={setType}>
        <Picker.Item label="general" value="General" />
        <Picker.Item label="estudiante" value="Estudiante" />
        <Picker.Item label="VIP" value="VIP" />
      </Picker>

      <TextInput
        value={qty}
        onChangeText={setQty}
        keyboardType="numeric"
        placeholder="Cantidad"
        style={styles.input}
      />

      <View style={styles.row}>
        <Text>Miércoles (-15%)</Text>
        <Switch value={wed} onValueChange={setWed} />
      </View>

      {result && (
        <View style={styles.card}>
          <Text>Subtotal ${result.subtotal.toFixed(2)}</Text>
          <Text>Descuento ${result.discount.toFixed(2)}</Text>
          <Text>TotaL: {result.total} </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "900" },
  input: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  card: {
    marginTop: 16,
    padding: 14,
    backgroundColor: "white",
    borderRadius: 12,
  },

});
