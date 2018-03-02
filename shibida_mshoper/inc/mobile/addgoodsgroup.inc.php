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
$group['displayorder'] = intval($input['displayorder']);
$group['fid'] = intval($input['fid']);
$group['tags'] = serialize($input['tags']);

if(pdo_insert('shibida_shops_goods_group', $group)){
    $data['status'] = 0;
    $data['id'] = pdo_insertid();
    $group['id'] = $data['id'];
    $data['info'] = $group;
    $data['list'] = getChildren(0);
}

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/addgoodsgroup.json";
    file_put_contents($file, json_encode($data));
}
die(json_encode($data));

function getChildren($fid)
{
    $item = pdo_getall('shibida_shops_goods_group', array('fid' => $fid));
    return $item ? $item : array();
}
