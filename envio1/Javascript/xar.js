/*var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one:1, two:2, three:3, four:4, five:5 };

jQuery.each(arr, function() {
  $("#" + this).text("My id is " + this + ".");
  return (this != "four"); // will stop running to skip "five"
});

jQuery.each(obj, function(i, val) {
  $("#" + i).append(document.createTextNode(" - " + val));
});*/
var data = [ 
  {"Id": 10004, "PageName": "club"}, 
  {"Id": 10040, "PageName": "qaz"}, 
  {"Id": 10059, "PageName": "jjjjjjj"}
 ];
 
 $.each(data, function(i, item) {
     alert(data[i].PageName);
 });
 
 $.each(data, function(i, item) {
     alert(item.PageName);
 });