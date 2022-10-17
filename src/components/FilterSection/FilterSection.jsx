import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

export const FilterSection = (props) => {
  const {
    brand,
    setBrand,
    category,
    setCategory,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    brands,
    categories,
  } = props;

  //initial state of checkboxes
  const [brandCheckedState, setBrandCheckedState] = useState(
    new Array(brands.length).fill(false)
  );
  const [categoryCheckedState, setCategoryCheckedState] = useState(
    new Array(categories.length).fill(false)
  );
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("2000");

  //handler functions
  const onCategoryChangeHandler = (i) => {
    const newState = categoryCheckedState.map((item, idx) =>
      idx === i ? !item : item
    );
    setCategoryCheckedState(newState);
  };

  const onBrandChangeHandler = (i) => {
    const newState = brandCheckedState.map((item, idx) =>
      idx === i ? !item : item
    );
    setBrandCheckedState(newState);
  };

  const minPriceHandler = (e) => {
    // console.log(e.target.value);
    setMinPrice(e.target.value);
  };

  const maxPriceHandler = (e) => {
    setMaxPrice(e.target.value);
  };

  const applyChanges = (e) => {
    let brandList = "",
      categoryList = "";

    for (var i = 0; i < brandCheckedState.length; i++) {
      if (brandCheckedState[i] === true) brandList += `,${brands[i]}`;
    }
    if (brandList !== "") brandList = brandList.substring(1);
    console.log(brandList);
    setBrand(brandList);
    console.log(brand);

    for (var i = 0; i < categoryCheckedState.length; i++) {
      if (categoryCheckedState[i] === true) categoryList += `,${categories[i]}`;
    }
    if (categoryList !== "") categoryList = categoryList.substring(1);
    setCategory(categoryList);
    console.log(category);

    setPriceFrom(minPrice);
    setMaxPrice(maxPrice);
  };

  return (
    <>
      <div className="brand-container">
        <h3>Brands</h3>
        <form className="brand">
          {brands.map((br, i) => (
            <Checkbox
              key={i}
              typeOfBox={br}
              onChange={() => onBrandChangeHandler(i)}
              num={i}
            />
          ))}
        </form>
      </div>

      <div className="category-container">
        <h3>Categories</h3>
        <form className="brand">
          {categories.map((cat, i) => (
            <Checkbox
              key={i}
              typeOfBox={cat}
              className="checkbox"
              onChange={() => onCategoryChangeHandler(i)}
              num={i}
            />
          ))}
        </form>
      </div>

      <div className="price-container">
        <h3>Price range</h3>
        <div className="price-range">
          <input className="price-input" onChange={minPriceHandler} />{" "}
          <span> TO </span>{" "}
          <input className="price-input" onChange={maxPriceHandler} />
        </div>
      </div>

      <div className="apply">
        <button onClick={applyChanges} className="btn">
          APPLY FILTERS
        </button>
      </div>
    </>
  );
};
