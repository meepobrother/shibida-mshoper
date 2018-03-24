<?php
global $_W, $_GPC;
$list = array(
    'status' => 1,
);

$input = $_GPC['__input'];
$data = array();
$data['car_num'] = $input['carNum'];
$data['jar_num'] = $input['jarNum'];
$data['licheng'] = $input['licheng'];
$data['mobile'] = $input['mobile'];
$data['realname'] = $input['realname'];
$data['car_pre'] = $input['car_pre'];
$data['create_time'] = time();
$data['update_time'] = time();
$data['father'] = $_W['openid'];
$data['uniacid'] = $_W['uniacid'];

load()->library('pinyin');
$pinyin = new Pinyin_Pinyin();
$chess = $pinyin->ChineseToPinyin($input['car_pre']);
$first_chart = $pinyin->get_first_char($chess);
$data['first_chart'] = $first_chart;

// 检查重复
$item = pdo_get('shibida_carfiles', array('car_num' => $data['car_num']));
if (pdo_insert('shibida_carfiles', $data)) {
    $list['status'] = 0;
    $list['id'] = pdo_insertid();
    $data['id'] = $list['id'];
    $list['data'] = $data;
} else {
    $list['msg'] = '已存在';
    $list['id'] = $item['id'];
    $list['data'] = $data;
}

die(json_encode($list));
