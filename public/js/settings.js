define(['jquery','template','validate','dp','dpl','region','ckeditor','form'],function($,template){
	$.ajax({
		url:'/api/teacher/profile',
		type:'get',
		success:function(data){
			if(data.code==200){
				var html=template('set_tmpl',data.result);
				$('.settings').html(html);
				$('form').validate({
					sendForm:false,//禁止提交
					onKeyup:true,
					valid:function(){
						$(this).ajaxSubmit({
							url:'/api/teacher/modify',
							type:'post',
							data:{
								tc_id:data.result.tc_id;
							},
							success:function(data){
								if(data.code==200){
									alert(data.msg);
							}
						}
						
					})
			
			},
			description:{
				name:{
					required:'姓名不能为空';
				}
			}
		})
				$('.pcd').region({
					url:'/Admin/public/js/region.json';
				})
				CKEDITOR.replace('tmp');

	})
})