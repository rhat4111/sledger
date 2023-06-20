import React from "react";
import About from "components/Features/Home/About";
import Hero from "components/Features/Home/Hero";
import LastExchanges from "components/Features/Home/LastExchanges";
import StellerPartners from "components/Features/Home/StellerPartners";
import WhyStellerLedger from "components/Features/Home/WhyStellerLedger";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyStellerLedger />
      <LastExchanges />
      <About />
      <StellerPartners />
    </div>
  );
};

export default Home;
