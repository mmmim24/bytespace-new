export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="bg-primary flex-1 flex items-center justify-center p-4">
            {children}
        </main>
    );
}