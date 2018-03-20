<?php
global $_W, $_GPC;
$data = array();
$data['status'] = -1;
$data['message'] = '添加失败';

$input = $_GPC['__input'];
$group = array();
$group['uniacid'] = $_W['uniacid'];
$group['title'] = trim($input['title']);
$group['desc'] = trim($input['desc']);
$group['price'] = floatval($input['price']);
$group['group_id'] = intval($input['group_id']);

if(pdo_insert('shibida_service', $group)){
    $data['status'] = 0;
    $data['id'] = pdo_insertid();
    $group['id'] = $data['id'];
    $data['info'] = $group;
}

die(json_encode($data));
