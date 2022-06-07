
const num = 1; // 기본형
const num2 = num; // 값을 num2에 복사함

//기본형 자료 타입은 재할당 할 때마다 값을 복사한다




// 참조형(reference)(객체,배열)
const person = {
    name:"hello"
};
const secondPerson = person; // 똑같은 값이 나오지만 복사한 것은 아님

// 객체 person은 메모리에 저장되있고<선언부>, 상수 person은 메모리에 있는 주소를 가르키는 포인터를 저장<할당부>
// 상수 person은 secondperson이라는 상수에 할당할 때 주소 포인터가 복사된다

const thirdperson = {
    ...person // 스프레드 연산자를 통해 객체 복사
} // 스프레드 연산자로 복사할 경우 기존 복사한 객체의 값 그대로 온다

person.name = "hi"; // person의 내용을 직접 바꾸었는데도 secondperson의 값 또한 역시 변경된다.


// 객체나 배열을 참조형으로 복사할 경우 한 component에서 객체나 배열을 조작할 수 있음. (오류발생 확률 높음)
// 따라서 react에서는 변경할 수 없는 값으로 객체나 배열을 복사해야함.




console.log(secondPerson); //hi (바뀐값)
console.log(thirdperson); //hello (기존값)



// ** 객체를 재할당하면 포인터를 복사하는거고 직접 복사하고싶으면 객체를 생성해서 spread연산자를 통해 객체를 전달 해줘야함.




