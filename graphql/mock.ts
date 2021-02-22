import { MockList } from "apollo-server";

// export const mocks = {
//   Int: () => 6,
//   Float: () => 22.1,
//   String: () => "Hello",
// };

// export const mocks = {
//   Person: () => ({
//     // a list of length between 2 and 6 (inclusive)
//     friends: () => new MockList([2, 6]),
//     // a list of three lists each with two items: [[1, 1], [2, 2], [3, 3]]
//     listOfLists: () => new MockList(3, () => new MockList(2)),
//   }),
// };

export const mocks = {
  Query: () => ({
    people: () => new MockList([0, 12]),
  }),
};
