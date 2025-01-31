import { Component, AfterViewInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  private intervalId: any;

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    achievementNumbers.forEach((number) => {
      const targetNumber = Number(number.textContent?.replace(/\D/g, ''));
      const duration = 7000; // animation duration in milliseconds
      const step = 100; // number of steps for the animation

      let currentNumber = 0;
      const increment = targetNumber / step;

      const interval = setInterval(() => {
        currentNumber += increment;
        number.textContent = Math.floor(currentNumber).toLocaleString();
        if (currentNumber >= targetNumber) {
          number.textContent = "+" + targetNumber.toLocaleString();
          clearInterval(interval);
        }
      }, duration / step);
    });
  }


}
