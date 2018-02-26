<?php
/**
 * 汽修门店管理系统模块定义
 *
 * @author imeepos
 * @url http://bbs.we7.cc
 */
defined('IN_IA') or exit('Access Denied');

class Shibida_mshoperModule extends WeModule {


	public function welcomeDisplay($menus = array()) {
		//这里来展示DIY管理界面
		include $this->template('welcome');
	}
}