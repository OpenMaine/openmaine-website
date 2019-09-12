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
      var events = response.results;
      console.log(events); 
      var Portlandindex=-1;
      var Augustindex=-1;
      var i=0;
      while (Portlandindex==-1 || Augustindex==-1 && i<events.length){
        if(events[i].venue != undefined){
          if(events[i].venue.city === 'Portland'){
            Portlandindex=i;
          }
          else if(events[i].venue.city === 'Augusta'){
            Augustindex=i;
          }
        }
        i++;
      }
     
          var utcSeconds = events[Portlandindex].time;
          var Ud = new Date(utcSeconds);
          var d = Ud.toUTCString(utcSeconds);
          var date = moment(d).format("lll");
          var venue = events[Portlandindex].venue.name;
          var location = events[Portlandindex].venue.address_1;
          document.getElementById('day').innerHTML = date;
          document.getElementById('venue').innerHTML = venue;
          document.getElementById('location').innerHTML = location;

        
          var utcSeconds = events[Augustindex].time;
          var Ud = new Date(utcSeconds);
          var d = Ud.toUTCString(utcSeconds);
          var Adate = moment(d).format("lll");
          var Avenue = events[Augustindex].venue.name;
          var Alocation = events[Augustindex].venue.address_1;
          document.getElementById('Aday').innerHTML = Adate;
          document.getElementById('Avenue').innerHTML = Avenue;
          document.getElementById('Alocation').innerHTML = Alocation;
        
        
      }
    
  });
}


var data = httpGet("https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=OpenMaine&page=20&callback=?");

