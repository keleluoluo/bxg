define(['jquery','template','validate','form','dp','dpl'],function($,template){
	var obj={};
	var search=location.search;
	if(search){
		var str=search.split('?')[1];
		tmp_arr=str.split('&');
		for(var i=0;i<tmp_arr.length;i++){
			var item=tmp_arr[i];
			var arr=item.split('=');
			obj[arr[0]]=arr[1];
		}
		console.log(obj);
	}
	var html=template('tec_tmpl',{obj:obj});
	$('.body').html(html);
	if(obj.tc_id){
		$.ajax({
			url:'/api/teacher/edit',
			type:'get',
			data:{tc_id:obj.tc_id},
			success:function(data){
				if(data.code==200){
					$('#tc_name').val(data.result.tc_name);
					$('#tc_join_date').val(data.result.tc_join_date);
					$('#tc_type').val(data.result.tc_type);
					if(data.result.tc_gender==0){
						$('#nan').attr('checked','checked');
					}else{
						$('nv').attr('checked','checked');
					}
				}
			}
		})
	}
	$('form').validate({
		sendForm:false,
		onKeyup:true,
		valid:function(){
			$(this).ajaxSubmit({
				url:'/api/teacher/update',
				type:'post',
				success:function(data){
					if(data.code==200){
						alert(data.msg);
					}
				}
			})
		}else{
			$('form').validate({
				sendForm:false,
				onKeyup:true,
				valid:function(){
					$(this).ajaxSubmit({
						url:'/api/teacher/add',
						type:'post',
						success:function(data){
							if(data.code==200){
								alert(data.msg);
							}
						}
					})
				},
				description:{
					name:{
						required:'不能为空';
			}
		}
			})
		}
		
	})
})