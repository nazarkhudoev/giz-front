// meta data
export const metadata = {
  title: "Admin Page",
  description: "Giz",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
