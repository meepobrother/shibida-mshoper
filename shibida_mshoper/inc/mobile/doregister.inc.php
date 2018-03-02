<?php
global $_W,$_GPC;
$data = array(
    'status'=>0
);
$input = $_GPC['__input'];
$shop = array();
$shop['title'] = $input['title'];
$shop['uniacid'] = $_W['uniacid'];
$shop['mobile'] = $input['mobile'];
$shop['detail'] = $input['detail'];
$shop['desc'] = $input['desc'];
$shop['content'] = $input['content'];
$shop['address'] = $input['address'];
$shop['lat'] = $input['lat'];
$shop['lng'] = $input['lng'];
$shop['password'] = md5($input['password'] . $_W['config']['setting']['authkey']);
$shopers = array();
$shop['shopers'] = serialize($shopers);
$employers = array();
$shop['employers'] = serialize($employers);
$kefus = array();
$shop['kefus'] = serialize($kefus);

if(pdo_insert('shibida_shops',$shop)){
    $data['id'] = pdo_insertid();
    $shop['shop'] = $data['id'];
    $data['data'] = $shop;
}else{
    $data['data'] = 0;
}
if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/doLogin.json";
    file_put_contents($file, json_encode($data));
}
die(json_encode($data));
