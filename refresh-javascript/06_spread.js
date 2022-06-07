// ... 연산자
// 배열의 원소나 객체의 프로퍼티를 나누는데 사용

// oldArray에 1,2를 추가하고 싶을 때
const oldArray = [7,8,9];
const newArray = [...oldArray,1,2];

// oldObject의 프로퍼티를 포함해서 새로운 프로퍼티를 추가하고 싶을 때
const oldOBject = {
    name:"hello",
    age:24,
}
// const newOBject = [...oldOBject, newProp:5];


// rest
// 함수 인수의 목록을 배열로 합치는데 사용

function sortArgs(...args){ // 매개변수가 몇 개이든 args로 쓰임
    return args.sort();
}




// =======================spread====================================

const numbers = [1,2,3];
const newnumbers = [...numbers,4,5];

console.log(newnumbers);


const person = {
    name:"hello"
};

const newPerson = {
    ...person,
    age:28
}

console.log(newPerson);

// =======================rest====================================

const filter = (...args)=>{
    return args.filter((it)=>it==1);
}

console.log(filter(1,2,3));