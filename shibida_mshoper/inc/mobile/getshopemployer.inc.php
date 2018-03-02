<?php

global $_W, $_GPC;

$shop_id = $_SESSION['shop_id'];
$shop = pdo_get('shibida_shops', array('id' => $shop_id));
$empl = $shop['employers'];
$list = unserialize($empl);
if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/getshopemployer.json";
    file_put_contents($file, json_encode($list));
}
die(json_encode($list));
