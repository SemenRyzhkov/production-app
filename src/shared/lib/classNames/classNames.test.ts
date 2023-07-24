import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with one param', () => {
    expect(classNames('class')).toBe('class');
  });

  test('with additional class', () => {
    const expected = 'class class1 class2';
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'class class1 class2 mod1 mod2';
    expect(
      classNames('class', { mod1: true, mod2: true }, ['class1', 'class2']),
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'class class1 class2 mod1';
    expect(
      classNames('class', { mod1: true, mod2: false }, ['class1', 'class2']),
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'class class1 class2 mod1';
    expect(
      classNames('class', { mod1: true, mod2: undefined }, ['class1', 'class2']),
    ).toBe(expected);
  });
});
