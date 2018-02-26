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

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/carCheck.json";
    file_put_contents($file, json_encode($list));
}

die(json_encode($list));
