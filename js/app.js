//when show comments is clicked, toggle ul with comments
var showClickEventHandler = function (event) {
  $(this).closest('.post').find('.comments').toggle();
  event.stopPropagation();
};

//when add comment is clicked, show textarea
var textClickEventHandler = function (event) {
  $(this).closest('.post').find('.input').toggle();
  event.stopPropagation();
};

//post comment 
var commentClickEventHandler = function (event) {
    var post = $(this).closest('.post').find('.status-box').val();
    var commentList = $(this).closest('.post').find('.comments');
    $('<li>' + post + '<button class="reply">Reply</button>' + '</li>').prependTo(commentList);
    commentList.show();
    $('.status-box').val('');
    event.stopPropagation();
    $('.reply').on('click', replyClickEventHandler);
  };

//show reply input field
var replyClickEventHandler = function (event) {
  $('<ul><li><textarea class="reply-box" rows="2" placeholder="Write your reply here"></textarea><button class="post-reply">Reply</button></li></ul>').insertAfter($(this).closest('li'));
  $('.post-reply').on('click', postReplyClickEventHandler);
  event.stopPropagation();
};


//post reply
$('.post-reply').on('click', postReplyClickEventHandler);
var postReplyClickEventHandler = function (event) {
  var reply = $(this).closest('.comments').find('.reply-box').val();
  $('<li>' + reply + '</li>').appendTo($(this).closest('ul'));
  $(this).closest('.comments').find('.reply-box').parent().remove();
  event.stopPropagation();
};

var main = function () {
  $('.show-comments').on('click', showClickEventHandler);
  $('.btn').on('click', commentClickEventHandler);
  $('.add-comments').on('click', textClickEventHandler);
  $('.reply').on('click', replyClickEventHandler);
};

$(document).ready(main);