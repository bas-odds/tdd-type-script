import {
  findLongestName,
  filterMember,
  findMemberLongestName,
} from "./member";

const listGuest = [
  { name: "Eric Jones", isMember: false },
  { name: "Paris Hilton", isMember: true },
  { name: "Kayne West", isMember: false },
  { name: "Angelina Jolie", isMember: true },
  { name: "Bob Ziroll", isMember: true },
];

describe("filterMember", () => {
  test("should return members", () => {
    const expectResult = [
      { name: "Paris Hilton", isMember: true },
      { name: "Angelina Jolie", isMember: true },
      { name: "Bob Ziroll", isMember: true },
    ];

    expect(filterMember(listGuest)).toEqual(expectResult);
  });

  test("should return longest name", () => {
    expect(findLongestName(listGuest)).toEqual("Angelina Jolie");
  });

  test("should return member and longest name", () => {
    expect(findMemberLongestName(listGuest)).toEqual("Angelina Jolie");
  });
});
