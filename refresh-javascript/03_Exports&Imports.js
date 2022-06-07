// js es6 부터는 모듈 방식의 코드를 작성할 수 있는 기능이 있어서 여러 개의 파일로 코드를 분할할 수 있음.


//1.person.js
const person = {
    name:'Hello'
}

export default person;
//default 키워드를 사용해 person함수를 내보낼 수 있음.



//2.utility.js


export const clean = ()=>{blabla};

export const baseData = 10;

//3.app.js



import person from './person.js'; 
//default export
//person이라 객체를 명명했지만 다른 이름으로 객체 선언 가능



import {baseData} from './utility.js';
import {clean} from './utility.js'; 
//named export
//utility에서는 2가지를 가져오는데 특정한 어떤 것을 정확히 가리키기 위해 중괄호를 쓴다
//export를 해줄떄 default를 해주지 않았기 때문에 {}를 씀!


//named export에서 다른 이름으로 쓰고싶을때
import {baseData as bsdata} from './utility.js';

//모든 named export를 가져와서 객체형으로 쓰고 싶을때
import * as utility from './utility.js';

utility.baseData //이런식으로 사용


