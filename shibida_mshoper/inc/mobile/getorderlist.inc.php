<?php

global $_W, $_GPC;

$data = array();
$shop_id = $_SESSION['shop_id'];
$data['shop_id'] = $shop_id;
$page = intval($_GPC['page']);
$psize = intval($_GPC['psize']);
$page = $page > 0 ? $page : 1;
$psize = $psize > 0 ? $psize : 20;
$key = trim($_GPC['key']);
$where = "";
$params = array(':uniacid' => $_W['uniacid']);
if (!empty($key)) {
    $where .= " AND mobile like '%{$key}%' OR realname like '%{$key}%' OR nickname like '%{$key}%'";
}
$sql = "SELECT * FROM " . tablename('shibida_order') . " WHERE uniacid=:uniacid {$where} limit "
    . ($page - 1) * $psize . "," . $psize;
$params = array(':uniacid' => $_W['uniacid']);
$list = pdo_fetchall($sql, $params);

foreach ($list as &$li) {
    $li['checks'] = unserialize($li['checks']);
    $li['car'] = unserialize($li['car']);
    $li['services'] = unserialize($li['services']);
    $li['goods'] = unserialize($li['goods']);
    $li['emplyers'] = unserialize($li['emplyers']);
}
unset($li);

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/getorderlist.json";
    file_put_contents($file, json_encode($list));
}

die(json_encode($list));
