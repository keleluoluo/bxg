<?php
//文件的上传路径
	$filename=$_FILES['avatar']['tmp_name'];
	//得到新的文件名
	$newpath='./uploads/'.time().$_FILES['avatar']['name'];
	move_uploaded_file($filename, $newpath);
	echo $newpath;

?>