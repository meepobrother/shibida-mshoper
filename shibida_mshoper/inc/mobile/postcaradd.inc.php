<?php
global $_W, $_GPC;
$list = array(
    'status' => 1,
);

$input = $_GPC['__input'];
$data = array();
$data['car_num'] = $input['carNum'];
$data['jar_num'] = $input['jarNum'];
$data['licheng'] = $input['licheng'];
$data['mobile'] = $input['mobile'];
$data['realname'] = $input['realname'];
$data['create_time'] = time();
$data['update_time'] = time();
$data['father'] = $_W['openid'];
$data['uniacid'] = $_W['uniacid'];

// 检查重复

if (pdo_insert('shibida_carfiles', $data)) {
    $list['status'] = 0;
    $list['id'] = pdo_insertid();
    $data['id'] = $list['id'];
    $list['data'] = $data;
}

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/postCarAdd.json";
    file_put_contents($file, json_encode($list));
}

die(json_encode($list));
