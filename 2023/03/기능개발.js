//프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  let deploy = [...progresses]
  let count = 0
  let result = []

  deploy = deploy.map((job, idx) => job + speeds[idx])

  deploy

  return deploy
}
