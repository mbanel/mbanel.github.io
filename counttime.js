var zero = function(element) {
	if(element<10) return "0"+element;
	return element;
}
function countDate() {
	var dateToday = new Date();
	var wedYear = 2018;
	var wedMonth = 8;
	var wedDay = 18;
	var wedHour = 16;
	var wedMin = 30;
	var weddingDate = new Date(wedYear, wedMonth-1,wedDay,wedHour,wedMin);
	var msInDay = 24*3600*1000;
	var dateDiff = weddingDate.getTime()-dateToday.getTime();
	
	var xDays = dateDiff/msInDay;
	var days = Math.floor(xDays);
	var daysFix = Math.max(1,days);
	
	var xHours = (xDays%daysFix)*24;
	var hours = Math.floor(xHours);
	
	var xMins = (xHours-hours)*60;
	var mins = Math.floor(xMins);
	
	var secs = Math.floor((xMins-mins)*60);
	
	var divText = days+" days &</br>"+hours+":"+zero(mins)+":"+zero(secs)+"</br>";
	//var divText = "hehe";
	var element = document.getElementById('time');
	if(dateDiff<0) {
		element.innerHTML = "NULL!!!";
	}
	else {
		element.innerHTML = divText;
		setTimeout(function() {
			countDate()
		}, 1000);
	}
}