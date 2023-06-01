


// describe('sanity test', () => {
//     it('should be true', () => {
//         expect(true).toBe(true);
//     });
// });


describe('addition', () =>{

    it('should add two positive integers', () => {
       const calc = new Calculator();
       const result = calc.add(4, 5);
       expect(result).toBe(9);
    });
});