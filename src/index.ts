interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "jaeeun",
    age: 22,
    gender: "female",
}

const sayHi = (person: Human): void => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
    // return 사용 불가 (:void)
};
// 타입 설정함

sayHi(person)
//sayHi("2", "24", 14); 
// 여러 개가 틀려도 첫번째 거만 찾아줌

export {};