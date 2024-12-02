import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/vendors/halpes-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/animate/animate.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/globals.css";
import "@/styles/halpes.css";
import "@/styles/halpes-responsive.css";
import store, { persistor } from "src/redux/store";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from "react";


const MyApp = ({ Component, pageProps }) => {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export const wrapper = createWrapper(() => store);

export default wrapper.withRedux(MyApp);
