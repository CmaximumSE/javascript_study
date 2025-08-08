function greet (){
    console.log("안녕 내 이름은 제시카야")
}

function greet(name) {
    console.log("안녕 내 이름은", name,"야")
}

function meetAt(year, mon, day){
    if(day) {
        return `${year}/${mon}/${day}`
    } else if(mon) {
        return `${year}년 ${mon}월`
    } else {
        return `${year}년`
    }
}


function findSmallestElement(arr) {
    result = arr[0]

    if(arr.length === 0){
        return 0
    } else {
        for(let i = 1; i < arr.length; i++){
            result = result <= arr[i]?result:arr[i]
        }
        return result
    }

}

// let arr = [100,200,3,0,2,1]
//
// console.log(findSmallestElement(arr))


let unit = [50000,10000,5000,1000,500,100]
function money(won) {
    for(let i=0;i<unit.length;i++){

        let num = Math.floor(won / unit[i])
        console.log(unit[i]+"X"+num)
        won = won - (unit[i]*num)

    }
}

money(12300)