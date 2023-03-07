// 프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/42578

https: function solution(clothes) {
  let sample = {}

  for (let i = 0; i < clothes.length; i++) {
    if (sample[clothes[i][1]]) {
      sample[clothes[i][1]].push(clothes[i][0])
    } else {
      sample[clothes[i][1]] = [clothes[i][0]]
    }
  }

  const sampleCount = Object.keys(sample).length
  let result = sampleCount === 1 ? 0 : 1

  for (let i in sample) {
    sampleCount === 1
      ? (result += sample[i].length)
      : (result *= sample[i].length + 1)
  }

  return sampleCount === 1 ? result : result - 1
}
