//configuration
var categories = {
    "Pools": {
      "sensors": ["780391746", "780391500", "780391745", "780391751", "780391753", "780391474", "780391724", "780391513", "780391493", "780391757", "780391512", "780391761", "780391479", "780391495", "780391482"],
      "status": "2"
    },
    "Stratums": {
      "sensors": ["780394336", "780394354", "780394350", "780394382", "780394385", "780394391", "780394393", "780394400", "780394413", "780394414", "780394415", "780394416", "780394417", "780394418", "780394419", "780394420", "780394421", "780394422", "780394427", "780394428", "780394430", "780394432", "780394434", "780394437", "780394439", "780394440", "780394441", "780394442"],
      "status": "2"
    }
}

//init variables
var monitorsData = []
var operational1 = true;
var operational2 = true;
var operationalTextPool = '';
var operationalTextStratum = '';
var html = '';
var element = '';
var eventsToday = false;
var todayLogs = [];
var oldLogs = [];
var workingDate = new Date();
//run on API return
function jsonUptimeRobotApi(data) {
   //sort monitors into catergories and determine if all operational or not
   data.monitors.monitor.forEach(function(monitor) {
       if (categories.Pools.sensors.indexOf(monitor.id) >= 0) {
           monitor.category = "Pools";
           if (monitor.status == "8" || monitor.status == "9") {
             operational1 = false;
             categories.Pools.status = "1";
         }
       }
       if (categories.Stratums.sensors.indexOf(monitor.id) >= 0) {
           monitor.category = "Stratums";
           if (monitor.status == "8" || monitor.status == "9") {
             operational2 = false;
             categories.Stratums.status = "1";
         }
       }
       monitorsData.push(monitor);
   });

   //set operational header
   if (operational1) {
       operationalTextPool = '<div class="alert alert-success">All Front-Ends are operational.<div class="shuttle" style="font-size:40px;display: block;text-align: center;"><i class="fab fa-gripfire fa-rotate-270"></i><i class="fas fa-space-shuttle"></i></div></div>';
   } else {
       operationalTextPool = '<div class="alert alert-danger">Not all Front-Ends are operational.<br><span class="fa-stack fa-lg"><i class="fas fa-space-shuttle fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x"></i></span></div></div>';
   }
   $(".section-status-pool").replaceWith(operationalTextPool);
   if (operational2) {
       operationalTextStratum = '<div class="alert alert-success">All Stratums are operational.<div class="shuttle" style="font-size:40px;display: block;text-align: center;"><i style="/*! font-size: 20px; */" class="fab fa-gripfire fa-rotate-270"></i><i class="fas fa-space-shuttle"></i></div></div>';
   } else {
       operationalTextStratum = '<div class="alert alert-danger">Not all Stratums are operational.<br><span class="fa-stack fa-lg"><i class="fas fa-space-shuttle fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x"></i></span></div></div>';
   }
   $(".section-status-stratum").replaceWith(operationalTextStratum);

   switch (categories.Pools.status) {
     case "1":
       $("poolStatus").replaceWith('<i class="fas fa-circle text-component-1 reds"></i>');
       break;
     case "2":
       $("poolStatus").replaceWith('<i class="fas fa-circle text-component-1 greens"></i>');
       break;
    }

    switch (categories.Stratums.status) {
     case "1":
       $("stratumStatus").replaceWith('<i class="fas fa-circle text-component-1 reds"></i>');
       break;
     case "2":
       $("stratumStatus").replaceWith('<i class="fas fa-circle text-component-1 greens"></i>');
       break;
    }

    //get pools stats froms apis
    monitorsData.forEach(function(monitor) {
      var monitorUrl = monitor.url;
      var apiUrl = 'api/status';
      var dataType = 'application/json';
      if (monitorUrl.includes('http')) {
        if (monitorUrl.includes('yiimp.eu')){
          monitorUrl = 'http://api.yiimp.eu/';
          apiUrl = 'api/status';
        } else if (monitorUrl.includes('suprnova.com')) {
          monitorUrl = 'https://rvn.suprnova.cc/';
          apiUrl = 'index.php?page=api&action=public';
        } else if (monitorUrl.includes('mineit.virtopia') || monitorUrl.includes('rvn.coinblockers')) {
          apiUrl = 'api/stats';
        } else if (monitorUrl.includes('ominousnetwork')) {
          monitorUrl = 'http://pool.ominousnetwork.com/';
        } else if (monitorUrl.includes('pickaxepro')){
          dataType = 'text/html'
        }
        var getUrl = monitorUrl + apiUrl;
        var grabData
        $.ajax({
             url: getUrl,
             context: document.body,
             dataType: 'jsonp',
             success: function (data){
               console.log('Grabbed: ' + data);
             }
         });
      }
    });

   //determine status of each monitor
   monitorsData.forEach(function(monitor) {
       var statusText = '';
       switch (monitor.status) {
           case "0":
               statusText = '<small class="text-component-1 blues">Paused <i class="fas fa-pause-circle text-component-1 reds"></i></small>';
               break;
           case "1":
               statusText = '<small class="text-component-1 yellows">Checking... <i class="fas fa-spinner text-component-1 yellows"></i></small>';
               break;
           case "2":
               statusText = '<small class="text-component-1 greens">Operational <i class="fas fa-circle text-component-1 greens"></i></small>';
               break;
           case "8":
               statusText = '<small class="text-component-1 reds">Not Operational <i class="fas fa-circle text-component-1 reds"></i></small>';
               operational3 = false;
               break;
           case "9":

               statusText = '<small class="text-component-1 reds">Not Operational <i class="fas fa-circle text-component-1 reds"></i></small>';
               operational3 = false;
               break;
           default:
               statusText = '<small class="text-component-1 reds">Not Operational <i class="fas fa-circle text-component-1 reds"></i></small>';
               operational3 = false;
               break;
       }
       //add monitor status to page
       switch (monitor.category) {
           case "Pools":
               html = '<li class="list-group-item sub-component"><a href="' + monitor.url + '" target="_blank" class="links">' + monitor.friendlyname + '</a><div class="pull-right">' + statusText + '</div></li>';
               element = 'poolCat';
               break;
           case "Stratums":
               html = '<li class="list-group-item sub-component">' + monitor.friendlyname + '<div class="pull-right">' + statusText + '</div></li>';
               element = 'stratumCat';
               break;
       }
       $(element).append(html);
   });
}

//get data from api and start
$(document).ready(function() {
  getStatus();
    setInterval(function(){
      $('.sub-component').remove();
      monitorsData = []
      operational1 = true;
      operational2 = true;
      operationalTextPool = '';
      operationalTextStratum = '';
      html = '';
      element = '';
      eventsToday = false;
      todayLogs = [];
      oldLogs = [];
      workingDate = new Date();
      getStatus();
  }, 300000);
});

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function getStatus() {
  var url = "https://api.uptimerobot.com/getMonitors?apiKey=KEYYYYYYYYYYYYYYYYY&customUptimeRatio=1-7-30-365&format=json&logs=1";
  var result = '';
   $.ajax({
       url: url,
       context: document.body,
       dataType: 'jsonp',
       success: function (data){
         result = data;
       }
   });
   return result;
 }
