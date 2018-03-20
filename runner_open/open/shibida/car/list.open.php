<?php
global $_W, $_GPC;
$list = pdo_getall('shibida_carfiles');
die(json_encode($list));
