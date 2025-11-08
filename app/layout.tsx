import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEM Bid Finder",
  description: "Find all active tenders from GEM portal",
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
