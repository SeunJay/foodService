import React from "react";
import Header from "../components/layouts/Header";
import Section1 from "../components/layouts/Section1";
import Footer from "../components/layouts/Footer";

export default function Home(props) {
  console.log(props);
  const { location: {pathname}} =props
  return (
    <div>
      <Header pathname={pathname}/>
      <Section1 />
      <Footer />
    </div>
  );
}
