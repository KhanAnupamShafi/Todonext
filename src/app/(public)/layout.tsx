import SideNavbar from '@/components/ui/SideNavbar';
import { Providers } from '@/components/view/ThemeProvider';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Providers>
            <div className="flex">
              <SideNavbar />
              <main className="flex-1 overflow-hidden bg-[#F9F9F9] px-6 py-5 pt-0 dark:bg-[#150A09] medium:pt-5 large:px-11 large:py-10">
                {children}
              </main>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
