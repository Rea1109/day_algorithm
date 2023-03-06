// 프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/42576#

function solution(participant, completion) {
  let entry = {}

  completion.forEach(el => {
    entry[el] ? (entry[el] = ++entry[el]) : (entry[el] = 1)
  })

  for (let i = 0; i < participant.length; i++) {
    if (!entry[participant[i]]) {
      return participant[i]
    }
    entry[participant[i]] = --entry[participant[i]]
  }
}
