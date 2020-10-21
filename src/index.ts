class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }    
}
// name이 private이면 class 밖인 ${person.name}에서 호출 불가능

const h1 = new Human("jaeeun", 24, "female");

const sayHi = (person: Human): void => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
    // return 사용 불가 (:void)
};
// 타입 설정함

sayHi(h1)
//sayHi("2", "24", 14); 
// 여러 개가 틀려도 첫번째 거만 찾아줌

export {};