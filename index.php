<?php
	$pathinfo=$_SERVER['PATH_INFO'];
	echo include './views'.$pathinfo.'.html';
?>
