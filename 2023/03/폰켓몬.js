// 프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let poketmonType = new Set(nums)
  return poketmonType.size > nums.length / 2
    ? nums.length / 2
    : poketmonType.size
}
