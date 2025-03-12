export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center min-h-screen justify-center">
      {children}
    </div>
  );
}
