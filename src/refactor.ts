interface ArrayType {
  id: number;
  name: string;
  [key: string]: string | number;
}
export const arr: ArrayType[] = [
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

export const getUniqueObjects = (arr: ArrayType[], id: string = "id") => {
  return arr.reduce((acc, val) => {
    const x = acc.find(item => item[id] === val[id]);
    if (!x) {
      return acc.concat(val);
    } else {
      return acc;
    }
  }, [] as ArrayType[]);
};
getUniqueObjects(arr, "id");
