// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function doPoll(){
    $.getScript('/conductor/test.js', function(data) {
        setTimeout(doPoll, 500);
    });
   }

$(document).ready(function(){
  var editor = ace.edit("editor");
  var textarea = $('#test_body');
  editor.renderer.setShowGutter(false);
  editor.setReadOnly(true);
  textarea.hide();

  editor.setTheme("ace/theme/textmate");
  editor.getSession().setMode("ace/mode/ruby");
  editor.getSession().setValue(textarea.val());
  doPoll();
});