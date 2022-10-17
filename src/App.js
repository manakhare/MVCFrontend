import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Paginate } from "./components/Paginate/Paginate";
import { categories, brands, brandsPerCategory } from "./data";
import Card from "./components/Card/Card";
import { FilterSection } from "./components/FilterSection/FilterSection";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [priceFrom, setPriceFrom] = useState("0");
  const [priceTo, setPriceTo] = useState("2000");

  //fetches posts when app mounts
  useEffect(() => {
    console.log(`${brand} ${category} ${page}`);
    const fetchProducts = async () => {
      setLoading(true);
      var filter = "?",
        flag = 0;
      if (priceFrom !== "0") {
        filter += `priceFrom=${priceFrom}`;
        flag = 1;
      }
      if (priceTo !== "2000") {
        if (flag === 1) filter += "&";
        filter += `priceTo=${priceTo}`;
        flag = 2;
      }
      if (priceTo === "2000" && flag === 1 && flag !== 2) {
        filter += "priceTo=2000";
      }
      if (brand !== "") {
        if (flag === 1 || flag === 2) filter += "&";
        filter += `brand=${brand}`;
        flag = 3;
      }
      if (category !== "") {
        if (flag === 1 || flag === 2 || flag === 3) filter += "&";
        filter += `category=${category}`;
        flag = 4;
      }
      if (page !== "1") {
        if (flag === 1 || flag === 2 || flag === 3 || flag === 4) filter += "&";
        filter += `page=${page}`;
      }
      if (flag === 0) filter = "/";
      console.log(filter);
      const res = await axios.get(`https://localhost:7190/product${filter}`);
      setProducts(res.data);
      setLoading(false);
      console.log(res.data);
    };

    fetchProducts();
  }, [priceFrom, priceTo, brand, category, page]);

  
  return (
    <div className="app">
      <div className="heading">
        <h1>MVC PROJECT</h1>
      </div>

      <div className="content-parent">
        <div className="filters">
          <FilterSection
            brandL={brand}
            setBrand={setBrand}
            categoryL={category}
            setCategory={setCategory}
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
            brands={brands}
            categories={categories}
          />

        </div>

        <div className="right-section">
          <div className="cards">
            {products.map((product, i) => (
              <Card key={i} {...product} />
            ))}
          </div>
          <div className="pagination-container">
            <Paginate setPage={setPage} page={page} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
