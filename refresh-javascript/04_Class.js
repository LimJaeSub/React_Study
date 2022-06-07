// 클래스 정의
// 클래스는 객체를 위한 핵심 기능

//선언부
// class person{
//     name='hello' //프로퍼티
//     call = ()=>{} //메소드
// }


// //사용
// const usePerson = new person();
// usePerson.call();
// console.log(usePerson.name);



class human{
    constructor(){
        this.gender='male';
    }

    printGender(){
        console.log(this.gender);
    }
}

class newPerson extends human{ //human을 상속 했으므로 human에 있는 메소드와 프로퍼티를 newperson에서도 사용 가능
    constructor(){ //생성자 함수, 클래스의 객체를 생성할 때마다 실행됨
        super();
        this.name = 'mike';
    }

    printName(){
        console.log(this.name);
    }
}

const person = new newPerson();
person.printName();
person.printGender(); // human에있는 메소드를 사용