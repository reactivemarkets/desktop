import { namespaceComparer } from "../namespaceComparer";

describe("compare", () => {
    test.each`
        a            | b            | expected
        ${"desktop"} | ${"alpha"}   | ${-1}
        ${"alpha"}   | ${"desktop"} | ${1}
        ${"alpha"}   | ${"beta"}    | ${-1}
        ${"beta"}    | ${"alpha"}   | ${1}
        ${"alpha"}   | ${"alpha"}   | ${0}
    `("should sort desktop then alphabetical", ({ a, b, expected }) => {
        const sort = namespaceComparer(a, b);

        expect(sort).toBe(expected);
    });
});
