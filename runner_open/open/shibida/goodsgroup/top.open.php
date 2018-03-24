<?php
global $_W, $_GPC;
$list = getChildren(0);

foreach ($list as &$f) {
    $cs = getChildren($f['id']);
    $f['items'] = $cs;
}
unset($f);

die(json_encode($list));

function getChildren($fid)
{
    $item = pdo_getall('shibida_shops_goods_group', array('fid' => $fid));
    return $item ? $item : array();
}
