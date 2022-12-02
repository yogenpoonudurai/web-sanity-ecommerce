import React from "react";

function Home() {
  return (
    <div className="container min-h-screen">
      <p>Hero Banner</p>
      <div className="">
        <h2>Best Selling Products</h2>
        <p className="text-xl font-bold mx-auto">Speakers of many variations</p>
        <div className="">
          {["Product 1", "Product2"].map((product) => product)}
        </div>
      </div>
    </div>
  );
}

export default Home;
