import React, { useState } from "react";
import data from "./data.json";
import ShoeDetail from "./ShoeDetail";
import ShoeItem from "./ShoeItem";

function ShoeShop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div className="container">
      <h1 className="text-center mt-3">Stock X</h1>
      <div className="row">
        {data.map((product) => {
          return (
            <div key={product.id} className="col-sm-4 mt-3">
              <ShoeItem
                product={product}
                products={data}
                onSelectProduct={handleGetProduct}
              />
            </div>
          );
        })}
      </div>
      <ShoeDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default ShoeShop;