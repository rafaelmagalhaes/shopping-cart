import products from "./reducer";

describe("products Reducers", () => {
  const initState = {
    isFetching: false,
    products: [],
    cart: []
  };
  const stateWithProducts = {
    ...initState,
    products: [
      {
        image:
          "https://ik.imagekit.io/pimberly/5a8c13244d6da904d47144ba/93e15616/5d70e2f93d51575d590000b7.jpeg",
        brand: {
          id: "2000000000000020178",
          name: "Michael Belhadi",
          slug: "michael-belhadi"
        },
        title: "Jungle Art Print Unframed",
        id: "2000001000413620178",
        skus: [
          {
            description: "Jungle Art Print Unframed A4",
            id: "2100011000413620178",
            price: 30,
            stock: 10
          },
          {
            description: "Jungle Art Print Unframed A3",
            id: "2100021000413620178",
            price: 40,
            stock: 4
          },
          {
            description: "Jungle Art Print Unframed A2",
            id: "2100031000413620178",
            price: 50,
            stock: 10
          },
          {
            description: "Jungle Art Print Unframed A1",
            id: "2100041000413620178",
            price: 60,
            stock: 10
          },
          {
            description: "Jungle Art Print Unframed A0",
            id: "2100051000413620178",
            price: 120,
            stock: 10
          }
        ]
      }
    ]
  };
  const stateWithCartItems = {
    ...stateWithProducts,
    cart: [
      {
        image:
          "https://ik.imagekit.io/pimberly/5a8c13244d6da904d47144ba/93e15616/5d70e2f93d51575d590000b7.jpeg",
        brand: {
          id: "2000000000000020178",
          name: "Michael Belhadi",
          slug: "michael-belhadi"
        },
        title: "Jungle Art Print Unframed",
        id: "2000001000413620178",
        skus: [
          {
            description: "Jungle Art Print Unframed A4",
            id: "2100011000413620178",
            price: 30,
            stock: 10
          },
          {
            description: "Jungle Art Print Unframed A3",
            id: "2100021000413620178",
            price: 40,
            stock: 4
          },
          {
            description: "Jungle Art Print Unframed A2",
            id: "2100031000413620178",
            price: 50,
            stock: 10
          },
          {
            description: "Jungle Art Print Unframed A1",
            id: "2100041000413620178",
            price: 60,
            stock: 10
          },
          {
            description: "Jungle Art Print Unframed A0",
            id: "2100051000413620178",
            price: 120,
            stock: 10
          }
        ]
      }
    ]
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
      cart: []
    });
  });
  it("Empty cart when EMPTY_CART is called", () => {
    const reducer = products(stateWithCartItems, { type: "EMPTY_CART" });
    expect(reducer).toEqual({ ...stateWithCartItems, cart: [] });
  });
});
