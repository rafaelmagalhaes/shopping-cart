import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
import Currency from "../../Helpers/currency";
import Image from "react-graceful-image";

function Index({ product, addFunc }) {
  return (
    <div className="car__Cards">
      <div className="card mb-4 mt-3">
        <div className="img-wrapper img-hover">
          <Image className="card-img-top m-auto " src={product.image} />
          <div className="img-overlay">
            <div className="card-title">{product.title}</div>
          </div>
        </div>
        <hr className="m-0" />
        <div className="card-body">
          <button
            className="btn btn-block btn-primary mt-2"
            onClick={() => addFunc(product)}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
