<?php

pdo_query("DROP TABLE IF EXISTS ".tablename('shibida_carfiles'));
pdo_query("DROP TABLE IF EXISTS ".tablename('shibida_shops'));
pdo_query("DROP TABLE IF EXISTS ".tablename('shibida_shops_goods'));
pdo_query("DROP TABLE IF EXISTS ".tablename('shibida_shops_goods_group'));
pdo_query("DROP TABLE IF EXISTS ".tablename('shibida_service'));
pdo_query("DROP TABLE IF EXISTS ".tablename('shibida_service_group'));
pdo_query("DROP TABLE IF EXISTS ".tablename('shibida_order'));

