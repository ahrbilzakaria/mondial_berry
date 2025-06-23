
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="" >
      <body >
        {children}
      </body>
    </html>
  );
}
