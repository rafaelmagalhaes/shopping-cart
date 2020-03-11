import React from "react";
import Currency from "../../Helpers/currency";

const CartItem = ({
  product,
  removeProduct,
  index,
  skuSelected,
  handleQuantity
}) => (
  <div className="row">
    <div className="col-12 col-sm-12 col-md-2 text-center">
      <img
        className="img-responsive"
        src={product.image}
        alt="prewiew"
        width="120"
        height="80"
      />
    </div>
    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
      <h4 className="product-name">
        <strong>{product.title} </strong>
      </h4>
      {product.skus && product.skus.length ? (
        <select
          className="custom-select"
          onChange={event => skuSelected(event.target.value, product)}
          defaultValue={product.skus[0].id}
        >
          {product.skus.map(sku => (
            <option value={sku.id} key={sku.id}>
              {sku.description} - {Currency.format(sku.price)}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}
    </div>
    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
      <div className="col-4 text-md-right">
        <h6>
          <strong>
            {Currency.format(product.total)}
            <span className="text-muted">x</span>
          </strong>
        </h6>
      </div>
      <div className="col-4">
        <div className="quantity">
          <input
            type="number"
            onChange={event => handleQuantity(event, product)}
            min="1"
            value={product.units}
            title="Qty"
            className="input-group"
            size="4"
          />
        </div>
      </div>
      <div className="col-4 ">
        <button
          type="button"
          onClick={() => removeProduct(index)}
          className="btn btn-outline-danger btn-xs"
        >
          remove
        </button>
      </div>
    </div>
  </div>
);

export default CartItem;
