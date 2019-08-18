function httpGet(theUrl)
{
  $.ajax({
    url: theUrl,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      format: "json"
    },
    success: function(response) {
      var events = response.data;
      console.log(events); 

      for(i=0;i<=events.length;i++){
        if(events[i].venue.city === 'Augusta') {
          var d = events[i].local_date;
          //var date = new Date(d);
          var Adate = moment(d, "YYYY-MM-DD");
          var t = events[i].local_time;
          var Atime = moment(t, "hh:mm");
          var Avenue = events[i].venue.name;
          var Alocation = events[i].venue.address_1;
          console.log(date);
          //document.getElementById('day').innerHTML = date.toDateString("DD-MM-YYYY");
          document.getElementById('Aday').innerHTML = Adate.format("ddd, MMM. DD YYYY");
          document.getElementById('Atime').innerHTML = Atime.format("h:mm a");
          document.getElementById('Avenue').innerHTML = Avenue;
          document.getElementById('Alocation').innerHTML = Alocation;
        }

        else if(events[i].venue.city === 'Portland') {
          var d = events[i].local_date;
          //var date = new Date(d);
          var date = moment(d, "YYYY-MM-DD");
          var t = events[i].local_time;
          var time = moment(t, "hh:mm");
          var venue = events[i].venue.name;
          var location = events[i].venue.address_1;
          console.log(date);
          //document.getElementById('day').innerHTML = date.toDateString("DD-MM-YYYY");
          document.getElementById('day').innerHTML = date.format("ddd, MMM. DD YYYY");
          document.getElementById('time').innerHTML = time.format("h:mm a");
          document.getElementById('venue').innerHTML = venue;
          document.getElementById('location').innerHTML = location;
        }
        
      }
    }
  });
}

var data = httpGet("https://api.meetup.com/OpenMaine/events?&sign=true&photo-host=public&page=20&key=22296f2422622a571d505901f421542");
//var obj = JSON.parse(this.response);

//document.getElementById('info').innerHTML = obj.local_date;
//$('#info').html(data);
