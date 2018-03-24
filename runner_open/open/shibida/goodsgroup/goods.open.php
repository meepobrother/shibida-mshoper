<?php
global $_W, $_GPC;

$fs = getChildren(0);
foreach ($fs as &$f) {
    $cs = getChildren($f['id']);
    foreach ($cs as &$c) {
        $c['items'] = getGroupGoods($c['id']);
    }
    unset($c);
    $f['items'] = $cs;
}
unset($f);

die(json_encode($fs));

function getChildren($fid)
{
    $item = pdo_getall('shibida_shops_goods_group', array('fid' => $fid));
    return $item ? $item : array();
}

function getGroupGoods($group_id)
{
    $item = pdo_getall('shibida_shops_goods', array('group_id' => $group_id));
    return $item ? $item : array();
}
