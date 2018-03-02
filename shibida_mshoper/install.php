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


$sql = "DROP TABLE IF EXISTS ".tablename('shibida_shops').";
CREATE TABLE ".tablename('shibida_shops')." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) DEFAULT NULL,
  `uniacid` int(11) NOT NULL DEFAULT '0',
  `mobile` varchar(32) DEFAULT NULL,
  `lat` varchar(32) DEFAULT NULL,
  `lng` varchar(32) DEFAULT NULL,
  `address` varchar(320) DEFAULT NULL,
  `detail` varchar(320) DEFAULT NULL,
  `desc` varchar(320) DEFAULT NULL,
  `content` text,
  `shopers` text NOT NULL,
  `employers` text NOT NULL,
  `kefus` text NOT NULL,
  `password` varchar(320) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile` (`mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
pdo_query($sql);

$sql = "DROP TABLE IF EXISTS ".tablename('shibida_shops_goods').";
CREATE TABLE ".tablename('shibida_shops_goods')." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) unsigned NOT NULL DEFAULT '0',
  `title` varchar(64) DEFAULT NULL,
  `desc` varchar(320) DEFAULT NULL,
  `thumbs` text,
  `content` text,
  `create_time` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `setting` text,
  `shop_id` int(11) unsigned DEFAULT '0',
  `group_id` int(11) unsigned DEFAULT '0',
  `tag` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
pdo_query($sql);

$sql = "DROP TABLE IF EXISTS ".tablename('shibida_shops_goods_group').";
CREATE TABLE ".tablename('shibida_shops_goods_group')." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `desc` varchar(120) DEFAULT NULL,
  `uniacid` int(11) DEFAULT '0',
  `displayorder` int(11) NOT NULL DEFAULT '0',
  `fid` int(11) NOT NULL DEFAULT '0',
  `tags` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uniacid` (`uniacid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;";

pdo_query($sql);

$sql = "DROP TABLE IF EXISTS ".tablename('shibida_service').";
CREATE TABLE ".tablename('shibida_service')." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT '0',
  `mid` int(11) DEFAULT '0' COMMENT '店铺',
  `title` varchar(320) DEFAULT '‘’',
  `desc` varchar(320) DEFAULT '‘’',
  `price` decimal(10,2) DEFAULT '0.00',
  `class_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `uniacid` (`uniacid`),
  KEY `class_id` (`class_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
";

pdo_query($sql);

$sql = "DROP TABLE IF EXISTS ".tablename('shibida_service_group').";
CREATE TABLE ".tablename('shibida_service_group')." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT '0',
  `create_time` int(11) DEFAULT '0',
  `title` varchar(32) DEFAULT '',
  `fid` int(11) DEFAULT '0',
  `logo` varchar(320) DEFAULT '',
  `danger_num` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `uniacid` (`uniacid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;";

pdo_query($sql);
