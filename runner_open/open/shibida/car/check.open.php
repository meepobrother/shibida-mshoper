<?php
global $_W, $_GPC;
$list = array(
    'status' => 0,
);
$carNum = urldecode($_GPC['carNum']);
$carId = intval($_GPC['carId']);

if (empty($carNum) && empty($carId)) {
    $list['status'] = 1;
} else {
    if (!empty($carNum)) {
        $item = pdo_get('shibida_carfiles', array('car_num' => $carNum));
    } else {
        $item = pdo_get('shibida_carfiles', array('id' => $carId));
    }
    if (empty($item)) {
        $list['status'] = 1;
    }
    $list['data'] = $item;
}

die(json_encode($list));
