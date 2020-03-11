# Bombinate Take-Home Coding Exercises

We understand that your time is valuable so we have written these exercises expecting you to work for around 2 hours. Your effort is very much appreciated.

## Expectations

Keep it simple, we would like to see code which is easy to understand and maintain. Please do not create overly verbose or complex solutions.

## Cart Task

Create an app which will allow a user to view some products including a shopping cart with the functionality described below.

### User should be able to

- see products and their details
- add a product to their shopping cart
- see products in their shopping cart
- remove one product from their cart
- remove all products from their cart with a single action
- increase and decrease the quantity of an item in the cart

### You should

- create an appropriate folder structure, keep in mind that we need utilities, services, components and pages
- use [Create React App](https://github.com/facebook/create-react-app)
- use `/products.json` to build the product catalogue
- use a component library if you want to
- include e2e AND unit tests, we like Jest, React Testing Library and Cypress but use what you prefer

### Notes

- We will not be assessing interactions or visual presentation.
- We would like you to write the app in TypeScript and include types and interfaces however this is optional.

## Refactoring Task

Refactor this function in Typescript, and create tests for it in Jest.

```js
 
const arr = [
  { id: 1, name: "paint" },
  { id: 2, name: "bead" },
  { id: 3, name: "arm" },
  { id: 4, name: "snakes" },
  { id: 5, name: "wire" },
  { id: 6, name: "ducks" },
  { id: 1, name: "cork" },
  { id: 1, name: "bed" }
];

// Get the unique objects of this array based on a key
// Just remove the duplicate ones

const getUniqueObjects = (arr, id = "id") => {
  arr.reduce((acc, val) => {
    const x = acc.find(item => item[id] === val[id]);
    if (!x) return acc.concat([val]);
    return acc;
  }, []);
};

getUniqueObjects(arr, "id");

```
