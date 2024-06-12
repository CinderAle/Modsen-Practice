console.log("Task #2");

(function () {
    //All variables can be accessed inside the block
    {
    var x_var = 1;
    let x_let = 1;
    const x_const = 1;

    console.log(x_var, x_let, x_const);
    }

    //Only x_var can be accessed outside of the block
    //Throws ReferenceError
    console.log(x_var, x_let, x_const);
})();