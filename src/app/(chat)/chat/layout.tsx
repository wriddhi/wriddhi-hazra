export const metadata = {
  title: "Chat with me",
  description: "Software Engineer based in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  )
}
