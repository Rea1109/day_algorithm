// https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s) {
  let result = []

  s.split('').forEach(el => {
    if (result[result.length - 1] === '(' && el === ')') {
      result.pop()
    } else {
      result.push(el)
    }
  })

  return !result.length
}
