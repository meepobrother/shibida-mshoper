<?php
global $_W, $_GPC;
$list = pdo_getall('mc_members', array('uniacid' => $_W['uniacid']));
die(json_encode($list));
