 function data()
 {
    var data = new Date();
    var dzien = data.getDate();
    var dzienN = data.getDay();
    var miesiac = data.getMonth();
    var rok = data.getFullYear();
                      
    var dni = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
    var miesiace = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
           
    var pokazDate = dni[dzienN] + ', ' + dzien + "<br />" + miesiace[miesiac] + ' ' + rok;
	document.getElementById("data").innerHTML = pokazDate;
           
}        