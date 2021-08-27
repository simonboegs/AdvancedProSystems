import * as React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

const viewportContext = React.createContext({});

export function Layout(props) {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    if (window !== `undefined`) {
      setWidth(window.innerWidth);
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  return (
    <viewportContext.Provider value={{ width }}>
      <div className="wrapper">
        <header>
          <NavBar />
        </header>
        <main>{props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </viewportContext.Provider>
  );
}

export const useViewport = () => {
  const { width } = React.useContext(viewportContext);
  return { width };
};
