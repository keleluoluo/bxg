 define(['jquery','cookie'],function($){
       $('#loginform').on('submit',function(e){
            e.preventDefault();
            var mydata=$(this).serialize();
            // mydata = {tc_name:'前端学院',tc_pass:'123456'};
            $.ajax({
                url:'/api/login',
                type:'post',
                data:mydata,
                success:function(data){
                    if(data.code===200){
                        alert(data.msg);

                        // 为了让跳转后的页面能够读取到用户的头像及用户名，我们把当前页面获取到的数据保存到cookie中 data.result
                        $.cookie('userinfo',JSON.stringify(data.result),{path:'/'});
                        location.href='http://www.study.com/Admin/index.php/index/index';
                    }
                }
            })
        })
})