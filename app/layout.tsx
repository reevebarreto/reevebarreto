import "./globals.css";

export const metadata = {
  title: "Reeve Barreto",
  description: "Eat. Sleep. Code. Repeat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
