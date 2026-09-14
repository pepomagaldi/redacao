import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redação +900 | Reta Final ENEM 2026",
  description:
    "Guia prático para organizar sua redação na reta final do ENEM 2026: estrutura, repertórios, exemplos comentados e temas para treino.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
