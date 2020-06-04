/*
Assignment 1: Today's Calendar
      
NAME: Edmund Leung
EMAIL: leunged@sheridancollege.ca
DATE CREATED: June 1, 2020
DESCRIPTION: This JavaScript file contains the Calendar class and various methods in the Calendar App.
*/

class Calendar {

	constructor() {
		//this.time = new Date(2020, 6, 26); //This date example was used in the assignment outline
		this.time = new Date(Date.now());
		this.year = this.time.getFullYear();
		this.month = this.time.getMonth() + 1;
		this.date = this.time.getDate();
		this.day = this.time.getDay() + 1;
	}

	getMonthString() {
		switch (this.month) {
			case 1:
				return "January";
			case 2:
				return "February";
			case 3:
				return "March";
			case 4:
				return "April";
			case 5:
				return "May";
			case 6:
				return "June";
			case 7:
				return "July";
			case 8:
				return "August";
			case 9:
				return "September";
			case 10:
				return "October";
			case 11:
				return "November";
			case 12:
				return "December";
		}
	}

	getDayString() {
		switch (this.day) {
			case 1:
				return "Sunday";
			case 2:
				return "Monday";
			case 3:
				return "Tuesday";
			case 4:
				return "Wednesday";
			case 5:
				return "Thursday";
			case 6:
				return "Friday";
			case 7:
				return "Saturday";
		}
	}

	getDayOfMonth() {
		return new Date(this.year, this.month, 0).getDate();
	}

	getFirstDayOfMonth() {
		return new Date(this.year, this.month - 1, 1).getDay() + 1;
	}

	getLastDayOfMonth() {
		return new Date(this.year, this.month, 0).getDay() + 1;
	}

	getLastDateOfPreviousMonth() {
		return new Date(this.year, this.month - 1, 0).getDate();
	}

	// Get the day (numeric) of the first date of current month
	getFirstDateOfCurrentMonth() {
		return new Date(this.year, this.month - 1, 1).getDate();
	}

}