<?php
global $_W, $_GPC;
$k = $_GPC['k'];
if (empty($k)) {
    $sql = "SELECT car_pre as title, group_concat(car_num) as items, first_chart as frist FROM " . tablename('shibida_carfiles') . " WHERE 1 GROUP BY frist ORDER BY frist ASC";
} else {
    $sql = "SELECT car_pre as title, group_concat(car_num) as items, first_chart as frist FROM " . tablename('shibida_carfiles') . " WHERE 1 AND car_num like '%{$k}' GROUP BY frist ORDER BY frist ASC";
}
$list = pdo_fetchall($sql, array());
$data = array();
foreach ($list as $key => $li) {
    $data[] = array(
        'title' => $li['title'],
        'items' => explode(',', $li['items']),
        'first' => $li['frist'],
    );
}
die(json_encode($data));
