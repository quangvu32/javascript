function tong(){
    let res = 0
    for (let i = 1; i <= 100; i++) {
        res += i
    }
    console.log(`Tong tu 1 den 100 la: ${res} \n`)
}

function average(){
    let arr = [1,2,3,4,5]
    let res = 0
    res = arr.reduce((a,b) => a + b, 0)/arr.length
    console.log(`Trung binh cong cua mang [1,2,3,4,5] la: ${res} \n`)
}

function palindrome(str){
    let str1 = str.split('').reverse().join('')
    if(str === str1){
        console.log(`${str} la palindrome \n`)
    }
    else{
        console.log(`${str} ko la palindrome \n`)
    }
}

let student = {
    name: 'Nguyen Quang Vu',
    age: 20,
    averageScore: 8.0
}

function printStudentInfo(student){
    console.log(`Name: ${student.name}`)
    console.log(`Age: ${student.age}`)
    console.log(`Average Score: ${student.averageScore}`)
}

tong()
average()
palindrome('racecar')
printStudentInfo(student)
