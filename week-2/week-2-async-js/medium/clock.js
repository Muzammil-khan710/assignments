const count = 0;

function updateClock() {
  const time = new Date();

  const hours24 = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const hours24Format = `${hours24}:${minutes}:${seconds}`
  const hours12Format = `${hours24>12 ? hours24 % 12 || 12 : hours24}:${minutes}:${seconds}:${hours24>12 ? 'PM' : 'AM'}`
  console.log(hours12Format);
}

setInterval(updateClock, 1000);