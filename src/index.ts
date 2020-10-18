const sayHi = (name:string, age:Number, gender:string): void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    // return 사용 불가 (:void)
};
// 타입 설정함

sayHi("jaeeun", 24, "female")
//sayHi("2", "24", 14); 
// 여러 개가 틀려도 첫번째 거만 찾아줌

export {};