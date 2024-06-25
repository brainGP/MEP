import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";

const clientId = process.env.GOOGLE_CLIENT_ID;

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
    </body>
  </html>
);

export default RootLayout;
