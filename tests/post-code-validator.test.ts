import getInvalidPostcodes from "../src/post-code-validator";


describe('PostCodeValidator', () => {
    test('Should return a list of properties with invalid postcodes', () => {
        expect(getInvalidPostcodes()).toStrictEqual(["p_1025", "p_1080", "p_1100"]);
    })
})