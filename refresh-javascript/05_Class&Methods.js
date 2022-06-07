// es7부터는 생성자 함수를 생성하지 않고 클래스에 바로 프로퍼티를 할당할 수 있다.
// es7부터의 메소드는 arrowFunction을 사용한다.


class human{
    gender='male';

    printGender = ()=>{
        console.log(this.gender);
    }
}

class newPerson extends human{ 
    
    name = 'mike';
    gender='female';

    printName = ()=>{
        console.log(this.name);
    }
}

const person = new newPerson();
person.printName();
person.printGender(); 