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
