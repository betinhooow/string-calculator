import { Add } from "./string-calculator";

describe("utils/string-calculator", () => {
  it("should return zero when '' is passed", () => {
    expect(Add('')).toEqual(0);
  });

  describe('should return the sum of the numbers', () => {
    it("when separated by comma", () => {
      expect(Add('1,2,5')).toEqual(8);
    });
  
    it.each([
      ['1\n,2,3', 6],
      ['1,\n2,4', 7],
      ['1,2\n,4,a,b,c', 7]
    ])("when using new line", (value, expected) => {
      expect(Add(value)).toEqual(expected);
    });

    it.each([
      ['//;\n1;3;4', 8],
      ['//$\n1$2$3', 6],
      ['//@\n2@3@8', 13],
      ['//-\n-a', 0]
    ])("when using custom delimiter", (value, expected) => {
      expect(Add(value)).toEqual(expected);
    });
  })

  it.each([
    ['//;\n-1;3;-4', 'Negatives not allowed: -1,-4'],
    ['5\n,6,-7', 'Negatives not allowed: -7'],
    ['8,-9,1', 'Negatives not allowed: -9'],
    ['//-\n-2-3-4', 'Negatives not allowed: -2,-3,-4'],
  ])('should throw an exception when with negative values', (value, expected) => {
    expect(() => Add(value)).toThrow(expected);
  });

  it("[BONUS] should ignore number > than 1000", () => {
    expect(Add('2,1001')).toEqual(2);
  });
  
  it("[BONUS] should sum even when delimeters have arbitrary length", () => {
    expect(Add('//***\n1***2***3')).toEqual(6);
  });
});