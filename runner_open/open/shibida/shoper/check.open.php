<?php
global $_W, $_GPC;
$data = array(
    'status' => 0,
);

$shop_id = $_W['shop_id'];
if (empty($shop_id)) {
    $data['status'] = 1;
} else {
    $data['status'] = 0;
}
die(json_encode($data));
