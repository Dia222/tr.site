function clock() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
        
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    
    date_time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("doc_time").innerHTML = date_time;
    setInterval("clock()", 1000);
    return date_time;
    }
    
    clock()
    
    