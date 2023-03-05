// 프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let count = 0

  let wall = new Array(n).fill(0).map((_, idx) => (section.includes(idx + 1) ? false : true))

  for (let i = 0; i < n; i++) {
    if (!wall[i]) {
      let mSize = m
      let idx = i

      while (mSize !== 0) {
        wall[idx] = true
        mSize--
        idx++
      }

      count++
    }
  }

  return count
}
