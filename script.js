class Countdown {
    constructor(nameOfHoliday, dateOfHoliday, expectedDate) {
        this.nameOfHoliday = nameOfHoliday;
        this.dateOfHoliday = dateOfHoliday;
        this.expectedDate = new Date(expectedDate).getTime();
        this.titles = {
            name: document.querySelector('.holiday__title'),
            date: document.querySelector('.holiday__date'),
        }
        this.numbers = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds'),
        }
    }

    showText() {
        this.titles.name.innerText = this.nameOfHoliday;
        this.titles.date.innerText = this.dateOfHoliday;
    }

    showCountdown() {
        const currentDate = new Date().getTime();
        const gap = this.expectedDate - currentDate;

        const seconds = Math.floor((gap / 1000) % 60);
        const minutes = Math.floor((gap / 1000 / 60) % 60);
        const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));

        this.numbers.days.innerText = String(days);
        this.numbers.hours.innerText = String(hours);
        this.numbers.minutes.innerHTML = `<span>${('' + minutes).slice(-2, -1)}</span><span>${('' + minutes).slice(-1)}</span>`;
        this.numbers.seconds.innerHTML = `<span>${('0' + seconds).slice(-2, -1)}</span><span>${('0' + seconds).slice(-1)}</span>`;
    }

    init () {
        this.showText();
        setInterval(() => {
            this.showCountdown();
        }, 1000);
    }
}

const nearestHoliday = new Countdown('Valentine\'s day', 'the 14 february', 'feb 14, 2021 00:00:00');

nearestHoliday.init();