const DurationToMillisAndSec = (millis) => {
    if (!!millis) {
        let minutes = Math.floor(millis / 60000)
        let seconds = ((millis % 60000) / 1000).toFixed(0)
    
        return (
          seconds === 60
            ? `${minutes + 1}:00`
            : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
        )
      }    
      return '0'
}

export default DurationToMillisAndSec;
