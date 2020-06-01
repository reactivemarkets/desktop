import { namespaceComparer } from "../namespaceComparer";

describe("compare", () => {
    test.each`
        a            | b            | expected
        ${"desktop"} | ${undefined} | ${-1}
        ${"desktop"} | ${"alpha"}   | ${-1}
        ${undefined} | ${"desktop"} | ${1}
        ${undefined} | ${"alpha"}   | ${-1}
        ${undefined} | ${undefined} | ${0}
        ${"alpha"}   | ${undefined} | ${1}
        ${"alpha"}   | ${"desktop"} | ${1}
        ${"alpha"}   | ${"beta"}    | ${-1}
        ${"beta"}    | ${"alpha"}   | ${1}
        ${"alpha"}   | ${"alpha"}   | ${0}
    `("should sort desktop, undefined then alphabetical", ({ a, b, expected }) => {
        const sort = namespaceComparer(a, b);

        expect(sort).toBe(expected);
    });
});
