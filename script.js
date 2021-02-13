const today = new Date();
const currentYear = today.getFullYear();
const holidays = {
    valentinesDay: {
        name: 'Valentine\'s Day',
        dateTitle: 'the 14 february',
        date: `${currentYear}-02-14`
    },
    womensDay: {
        name: 'Women\'s Day',
        dateTitle: 'the 8 march',
        date: `${currentYear}-03-08`
    },
    victoryDay : {
        name: 'Victory Day ',
        dateTitle: 'the 9 may',
        date: `${currentYear}-05-09`
    },
    kupalaNight : {
        name: 'Kupala Night ',
        dateTitle: 'the 24 June',
        date: `${currentYear}-06-24`
    },
    newYear: {
        name: 'New Year',
        dateTitle: 'the 1 january',
        date: `${currentYear + 1}-01-01`
    }
}

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
        const today = new Date();
        const currentUTCTime = today.getTime();
        const gap = this.expectedDate - currentUTCTime;

        const seconds = Math.floor((gap / 1000) % 60);
        const minutes = Math.floor((gap / 1000 / 60) % 60);
        const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
        const days = Math.floor(gap / (1000 * 60 * 60 * 24));

        this.numbers.days.innerText = String(days);
        this.numbers.hours.innerText = String(hours);
        this.numbers.minutes.innerHTML = `<span>${('0' + minutes).slice(-2, -1)}</span><span>${('0' + minutes).slice(-1)}</span>`;
        this.numbers.seconds.innerHTML = `<span>${('0' + seconds).slice(-2, -1)}</span><span>${('0' + seconds).slice(-1)}</span>`;
    }

    init () {
        this.showText();
        setInterval(() => {
            this.showCountdown();
        }, 1000);
    }
}

const nearestHoliday = new Countdown(holidays.valentinesDay.name, holidays.valentinesDay.dateTitle, holidays.valentinesDay.date);

nearestHoliday.init();