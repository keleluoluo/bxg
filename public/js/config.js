// require的相关配置
require.config({
	baseUrl:'/Admin/public',
	paths:{
		// jquery是从1.7版本以后才支持requirejs这种模块化的方式
		jquery:'./assets/jquery/jquery',
		cookie:'./assets/jquery-cookie/jquery.cookie',
		bootstrap:'./assets/bootstrap/js/bootstrap',
		template:'./assets/artTemplate/template-native',
		nprogress:'./assets/nprogress/nprogress',
	    dp: './assets/bootstrap-datepicker/js/bootstrap-datepicker',
	    dpl: './assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
	    validate: './assets/validate-master/jquery-validate',
	    form: './assets/jquery-form/jquery.form',
	    region:'./assets/jquery-region/jquery.region',
	    ckeditor:'./assets/ckeditor/ckeditor'
		
	},
	shim:{
		//依赖于jquery
		bootstrap:{
			deps:['jquery']
		},
		dpl:{
			deps:['jquery']
		},
		validate:{
			deps:['jquery']
		}
		
	}
})
// 载入模块
require(['./js/common']);