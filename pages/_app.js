import { createGlobalStyle, css } from "styled-components";
import Variables from "../styles/variables.css";
import { usePathname } from "next/navigation";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'

const Styling = css`
  /* theme css variables */
  ${Variables}
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--base-text-color);
    background: var(--base-background-color);
    font: var(--font-size-base) / var(--line-height-base)
      var(--base-font-family);
    font-weight: 500;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.nav-active {
      @media (max-width: 575px) {
        overflow: hidden;
      }
    }
  }

  #wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;

    @media (min-width: 992px) {
    }
  }

  #content-wrap {
    padding: 80px 15px 0;

    @media (min-width: 992px) {
      padding: 80px 15px 0 270px;
    }
    @media (min-width: 1200px) {
      padding: 90px 50px 0 300px;
    }
  }
  .Toastify__toast,
  .Toastify__toast-theme--light,
  .Toastify__toast--success,
  .Toastify__toast--close-on-click {
    border-radius: 5px;
    border-left: 8px solid #0eac27;
    background: #e7ffea;
  }
  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: "Nunito";
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--blue);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    transition: opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 15px;
    color: var(--blue);
    font-weight: 600;
  }
  h1,
  .h1 {
    font-size: 30px;
    line-height: 36px;
  }
  h2,
  .h2 {
    font-size: 24px;
    line-height: 28px;
  }
  h3,
  .h3 {
    font-size: 20px;
    line-height: 24px;
  }
  h4,
  .h4 {
    font-size: 18px;
    line-height: 23px;
  }

  p {
    margin: 0 0 15px;
    &:last-child {
      margin: 0;
    }
  }

  /************* custom scrollbar styles ************/

  /* This will work on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--primary) #eceaf9;
  }

  /* Targtes on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 30px;
    background: #eceaf9;
  }

  *::-webkit-scrollbar-thumb {
    background: var(--primary);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
    border-radius: 30px;
  }

  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    appearance: textfield;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${Styling}
`;

export default function App({ Component, pageProps }) {
  const pagesWithLayout = ["/", "/create-emissary", "/created-emissary", "/emissary-listed"];

  const pathname = usePathname();
  const showLayout = pagesWithLayout.includes(pathname);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <div id={showLayout == false ? "content-wrap" : ""}>
            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}
