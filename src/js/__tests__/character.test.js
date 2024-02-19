import Character from "../character";

test('Проверка класса Character', () => {
    const character = new Character('Bob');  
    expect(character.name).toBe('Bob');
  });