/* Math.pow */
console.log(Math.pow(2, 5));//32
console.log(Math.pow(125, 1/3));//5
console.log(Math.pow(64, 1/2));//8
console.log(Math.pow(5, 4));//625

/* Math.round */
console.log(Math.round(5.8), Math.round(-3.5), Math.round(-7.8)); //6 -3 -8

/*Math.ceil */
console.log(Math.ceil(0.6));// 1
console.log(Math.ceil(-2.3));//-2
console.log(Math.ceil(-2.7));//-2

/*Math.floor*/
console.log(Math.floor(0.7));//0

/*Math.ceil*/
console.log(Math.ceil(0.6))// 1.0

/*
    Eulers 
    used in calculating interest rates compoundly
    FV = PV(e **(Rt));
    FV = Future value
    PV = Present value
    e = Eulers Number
    R = Rate (Divide by 100)
    t = time in years
*/


console.log(Math.E);//2.718281828459045
console.log(Math.E**(0.3 * 4) * 10000);//33201.16922736547
console.log(5000 * Math.E ** (0.2 * 1));//6107.013790800849


/* Math.LN10*/
console.log(Math.log(10)/Math.LN10);//1
console.log(Math.log(100)/ Math.LN10);//2

/* Math.LN2 */
console.log(Math.log(2)/Math.LN2);//1
console.log(Math.log(8)/ Math.LN2);//3


/*Base 10 Logarithm of E 
Math.LOG10E */
console.log(Math.log(Math.E)/ Math.LN10);//0.43429448190325176
console.log(Math.LOG10E);//0.4342944819032518

/*Base 2 Logarithm of E 
Math.LOG2E
*/
console.log(Math.log(Math.E)/ Math.LN2);//1.4426950408889634
console.log(Math.LOG2E);//1.4426950408889634

/* Math.PI  */
console.log(Math.PI);//3.141592653589793

/* SQUARE ROOT OF 1 / 2 */
console.log(Math.SQRT1_2)//0.7071067811865476

/* square root of 2 */
console.log(Math.SQRT2)//1.4142135623730951

/*Absolute value of a number */
console.log(Math.abs(-6));//6
console.log(Math.abs(-7));//7

/*cos inverse of a number */
console.log(Math.acos(0) / Math.PI * 180);//90
console.log(Math.acos(1) / Math.PI * 180);//0
console.log(Math.acos(0.5) / Math.PI * 180);