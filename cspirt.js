const clockElement = document.getElementById('clock');
const selectTimeZona = document.getElementById('timeZona');
const local_timeZona = document.getElementById("local_timeZona")

function updateClock() {
    const now = new Date();
    const timeZona = parseInt(selectTimeZona.value, 10);
    //console.log(timeZona);
    const hours = String(now.getUTCHours() + timeZona).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");;
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    local_timeZona.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

setInterval(updateClock, 1000);
selectTimeZona.addEventListener('change', updateClock());

//  const difrent_time_UTC = new Date().getTimezoneOffset() / 60;
//  const timeZona = Intl.DateTimeFormat().resolvedOptions().timeZone;
//  const timeZona2 = new Date().DateTimeFormat().resolvedOptions().timeZone;
//  document.getElementById('clock2').textContent = timeZona2;

