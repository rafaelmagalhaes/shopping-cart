import { getUniqueObjects, arr } from "./refactor";

test("remove duplicates from array", () => {
  expect(getUniqueObjects(arr, "id")).toEqual([
    { id: 1, name: "paint" },
    { id: 2, name: "bead" },
    { id: 3, name: "arm" },
    { id: 4, name: "snakes" },
    { id: 5, name: "wire" },
    { id: 6, name: "ducks" }
  ]);
});
