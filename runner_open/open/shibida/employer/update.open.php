<?php
global $_W, $_GPC;
$input = $_GPC['__input'];
$data = array();
$employer = $input['list'];
$shop_id = $_SESSION['shop_id'];

if (pdo_update('shibida_shops', array('employers' => serialize($employer)), array('id' => $shop_id))) {
    $data['status'] = 0;
} else {
    $data['status'] = -1;
}
die(json_encode($data));
