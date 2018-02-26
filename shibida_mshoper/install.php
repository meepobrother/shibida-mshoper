<?php
$sql = "DROP TABLE IF EXISTS ".tablename('shibida_carfiles').";
CREATE TABLE ".tablename('shibida_carfiles')." (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) unsigned NOT NULL DEFAULT '0',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0',
  `realname` varchar(32) NOT NULL DEFAULT '',
  `mobile` varchar(11) NOT NULL DEFAULT '',
  `car_num` varchar(64) NOT NULL DEFAULT '',
  `nickname` varchar(64) NOT NULL DEFAULT '',
  `image` varchar(320) NOT NULL DEFAULT '',
  `openid` varchar(64) NOT NULL DEFAULT '',
  `father` varchar(64) NOT NULL DEFAULT '',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0',
  `licheng` varchar(11) NOT NULL DEFAULT '',
  `pinpai` varchar(64) NOT NULL DEFAULT '',
  `jar_num` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_CAR_NUM` (`car_num`),
  KEY `car_num_index` (`car_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;";

pdo_query($sql);
