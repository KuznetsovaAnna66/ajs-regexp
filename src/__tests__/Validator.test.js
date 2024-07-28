import Validator from "../js/Validator";

test.each([
  ["player", true],
  ["FirstPlayer", true],
  ["First-Player", true],
  ["First_player", true],
  ["First_190_Player", true],
  ["First_12345_Player", false],
  ["первый_игрок", false],
  ["1_player", false],
  ["First-Player_1", false],
  ["First$Player", false],
  ["First*Player", false],
  ["_First_Player", false],
  ["First_Player_", false],
  ["-First_Player", false],
  ["First_Player-", false],
  ["First/Player", false],
  ["First|Player", false],
  ["First.Player", false],
])("testing validateUsername method with name: %s", (name, result) => {
  expect(Validator.validateUsername(name)).toBe(result);
});
