import { React } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PageBody from "../pageBody/PageBody";

function MainBody() {
// This is the main component that renders the page.
// Header is for the log in, search and Company name logo
// PageBody renders all the pages
// Footer is for the bottom links and copyright
  return (
    <>
      <Header />
      <PageBody />
      <Footer />
    </>
  );
}

export default MainBody;