define(['jquery','template','nprogress','bootstrap'],function($,template,NProgress){
	//1.1发请求
	$.get('/api/teacher',function(data){
		console.log(data.code);
		if(data.code==200){
			//1.2把请求得到的数据放到页面中去
			var html=template('tpl_data',{list:data.result});
			//1.3把最终的html字符串添加到dom中
			$('#tec_list tbody').html(html);
		}
	})
	//2.1 注册点击事件(事件委托)
	//给父级注册事件，在父级事件方法里判断点了哪个子元素
	//jquery内部已经帮助我们判断好了  我们只需要写功能就可以了
	$('#tec_list').on('click','.see',function(){
		//2.2弹出模态框
		//
		$('#teacherModal').modal();
		//2.3发ajax请求  获取讲师的详细信息
		// http://api.botue.com/teacher/view

		var tc_id=$(this).closest('tr').attr('tc_id');
		$.get('/api/teacher/view?tc_id='+tc_id,function(data){
			//2.4得到数据之后 通过模板引擎 把数据渲染到模态框中
			data.result.mm='<h1>等风来</h1>';
			var html=template('tec_detail',{datail:data.result});
			console.log(html);
			//2.5把最终的html字符串添加到dom中
			$('#body_tec_detail').html(html);
		})
	})
	$('#tec_list').on('click','.status',function(){
		var $this=$(this);
		var tc_status=$this.attr('tc_status');
		var tc_id=$this.closest('tr').attr('tc_id');
		$.ajax({
			url:'/api/teacher/handle',
			type:'post',
			data:{tc_id:tc_id,tc_status:tc_status},
			beforeSend:function(){
				NProgress.start();
			},
			success:function(data){
				NProgress.done();
				if(data.code==200){
					var status=data.result.tc_status;
					$this.attr('tc_status',status);
					if(status==0){
						$this.text('注销');
					}else{
						$this.text('启用');
					}
				}
			}
		})
	})

})