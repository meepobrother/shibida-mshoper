<?php
global $_W, $_GPC;
$list = array(
    'status' => 0,
);
$carNum = $_GPC['carNum'];
if (empty($carNum)) {
    $list['status'] = 1;
} else {
    $item = pdo_get('shibida_carfiles', array('car_num' => $carNum));
    if (empty($item)) {
        $list['status'] = 1;
    }
    $list['data'] = $item;
}

die(json_encode($list));
