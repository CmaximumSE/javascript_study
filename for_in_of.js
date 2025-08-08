let fruit = ['apple', 'mango', 'strawberry', 'pineapple']

let sentence = '테스트 문구'

// for ... of
// for(let item of fruit) {
//     console.log("과일 of", item)
// }
//
// for (let char of sentence) {
//     console.log("char", char)
// }


let person={
    name: '이름',
    age: 25,
    bool: true
}

// for ... in
for (let key in person){
    //console.log("key", key)
    if(key == "name"){
        console.log("name ", person[key])
    }
}