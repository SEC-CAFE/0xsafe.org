buildHTML = function(src) {
  var dl = $("<dl class='am-accordion-item'></dl>").appendTo($('#accordion-section'));
  var dt = $("<dt class='am-accordion-title'></dt>").appendTo(dl);

  if(src['logo']){
      $("<img class='am-circle am-img-thumbnail' style='width:40px;height:40px;margin-right: 10px;' src='"+ img_path + src['logo']+"'>").appendTo(dt);
  }else{
    $("<span class='am-circle am-img-thumbnail' style='width:40px;height:40px;margin-right: 10px;font-size: x-large;text-align: center;vertical-align: sub'>"+src['anchor'].charAt(0).toUpperCase()+"</span>").appendTo(dt);
  }
  $("<span>"+src['title']+"</span>").appendTo(dt);
  if (src['qr_img']){
    $("<span class='am-icon-qrcode am-right' style='margin-left: 10px;' img_src='"+src['qr_img']+"'></span>").appendTo(dt);
  }
  $("<a class='doc-anchor' href='#"+src['anchor']+"'>").appendTo(dt);

  var dd = $("<dd class='am-accordion-bd am-collapse'></dd>").appendTo(dl);
  var div = $("<div class='am-accordion-content'></div>").appendTo(dd);
  var lists = [
    {'key': 'home', 'name': '官网'},
    {'key': 'weibo', 'name': '新浪微博'},
    {'key': 'twitter','name': 'Twitter'},
    {'key': 'weixin', 'name': '微信公众号'},
    {'key': 'envelope','name': '邮箱地址'}
  ]

  for (span in lists){
    var key = lists[span]['key'];
    var name = lists[span]['name'];
    if (src[key+'_title'] && src[key+'_link']){
      $("<span class='am-icon-"+key+"'> "+name+"：</span>").appendTo(div);
      $("<a href='"+src[key+'_link']+"'>"+src[key+'_title']+"</a>").appendTo(div);
      $("</br>").appendTo(div);
    }
  }
};

refresh = function(data){
  $('#accordion-section').html('');
  for (src in data){
    buildHTML(data[src]);
  }
}

refresh(o_data);

qrcode_mouseover = function(e){
  var img_div = $("#wxImg")
  var image_name = $(this).attr('img_src');
  if (image_name){
    $('#img_src').attr('src', img_path + 'weixin/'+image_name);
    var x=e.pageX;
    var y=e.pageY;
    img_div.css('left', x + 'px');
    img_div.css('top', y + 'px');
    img_div.removeClass('am-hide');
  }
}

qrcode_mouseout = function(e){
  $("#wxImg").addClass('am-hide');
}

$(function(){
 //键盘按键弹起时执行
 $('#search_keyword').keyup(function(){
  var index = $.trim($('#search_keyword').val().toString());//去掉两头空格
  if(index != ''){
    index = index.toLowerCase();
    new_data = []
    $.each(o_data,function(n,src){
      if (src['title'].toLowerCase().indexOf(index) != -1){
        new_data.push(src)
      }
    })
    refresh(new_data)
    $('.am-icon-qrcode').mouseover(qrcode_mouseover);
    $('.am-icon-qrcode').mouseout(qrcode_mouseout);
    $.AMUI.accordion.init();
  }
 });
 $('.am-icon-qrcode').mouseover(qrcode_mouseover)
 $('.am-icon-qrcode').mouseout(qrcode_mouseout)

});
