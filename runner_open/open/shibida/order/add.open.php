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
$group['create_time'] = time();

$group['year'] = date('Y');
$group['month'] = date('m');
$group['week'] = date('w');
$group['day'] = date('d');

$group['fee'] = floatval($input['fee']);
$group['dis_fee'] = floatval($input['dis_fee']);

$group['shop_id'] = $_SESSION['shop_id'];
$group['status'] = 0;
$group['car_id'] = $input['car_id'];

$group['checks'] = serialize($input['check']);
$car = pdo_get('shibida_carfiles', array('id' => $group['car_id']));
$group['car'] = serialize($car);
$group['services'] = serialize($input['services']);
$group['goods'] = serialize($input['goods']);
$group['emplyers'] = serialize($input['emplyers']);

$group['tid'] = $input['tid'];

if (pdo_insert('shibida_order', $group)) {
    $data['status'] = 0;
    $data['id'] = pdo_insertid();
    $group['id'] = $data['id'];
    $data['info'] = $group;
} else {
    $data['message'] = '订单编号重复';
}

die(json_encode($data));
