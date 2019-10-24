function epicpancake(){
	const date =  new Date();
	const day = date.getDay();
	// console.log(day);
	//  console.log(date);
	 if(day == 3) {
		document.getElementsByClassName("pancakes").style.visibility ="visible";
	 }
	// }else{
	// 	document.getElementsByClassName("pancakes").style.display ="none";
	// }
	
}

