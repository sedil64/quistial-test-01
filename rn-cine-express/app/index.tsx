import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import MenuButton from "../src/components/MenuButton";

export default function Menu() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={{ gap: 12, marginTop: 20 }}>
        <MenuButton
          title="Cartelera (API + fotos)"
          onPress={() => router.push("/cartelera")}
        />
        <MenuButton
          title="Total de entradas"
          onPress={() => router.push("/entradas")}
        />
        <MenuButton
          title="Combo snacks"
          onPress={() => router.push("/combo-snacks")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f6f7fb" },
  title: { fontSize: 26, fontWeight: "900", textAlign: "center" },
  subtitle: {textAlign: "center", marginTop: 6, color: "#555", fontWeight: "700",},
});
