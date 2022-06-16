import { getProfile, Person } from "./index";

describe("Test concept", function () {
  test.skip("should return the profile of a person – BEFORE", function () {
    const name = "Diogo";
    const age = "30";
    const skillsList = ["HTML", "CSS", "JS"];
    const profile = getProfile(name, age, skillsList);
    expect(profile).toEqual(
      `Hey ${name}, your age is ${age}, your skills are: ${skillsList}`
    );
  });

  test("should return the profile of a person – AFTER", function () {
    const name = "Diogo";
    const age = "30";
    const skillsList = ["HTML", "CSS", "JS"];

    const oneGuy = new Person(name, age, skillsList);
    const profile = getProfile(oneGuy);

    expect(profile).toEqual(
      `Hey ${name}, your age is ${age}, your skills are: ${skillsList}`
    );
  });
});
