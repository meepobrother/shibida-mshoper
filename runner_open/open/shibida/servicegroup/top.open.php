
<?php
global $_W,$_GPC;
$list = getChildren(0);

die(json_encode($list));

function getChildren($fid)
{
    $item = pdo_getall('shibida_service_group', array('fid' => $fid));
    return $item ? $item : array();
}
