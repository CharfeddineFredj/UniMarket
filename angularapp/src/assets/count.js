/*function countAchievementNumbers() {
  const achievementNumbers = document.querySelectorAll('.achievement-number');
  achievementNumbers.forEach((number) => {
    // const targetNumber = Number(number.innerText.replace(/[^\d]/g, ''));
    const targetNumber = Number(number.innerText.replace(/\D/g, ''));
    const duration = 3000; // animation duration in milliseconds
    const step = 100; // number of steps for the animation

    let currentNumber = 0;
    const increment = targetNumber / step;

    const interval = setInterval(() => {
      currentNumber += increment;
      number.innerText = Math.floor(currentNumber).toLocaleString();
      if (currentNumber >= targetNumber) {
        number.innerText = targetNumber.toLocaleString();
        clearInterval(interval);
      }
    }, duration / step);
  });
}

countAchievementNumbers();

//window.addEventListener('load', countAchievementNumbers);

*/