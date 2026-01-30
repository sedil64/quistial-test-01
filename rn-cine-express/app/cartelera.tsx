import React from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { searchShows } from "../src/api/cineApi";
import ShowItem from "../src/components/ShowItem";
import type { Show } from "../src/types/show";

export default function Cartelera() {
  const [query, setQuery] = React.useState("");
  const [items, setItems] = React.useState<Show[]>([]);
  const [loading, setLoading] = React.useState(false);

  const load = async () => {
    setLoading(true);
    const data = await searchShows(query);
    setItems(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cartelera</Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="buscar pelicula"
        style={styles.input}
      />

      <Text style={styles.btn} onPress={load}>
        Buscar
      </Text>

      {loading ? (
        <ActivityIndicator style={{ marginTop: 16 }} />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(i) => String(i.show.id)}
          contentContainerStyle={{ gap: 4, marginTop: 4 }}
          renderItem={({ item }) => <ShowItem item={item} />}
          ListEmptyComponent={<Text>No hay pelicula disponible</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "900" },
  input: {
    marginTop: 12,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#1976d2",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderRadius: 12,
    fontWeight: "900",
  },
});
