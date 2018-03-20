<?php
global $_W, $_GPC;
$data = array(
    'status' => 0,
);

$input = $_GPC['__input'];
$mobile = trim($input['mobile']);
$password = trim($input['password']);

$item = pdo_get('shibida_shops', array('mobile' => $mobile));
if (empty($item)) {
    $data['status'] = 1;
    $data['message'] = '会员不存在';
} else {
    // 检查密码是否正确
    $code = md5($password . $_W['config']['setting']['authkey']);
    if ($code === $item['password']) {
        $data['data'] = $item;
        // 保存到Session
        $_SESSION['shop_id'] = $item['id'];
    } else {
        $data['status'] = 1;
        $data['message'] = '密码错误';
    }
}
die(json_encode($data));
