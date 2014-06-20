var viewers;
var username = "gamej06";
var site_url = "http://www.twitch.tv/gamej06/";
var poll_interval = 3000;
$(document).ready(function() {
    $('#viewers').append(viewers);

    setInterval(function(){
        $.ajax({
            url: site_url + "auto_update/broadcast/" + username,
            type: "GET",
            dataType: "json",
            cache: false,
            success: function(data) {
              if (data == null) return;
              var update_viewers = data['viewers'];
              console.log(update_viewers);
              $('#viewers').html(update_viewers);
            }
          });
    }, poll_interval);
});