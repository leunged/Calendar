/*
Assignment 1: Today's Calendar
      
NAME: Edmund Leung
EMAIL: leunged@sheridancollege.ca
DATE CREATED: June 1, 2020
DESCRIPTION: This JavaScript file contains an instance of the Calendar class 
and updates the content dynamically in the Calendar App.
*/

let calendar = new Calendar();
let monthTitle = document.querySelector(".month-title");
let dateBlock = document.querySelector(".date-block");

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

// Dynamically display the current month and year in the month header
monthTitle.innerHTML = calendar.getMonthString() + " " + calendar.year;

// IIFE to dynamically display dates of previous month
(function () {
	let lastDayOfPrevMonth = calendar.getLastDateOfPreviousMonth();
	let firstDayOfMonth = calendar.getFirstDayOfMonth();

	// Loop to display dates of previous month until Sunday
	for (let day = lastDayOfPrevMonth; firstDayOfMonth - 1 >= 1; day--, firstDayOfMonth--) {

		// If the value is 2, it displays the abbreviated month name declared in the array above
		if (firstDayOfMonth == 2) {

			// This displays the month name of the previous month on first date
			dateBlock.insertAdjacentHTML("afterbegin", `<div class="day-item"><p>${monthNames[calendar.month - 2]} ${day}</p></div>`);
		} else {
			dateBlock.insertAdjacentHTML("afterbegin", `<div class="day-item"><p>${day}</p></div>`);
		}
	}
})();

// IIFE to dynamically display dates of current month
(function () {
	let firstDate = calendar.getFirstDateOfCurrentMonth();
	let totalDays = calendar.getDayOfMonth();

	for (let day = firstDate; day <= totalDays; day++) {

		// Conditions to check which div class (with different CSS styles) to add depending on the date
		if (day == calendar.date && day == 1) {

			// Displays month name and highlights the first date 
			dateBlock.insertAdjacentHTML("beforeend", `<div class="day-item current-day"><p>${calendar.getMonthString()} ${day}</p></div>`);
		} else if (day == calendar.date) {

			// Highlights the current date
			dateBlock.insertAdjacentHTML("beforeend", `<div class="day-item current-day"><p>${day}</p></div>`);
		} else if (day == 1) {

			// Displays the month name for first date
			dateBlock.insertAdjacentHTML("beforeend", `<div class="day-item current-month"><p>${calendar.getMonthString()} ${day}</p></div>`);
		} else {

			// Displays normal date in current month
			dateBlock.insertAdjacentHTML("beforeend", `<div class="day-item current-month"><p>${day}</p></div>`);
		}
	}
})();

// IIFE to dynamically display dates of next month
(function () {
	let firstDate = calendar.getFirstDateOfCurrentMonth();
	let numOfDays = document.getElementsByClassName("day-item");

	// Displays the dates of next month until 42 date blocks are present
	for (let day = firstDate; numOfDays.length < 42; day++, numOfDays.length++) {
		if (day == 1) {

			// Displays the month name of next month on first date
			dateBlock.insertAdjacentHTML("beforeend", `<div class="day-item"><p>${monthNames[calendar.month]} ${day}</p></div>`);
		} else {
			dateBlock.insertAdjacentHTML("beforeend", `<div class="day-item"><p>${day}</p></div>`);
		}
	}
})();