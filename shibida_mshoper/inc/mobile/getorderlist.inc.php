<?php
global $_W, $_GPC;
$list = array();
if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/getorderlist.json";
    file_put_contents($file, json_encode($list));
}
die(json_encode($list));
