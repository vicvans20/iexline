$(document).ready(function(){
var container = $('<div class="console">');
$('#wrapper').append(container);
var controller = container.console({
  promptLabel: 'Demo> ',
  commandValidate:function(line){
    if (line == "") return false;
    else return true;
  },
  commandHandle:function(line){
      return [{msg:"=> [12,42]",
               className:"jquery-console-message-value"},
              {msg:":: [a]",
               className:"jquery-console-message-type"}]
  },
  autofocus:true,
  animateScroll:true,
  promptHistory:true,
  welcomeMessage: "Elixir Interactive Console!",
  charInsertTrigger:function(keycode,line){
     // Let you type until you press a-z
     // Never allow zero.
     return !line.match(/[a-z]+/) && keycode != '0'.charCodeAt(0);
  }
});
});