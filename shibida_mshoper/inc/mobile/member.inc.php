<?php
global $_W, $_GPC;
$list = pdo_getall('mc_members', array('uniacid' => $_W['uniacid']));

if (DEBUG) {
    $file = IA_ROOT . "/addons/shibida_mshoper/template/mobile/assets/member.json";
    file_put_contents($file,json_encode($list));
}

die(json_encode($list));
