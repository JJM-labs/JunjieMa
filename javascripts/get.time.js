function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timezoneOffset = now.getTimezoneOffset();
    const offsetHours = String(Math.abs(Math.floor(timezoneOffset / 60))).padStart(2, '0');
    const offsetMinutes = String(Math.abs(timezoneOffset % 60)).padStart(2, '0');
    const offsetSign = timezoneOffset > 0 ? '-' : '+';
    const formattedTime = `${hours}:${minutes} (UTC ${offsetSign}${offsetHours}:${offsetMinutes})`;
    document.getElementById('time').textContent = formattedTime;
  }
  setInterval(updateTime, 60000);
  updateTime();