

  //定义模块
define(['jquery','cookie','template','nprogress'],function($,mm,template){
// 判断当前cookie中有没有PHPSESSID,如果没有则跳转到登陆页面http:/Admin/index.php/index/login
    if(!$.cookie('PHPSESSID')){
            location.href='/Admin/index.php/index/login';
    }
// ------读取用户信息，并添加到dom中
  // 读取当前的cookie：userinfo 把里面的用户信息显示出来  
      console.log($.cookie('userinfo'));
      var result=$.cookie('userinfo') && JSON.parse($.cookie('userinfo'));
      // if(!result){return}
      var html=template('tmpl',result);  
      // console.log(html);
      $('.aside .profile').html(html);

      $('#signout').on('click',function(){
        $.ajax({
          url:'/api/logout',
          type:'post',
          success:function(data){
            console.log(data);
            if(data.code==200){
              location.href='/Admin/index.php/index/login';
            }
          }
        })
      })
     $(document).ajaxStart(function () {
        NProgress.start()
      })
      $(document).ajaxStop(function(){
        NProgress.done()
      })
})