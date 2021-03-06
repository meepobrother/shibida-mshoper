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
$group['content'] = trim($input['content']);
$group['tag'] = trim($input['tag']);
$group['create_time'] = time();
// $group['displayorder'] = intval($input['displayorder']);
$group['count'] = intval($input['count']);
$group['price'] = floatval($input['price']);
$group['setting'] = serialize($input['setting']);
$group['shop_id'] = intval($input['shop_id']);
$group['group_id'] = intval($input['group_id']);
$group['thumbs'] = serialize($input['thumbs']);

if (pdo_insert('shibida_shops_goods', $group)) {
    $data['status'] = 0;
    $data['id'] = pdo_insertid();
    $group['id'] = $data['id'];
    $data['info'] = $group;
}
die(json_encode($data));
