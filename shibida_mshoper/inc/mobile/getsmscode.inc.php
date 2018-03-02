<?php
global $_W,$_GPC;
$data = array(
    'status'=>0
);
$json = json_encode($data);

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/getSmsCode.json";
    file_put_contents($file, json_encode($data));
}
die(json_encode($data));
