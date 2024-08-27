 const sumar = require('../index.js');
 const assert = require('assert');

 describe("Probar la suma de dos numeros", () =>{
    //Afirmar que 5 mas 5 son 10
    it("Cinco mas cinco es 10", ()=>{
        assert.equal(10,sumar(5,5));
    });
    //Afirmar que 5 mas 5 no son 55
    it("Cinco mas cinco no es 55", ()=>{
        assert.notEqual(55,sumar(5,5));
    });
 });

