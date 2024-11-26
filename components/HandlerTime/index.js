class HandlerTime {
  static formatTime(time) {
    return time.padStart(2, "0");
  }

  static compareTimes(firstTime, secondTime) {
    let differents = [];
    for (let i = 0; i < firstTime.length; i++) {
      for (let j = 0; j < firstTime[i].length; j++) {
        if (firstTime[i][j] !== secondTime[i][j]) differents.push([i, j]);
      }
    }

    return differents;
  }
}

export default HandlerTime;
