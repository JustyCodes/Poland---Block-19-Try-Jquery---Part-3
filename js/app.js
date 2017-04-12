//when show comments is clicked, toggle ul with comments
var showClickEventHandler = function (event) {
  $(this).closest('.post').find('.comments').toggle();
  event.stopPropagation();
  event.preventDefault();
};

//when add comment is clicked, show textarea
var textClickEventHandler = function (event) {
  $(this).closest('.post').find('.input').toggle();
  event.stopPropagation();
  event.preventDefault();
};

//post comment 
var commentClickEventHandler = function (event) {
    var post = $(this).closest('.post').find('.status-box').val();
    var commentList = $(this).closest('.post').find('.comments');
    $('<li>' + post + '<a href="#" class="reply">Reply</a>' + '</li>').prependTo(commentList);
    commentList.show();
    $('.status-box').val('');
    event.stopPropagation();
    event.preventDefault();
    $('.reply').on('click', replyClickEventHandler);
  };

//show reply input field
var replyClickEventHandler = function (event) {
  $('<ul><li><textarea class="reply-box" rows="2" placeholder="Write your reply here"></textarea><a href="#" class="post-reply">Reply</a></li></ul>').insertAfter($(this).closest('li'));
  $('.post-reply').on('click', postReplyClickEventHandler);
  event.stopPropagation();
  event.preventDefault();
};


//post reply
$('.post-reply').on('click', postReplyClickEventHandler);
var postReplyClickEventHandler = function (event) {
  var reply = $(this).closest('.comments').find('.reply-box').val();
  $('<li>' + reply + '</li>').appendTo($(this).closest('ul'));
  $(this).closest('.comments').find('.reply-box').parent().remove();
  event.stopPropagation();
  event.preventDefault();
};

var main = function () {
  $('.show-comments').on('click', showClickEventHandler);
  $('.btn').on('click', commentClickEventHandler);
  $('.add-comments').on('click', textClickEventHandler);
  $('.reply').on('click', replyClickEventHandler);
  
  showClickEventHandler();
  textClickEventHandler();
  commentClickEventHandler();
  replyClickEventHandler();
  postReplyClickEventHandler();
};

$(document).ready(main);