const today = new Date();
const currentYear = today.getFullYear();
const holidays = {
    valentinesDay: {
        name: 'Valentine\'s Day',
        dateTitle: 'the 14 february',
        date: `${currentYear}-02-14 00:00:00`,
        image: 'valentines-day.jpg'
    },
    movingToAlmaty: {
        name: 'moving to Almaty',
        dateTitle: 'the 3 march',
        date: `${currentYear}-03-03 00:00:00`,
        image: 'move-to-almaty.jpg'
    },
    womensDay: {
        name: 'Women\'s Day',
        dateTitle: 'the 8 march',
        date: `${currentYear}-03-08 00:00:00`,
        image: 'womens-day.jpg'
    },
    saintPatricksDay: {
        name: 'Saint Patrick\'s Day',
        dateTitle: 'the 17 march',
        date: `${currentYear}-03-17 00:00:00`,
        image: 'saint-patrick.jpg'
    },
    victoryDay : {
        name: 'Victory Day ',
        dateTitle: 'the 9 may',
        date: `${currentYear}-05-09 00:00:00`,
        image: 'victory-day.jpg'
    },
    kupalaNight : {
        name: 'Kupala Night ',
        dateTitle: 'the 24 June',
        date: `${currentYear}-06-24 00:00:00`,
        image: 'kupala-night.jpg'
    },
    watermelonDay : {
        name: 'Watermelon Day',
        dateTitle: 'the 3 August',
        date: `${currentYear}-08-03 00:00:00`,
        image: 'watermelon-day.jpg'
    },
    knowledgeDay : {
        name: 'Knowledge Day',
        dateTitle: 'the 1 September',
        date: `${currentYear}-09-01 00:00:00`,
        image: 'knowledge-day.jpg'
    },
    halloween : {
        name: 'Halloween',
        dateTitle: 'the 31 October',
        date: `${currentYear}-10-31 00:00:00`,
        image: 'halloween.jpg'
    },
    newYear: {
        name: 'New Year',
        dateTitle: 'the 1 january',
        date: `${currentYear + 1}-01-01 00:00:00`,
        image: 'new-year.jpg'
    }
}

const closestHoliday = Object.values(holidays).reduce((previousDate, currentDate) => {
    const holidayDate = new Date(currentDate.date);
    const closestDate = (previousDate) ? new Date(previousDate.date) : null;
    const futureDate = today < holidayDate;

    return (!previousDate && futureDate || (closestDate && futureDate && Math.abs(today - holidayDate) < Math.abs(today - closestDate))) ? currentDate : previousDate;
}, null);

class Countdown {
    constructor(nameOfHoliday, dateOfHoliday, expectedDate, bgImage) {
        this.nameOfHoliday = nameOfHoliday;
        this.dateOfHoliday = dateOfHoliday;
        this.expectedDate = new Date(expectedDate).getTime();
        this.bgImage = bgImage;
        this.content = {
            name: document.querySelector('.holiday__title'),
            date: document.querySelector('.holiday__date'),
            image: document.querySelector('.image')
        }
        this.clockNumbers = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        }
    }

    showContent() {
        this.content.name.innerText = this.nameOfHoliday;
        this.content.date.innerText = this.dateOfHoliday;
        (!this.bgImage) ? this.bgImage = 'default-bg.jpg' : this.bgImage;
        this.content.image.style.backgroundImage = `url("images/${this.bgImage}")`;
    }

    showCountdown() {
        const today = new Date().getTime();
        const gap = this.expectedDate - today;

        const days = Math.floor(gap / (1000 * 60 * 60 * 24));
        const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((gap % (1000 * 60)) / 1000);

        this.clockNumbers.days.innerText = String(days);
        this.clockNumbers.hours.innerText = String(hours);
        this.clockNumbers.minutes.innerHTML = `<span>${('0' + minutes).slice(-2, -1)}</span><span>${('0' + minutes).slice(-1)}</span>`;
        this.clockNumbers.seconds.innerHTML = `<span>${('0' + seconds).slice(-2, -1)}</span><span>${('0' + seconds).slice(-1)}</span>`;
    }

    init () {
        this.showContent();
        setInterval(() => {
            this.showCountdown();
        }, 1000);
    }
}


const countdownOfClosestHoliday = new Countdown(closestHoliday.name, closestHoliday.dateTitle, closestHoliday.date, closestHoliday.image);
countdownOfClosestHoliday.init();