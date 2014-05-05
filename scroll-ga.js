//Capture Analytics Events - Adam Moore
//Scrolling
var wp = new Array(false, false, false, false, false);
window.onscroll = scroll;

function scroll(){
	if(wp[0] == false){
	 wp[0] = true;
	 _gaq.push(['_trackEvent', 'scroll', 'start', 'Page Name', null, true]);
	} else {
	
		var scrollPercent = Math.floor(((window.scrollY + window.innerHeight)/$(document).height())*100);
		var wayPoint  = 0;
		if(scrollPercent >= 25){ wayPoint = 25; }
		if(scrollPercent >= 50){ wayPoint = 50; }
		if(scrollPercent >= 75){ wayPoint = 75;	}
		if(scrollPercent >= 99){ wayPoint = 100;}
		
		switch(wayPoint){
			case 25:if(wp[1] == false){_gaq.push(['_trackEvent', 'scroll', '25%', 'Page Name', null, true]);
			wp[1] = true;}
			break;
			case 50:if(wp[2] == false){_gaq.push(['_trackEvent', 'scroll', '50%', 'Page Name', null, true]);
			wp[2] = true;}
			break;
			case 75:if(wp[3] == false){_gaq.push(['_trackEvent', 'scroll', '75%', 'Page Name', null, true]);
			wp[3] = true;}
			break;
			case 100:if(wp[4] == false){_gaq.push(['_trackEvent', 'scroll', 'end', 'Page Name', null, true]);
			wp[4] = true;}
			break;
		}
	}
}
