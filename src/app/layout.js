import "./globals.css";


export const metadata = {
  title: "Flow",
  description: "CRM-like UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
