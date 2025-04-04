var _var = 10;
let _let = 20;
const _const = 30;

function scopeTest(){
    var _var2 = 100;
    let _let2 = 200;
    const _const2 = 300;

    console.log("scope test");

    if(true){
        var _var3 = 'one';
        let _let3 = "two";
        const _const3 = 'three';

        // console.log(_var3,_let3,_const3);
     
    }

    console.log(_var2,_let2,_const2);
    // console.log(_var3,_let3,_const3);
    console.log(_var3);

    //note 

    //var only working on everyware but let and const  working on that inside #var working on function block

    //let and const only working on inside the block element{}
    //let - block scope
    //var- function scope
    //const - block scope
}


scopeTest();