// 구조 분해 할당
// 구조분해할당은 배열의 원소나 객체의 프로퍼티를 추출해서 변수에 저장할 수 있게 해준다.

//스프레드 vs 구조분해할당
//스프레드는 모든 원소와 프로퍼티를 가져와서 새로운 배열이나 객체에 할당해줌
//구조분해할당은 원소나 프로퍼티 하나만 가져와서 변수에 저장한다.


//배열 구조분해 할당
var [a,b] = ['hello',3]; //배열을 새로 생성한 것이 아닌 변수 a,b에 각각 값을 할당한 것이다.
console.log(a);
console.log(b);

const numbers = [1,2,3];
var [num1,num2] = numbers;
console.log(num1,num2); // 1 , 2

var [num1, , num3] = numbers;
console.log(num1,num3); // 1 , 3;

//객체 구조분해 할당

var {name} = {name:"MAX",age:28};

console.log(name);