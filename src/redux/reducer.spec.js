import products from "./reducer";

describe("products Reducers", () => {
  const initState = {
    isFetching: false,
    products: [],
    product: {}
  };

  it("returns the initial state when actions is not passed", () => {
    const reducer = products(undefined, {});
    expect(reducer).toEqual(initState);
  });
  it("isFetching should be true when action REQUEST_PRODUCTS is called", () => {
    const reducer = products(initState, { type: "REQUEST_PRODUCTS" });
    expect(reducer).toEqual({
      isFetching: true,
      products: [],
      product: {}
    });
  });
});
