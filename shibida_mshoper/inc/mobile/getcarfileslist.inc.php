<?php
global $_W, $_GPC;
$list = pdo_getall('shibida_carfiles');

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/getCarfilesList.json";
    file_put_contents($file, json_encode($list));
}

die(json_encode($list));
