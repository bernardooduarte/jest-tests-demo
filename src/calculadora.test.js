const { soma, subtrai, divide } = require("./calculadora");

describe("Calculadora", () => {

    test("deve somar dois números", () => {
        expect(soma(2, 3)).toBe(5);
    });

    test("deve subtrair dois números", () => {
        expect(subtrai(10, 4)).toBe(6);
    });

    test("deve dividir dois números", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("deve lançar erro ao dividir por zero", () => {
        expect(() => divide(10, 0)).toThrow("Divisão por zero");
    });

});