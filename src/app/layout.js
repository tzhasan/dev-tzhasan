import "./globals.css";
import AuthProvider from "./provider/authProvider";
import MenubarProvider from "./provider/menubarProvider";
import ProfileProvider from "./provider/profileProvider";
import ThemeProvider from "./provider/themeProvider";

export const metadata = {
  title: "Dev-TzHasan",
  description:
    "Explore the professional portfolio of Md Tajbiul, a MERN stack web developer. Showcasing skills, projects, and experience in building dynamic and responsive web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary ">
        <AuthProvider>
          <MenubarProvider>
            <ProfileProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
            </ProfileProvider>
          </MenubarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
