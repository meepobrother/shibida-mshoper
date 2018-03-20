<?php
global $_W, $_GPC;

$shop_id = $_SESSION['shop_id'];
$shop = pdo_get('shibida_shops', array('id' => $shop_id));
$empl = $shop['employers'];
$list = unserialize($empl);
die(json_encode($list));
