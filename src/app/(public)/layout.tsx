import SideNavbar from '@/components/ui/SideNavbar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <div className="flex">
            <SideNavbar />
            <main className="flex-1 bg-[#F9F9F9] px-6 py-5 large:px-11 large:py-10">
              {children}
            </main>
          </div>
        </body>
      </html>
    </>
  );
}
