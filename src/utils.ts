 export function calculatereadingTime(sentence: string, wpm: number) {
    const wordscount = sentence.split(/\s+/).length
    const minutes = wordscount / wpm
    const seconds = minutes * 60
    return {wordscount, 
      minutes : Number(minutes.toFixed(2)),
      seconds :Number(seconds.toFixed(2)),
      wpm}
  }