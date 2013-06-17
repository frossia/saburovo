# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


SideBar =  ->
  w_height = document.body.clientHeight
  d_height = $('.head_pic').outerHeight()
  if d_height > w_height
    $('.scroll_area').css('height', d_height)
    $('#sidebar').css('height', d_height)
    console.log 'd_h ' + d_height
  else
    $('.scroll_area').css('height', w_height)
    console.log 'w_h ' + w_height


falert = ->
  wh = $('.head_pic').outerHeight()
  console.log wh

$('.head_pic').scroll ->
  falert()
#window.onresize SideBar

#$('.head_pic').addEventListener "click", falert
#$(".head_pic").bind "resize", ->
#  alert $(".head_pic").height()
#$(".head_pic").bind "resize", ->
#  console.log "resized"
#
#$(window).resize ->
#  $(".head_pic").resize