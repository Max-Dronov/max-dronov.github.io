$(function(){

$('body').append('<div class="lcr" style="display:none;width:100%;height:100%;position:fixed;top:0px;left:0px;z-index:99999;background:rgba(0,0,0,0.8);"><div class="msg" style="text-align:center;width:400px;height:300px;position:absolute;top:50%;left:50%; margin-top:-150px;margin-left:-200px; background:#fff;"><h6 style="font-size:20px; background:rgba(0,0,200,0.7); height:30px; text-align:center;color:#fff;font-family:Verdana;">Ваша заявка принята!</h6><p style="font-family:Verdana;text-align:justify; margin-top:30px; padding:10px;">Большое спасибо. В ближайшее время наш менеджер свяжется с Вами по оставленным контактным данным.</p><button style="background:rgba(0,0,200,0.7); width:200px; height:40px; margin-top:20px;border:1px solid rgba(0,0,0,0.4);color:#fff; font-family:Verdana;font-size:20px;cursor:pointer;" class="btnn">Закрыть</button></div></div>');  
$('form').submit(function(){
  var msg = $(this).serialize();
  $.ajax({
    "url" : "kws/send.php",
    "type" : "POST",
    "data": msg,
    success: function(data){
      if (data == 0){
        $('input[type="text"]').val('');
        $('.lcr').fadeIn(300);
        $('.btnn').click(function(){
          $('.lcr').fadeOut(300);
        })
      }else{
        alert('Ошибка скрипта send.php');
      }
    },
    error: function(errorMsg, stat){
      alert('Ошибка запроса');
    }
  })
  return false;
})

})