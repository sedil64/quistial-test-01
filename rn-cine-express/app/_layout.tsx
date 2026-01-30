import { Stack } from "expo-router";
import React from "react";


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Cine Express" }} />
      <Stack.Screen name="cartelera" options={{ title: "Cartelera" }} />
      <Stack.Screen name="entradas" options={{ title: "Total de entradas" }} />
      <Stack.Screen name="combo-snacks" options={{ title: "Snacks a la venta" }} />
    </Stack>
  );
}
