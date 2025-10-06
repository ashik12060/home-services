import React, { useState } from "react";
import LoginChoice from "../../pages/LoginChoice";
import Test from "./Test";
import Testing2 from "./Testing2";
import Services from "../Services/Services";
import Services2 from "../Services/Services2";
import HowItWorks from "../HowItWorks";
// import NewTest from "../NewTest";
import PlumbingForm from '../PlumbingForm/PlumbingForm'
// import TableHeader from "../TableHeader/TableHeader";
// import ProductsLists from "../ProductsLists/ProductsLists";
// import Footer from "../Shared/Footer/Footer";
// import Header from "../Shared/Header/Header";
// import { CartProvider } from "../../hooks";
// import OurBrands from "../OurBrands/OurBrands";
// import ServiceFeature from "../ServiceFeature/ServiceFeature";
// import Feedback from "../Feedback/Feedback";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="overflow-hidden">
     
      <PlumbingForm />
      <Services2 />
      <HowItWorks />
     
    </div>
  );
};

export default Home;
