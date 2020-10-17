const name = "Jaeeun",
age = 24,
gender = "female";

const sayHi = (name, age, gender?) => {
    console.log('Hello ${name}, you are ${age}, you are a ${gender}');
};

sayHi(name, age); 
// sayHi parameter의 gender 끝에 ? 없으면 에러 발생
//JavaScript는 그렇지 않음

export {};