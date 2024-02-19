import Team from "../team";
import Character from "../character";

test('Проверка методов', () => {
  const team = new Team();
  const member = new Character('Nick');

  team.add(member);
  expect(team.members.has(member)).toBe(true);

  try {
      team.add(member);
    } catch (e) {
      expect(e).toEqual(new Error ('Такой персонаж уже есть!'));
    }
  
  const bob = new Character('Bob');
  const ann = new Character('Ann');

  team.addAll(member, bob, ann);
  expect(team.members.has(member)).toBe(true);
  expect(team.members.has(bob)).toBe(true);
  expect(team.members.has(ann)).toBe(true);

  expect(Array.isArray(team.toArray())).toBe(true);
  
});
