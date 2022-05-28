const LIMIT_VALUE = 1000;

export const Add = (values: string): number => {
  if (values === '') return 0;

  const negatives = values.match(/-?\d+/g)?.filter(n => parseInt(n) < 0) || [];
  if (negatives.length) throw new Error(`Negatives not allowed: ${negatives}`);
  
  let delimiter = ',';
  if (values.startsWith('//')) {
    delimiter = values[2];
  }

  const numbers = values
    .replace(new RegExp(`[^${delimiter}0-9]`, "gi"), '')
    .split(delimiter)
    .map(eachString => {
      const number = parseInt(eachString, 10)
      return number < LIMIT_VALUE ? number : 0
    });

  return numbers.reduce((s, n) => s + n);
}