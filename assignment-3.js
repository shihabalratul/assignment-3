// Convert Kilometer to Meter.
function kilometerToMeter(num) {

	if (num >= 0) {
		var meter = num * 1000;									// Because we know 1km=1000m.
	}
	else {
		var meter = 'Error:Please input a positive number.';	// Error massage if input number is negative.
	}

	return meter;
}



// Budget calculator.
function budgetCalculator(watch, phone, laptop) {
	if (watch >= 0 && phone >= 0 && laptop >= 0) {
		var watchPrice = watch * 50;							// Calculate total price of watch.
		var phonePrice = phone * 100;							// Calculate total price of phone.
		var laptopPrice = laptop * 500;							// Calculate total price of Laptop.
		var totalPrice = watchPrice + phonePrice + laptopPrice;	// Calculate total budget.
		return totalPrice;
	}
	else {
		return "Error:Please enter positive number.";			//Error message if input number is negeative.
	}
}



// Hotel cost calculating.
function hotelCost(days) {
	var cost = 0;

	if (days >= 0) {
		if (days <= 10) {
			cost = days * 100;		// Because first 10 day its 100$ per night.
		}
		else if (days <= 20) {
			var firstTime = 10 * 100;	// Because first 10 day its 100$ per night.
			var remaining = days - 10;
			var secondTime = remaining * 80;	// Because second 10 day its 80$ per night.
			cost = firstTime + secondTime;	//Total Cost.
		}
		else {
			var firstTime = 10 * 100;		// Because first 10 day its 100$ per night.
			var secondTime = 10 * 80;		// Because second 10 day its 80$ per night.
			var remaining = days - 20;
			var thirdTime = remaining * 50;		// Because after 20 day its 50$ per night.
			cost = firstTime + secondTime + thirdTime;	//Total cost.
		}
		return cost;
	}

	else {
		return "Error:Days cannot be negative.Please enter positive value.";	//Error message if the input value is negative. 
	}
}



// Getting longest name of friends.
function megaFriend(name) {
	if (name.length > 0) {		// Check array is empty or not.
		var max = "";		// Declare max length string.
		for (var i = 0; i < name.length; i++) {
			var friendsNames = name[i];		
			if (friendsNames.length > max.length) {	// Check if friends Names length is more than maxs lenth.
				max = friendsNames;		// Assign max's value as name[i].
			}
		}
		return max;
	}
	else {
		return "Error:Please input your friends names.";	// Error message if input array is empty.
	}
}