import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home";
import Login from "../login";


const Crochet = lazy(() => import("../crochet"));
const DreamCatcher = lazy(() => import("../dreamCatcher"));
const WeddingEssential = lazy(() => import("../weddingEss"));
const Resin = lazy(() => import("../resin"));
const Cart = lazy(() => import("../cart"));
const Favourite = lazy(() => import("../favourite"));
const FeartureProduct = lazy(() => import("../featureProduct"));
const All = lazy(() => import("../all"));
const Aboutus = lazy(() => import("../aboutus"));
const Terms = lazy(() => import("../terms"));
const Privacy = lazy(() => import("../privacy"));
const Faq= lazy(() => import("../faq"));
const Item_199= lazy(() => import("../item_199"));
const Item_999= lazy(() => import("../item_999"));
const Bestseller= lazy(() => import("../bestseller"));
const Signup= lazy(() => import("../signup"));
const Coustmize= lazy(() => import("../coustmize"));
const Confirmorder= lazy(() => import("../confirmorder"));

 {/* <Route path="*" element={<NotFound />} /> */}


const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crochet" element={<Crochet />} />
        <Route path="/resin" element={<Resin />} />
        <Route path="/dreamCatcher" element={<DreamCatcher />} />
        <Route path="/weddingEssential" element={<WeddingEssential />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/feartureProduct" element={<FeartureProduct />} />
        <Route path="/all" element={<All />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/item_199" element={<Item_199 />} />
        <Route path="/item_999" element={<Item_999 />} />
        <Route path="/bestseller" element={<Bestseller />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/coustmize" element={<Coustmize />} />
        <Route path="/confirmorder" element={<Confirmorder/>} />
        {/* <Route path="/search" element={<SearchResults />} /> */}

      
      
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
