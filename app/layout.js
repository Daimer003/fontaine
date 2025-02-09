import { FontaineProvider } from "@/context/FontainerContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/public/css/style.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FontaineProvider>
        <body>
          {children}
          <ToastContainer />
        </body>
      </FontaineProvider>
    </html>
  );
}
