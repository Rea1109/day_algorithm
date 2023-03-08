// 프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (newArr[newArr.length - 1] !== arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
