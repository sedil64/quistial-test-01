import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import type { Show } from "../types/show";

export default function ShowItem({ item }: { item: Show }) {
  const img =
    item.show.image?.medium ||
    "https://via.placeholder.com/120x180?text=No+Image";

  return (
    <View style={styles.card}>
      <Image source={{ uri: img }} style={styles.img} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.show.name}</Text>
        <Text style={styles.meta}>
           {item.show.rating?.average ?? "no tiene valoraciòn"}
        </Text>
        <Text style={styles.meta}>
          {item.show.genres?.join(", ") || "Sin género"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.10)",
    backgroundColor: "white",
  },
  img: { width: 74, height: 74, borderRadius: 12, backgroundColor: "#eee" },
  title: { fontWeight: "900", fontSize: 16 },
  meta: { color: "#666", marginTop: 2 },
});
