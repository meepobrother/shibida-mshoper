<?php
global $_W, $_GPC;
$data = array(
    'status' => 0,
);

$shop_id = $_SESSION['shop_id'];
if (empty($shop_id)) {
    $data['status'] = 1;
} else {
    $data['status'] = 0;
}

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/checkLogin.json";
    file_put_contents($file, json_encode($data));
}
die(json_encode($data));
