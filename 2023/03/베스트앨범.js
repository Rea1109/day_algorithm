// ing
function solution(genres, plays) {
  let playList = {}

  for (let i = 0; i < genres.length; i++) {
    let genre = genres[i]
    playList[genre]
      ? playList[genre].push(plays[i])
      : (playList[genre] = [plays[i]])
  }

  console.log(playList)
}
