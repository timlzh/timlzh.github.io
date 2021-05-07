function year(){
  var Cy = 2021;
  var sel = document.getElementsByClassName('selYear');
  var newOpt;
  for(var i = 0;i < sel.length;i++){
    for(Cy = 2021;Cy<=2099;Cy++){
      newOpt = document.createElement('OPTION');
      newOpt.text = newOpt.value = Cy;
      sel[i].options.add(newOpt,Cy-2021);  
    }
  }
}
function month(){
  var Cm = 1;
  var sel = document.getElementsByClassName('selMonth');
  var newOpt;
  for(var i = 0;i < sel.length;i++){
    for(Cm = 1;Cm<=12;Cm++){
      newOpt = document.createElement('OPTION');
      newOpt.text = newOpt.value = Cm;
      sel[i].options.add(newOpt,Cm-1);  
    }
  }
}
function hour(){
  var Cm = 1;
  var sel = document.getElementsByClassName('selHour');
  var newOpt;
  for(var i = 0;i < sel.length;i++){
    for(Cm = 1;Cm<=24;Cm++){
      newOpt = document.createElement('OPTION');
      newOpt.text = newOpt.value = Cm;
      sel[i].options.add(newOpt,Cm-1);  
    }
  }
}
function minute(){
  var Cm = 1;
  var sel = document.getElementsByClassName('selMinute');
  var newOpt;
  for(var i = 0;i < sel.length;i++){
    for(Cm = 0;Cm<=59;Cm++){
      newOpt = document.createElement('OPTION');
      newOpt.text = newOpt.value = Cm;
      sel[i].options.add(newOpt,Cm-0);  
    }
  }
}
function day(){
  var Cm = 1;
  var sel = document.getElementsByClassName('selDay');
  var newOpt;
  for(var i = 0;i < sel.length;i++){
    for(Cm = 1;Cm<=30;Cm++){
      newOpt = document.createElement('OPTION');
      newOpt.text = newOpt.value = Cm;
      sel[i].options.add(newOpt,Cm-1);  
    }
  }
}
function post(url,body){
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("POST",url,true);
  httpRequest.setRequestHeader("Content-Type","application / json; charset = utf-8");
  httpRequest.send(JSON.stringify(body));
  httpRequest.onreadystatechange = ()=>{
    if(1){
      console.log(httpRequest.responseText);
    }
  }
}
function delCron(){
  var url = "http://server.itstim.xyz:2323/v1/LuaApiCaller?qq=2985781277&funcname=DelCrons";
  var body = {};
  for(var i = 0;i <= 10;i++){ 
    body = {
      "TaskID":parseInt(i),
    }
    post(url,body);
  }
}
function getSelVal(id){
  var el = document.getElementById(id);
  var ind = el.selectedIndex;
  return el.options[ind].value;
}
function getCron(){
  var sMonth = getSelVal("sMonth");
  var eHour = getSelVal("eHour");
  var eMinute = getSelVal("eMinute");
  var sDay = parseInt(getSelVal("sDay"));
  var inter = parseInt(document.getElementById("interval").value);
  var cron = "0 " + eMinute + " " + eHour + " " + sDay + "/" + inter + " " + sMonth + "-12 ?";
  return cron;
}
function addCron(){
  var url = "http://server.itstim.xyz:2323/v1/LuaApiCaller?qq=2985781277&funcname=AddCrons"
  var body = {
    "QQ":"2985781277",
    "Sepc":getCron(),
    "FileName":"remind.lua",
    "FuncName":"ScheduleJobOne"
  }; 
  post(url,body);
}
minute();
hour();
month();
year();
day();
