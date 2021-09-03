import * as React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "./Layout.css";
import "../styles.scss";
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
        <header className="sticky-top">
          <NavBar bgColor="rgb(255,255,255,.95)" />
        </header>
        <main>{props.children}</main>
        <footer>
          <Footer bgColor={props.footerBgColor} />
        </footer>
      </div>
    </viewportContext.Provider>
  );
}

export const useViewport = () => {
  const { width } = React.useContext(viewportContext);
  return { width };
};
