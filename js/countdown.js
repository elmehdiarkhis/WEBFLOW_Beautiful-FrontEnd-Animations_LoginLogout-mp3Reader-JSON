const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date("Apr 30, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;  // en millisecondes
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    document.querySelector("#event_day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector("#event_hours").innerText = textHour > 0 ? textHour : 0;
    document.querySelector("#event_minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector("#event_sec").innerText = textSecond > 0 ? textSecond : 0;
  };
  
  // refresh the fonction each 500ms 
  setInterval(countdown, 500);