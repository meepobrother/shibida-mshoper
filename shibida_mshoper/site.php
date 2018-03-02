<?php
/**
 * 汽修门店管理系统模块微站定义
 *
 * @author imeepos
 * @url http://bbs.we7.cc
 */
defined('IN_IA') or exit('Access Denied');
define("DEBUG", true);
class Shibida_mshoperModuleSite extends WeModuleSite
{
    private function checkMobileDo($do)
    {
        if (empty($_GET['do'])) {
            $url = $this->createMobileUrl($do);
            header("Location:".$url);
            exit();
        }
    }
    public function doMobileEmployerAdd()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('employerAdd');
        include $this->template('index');
    }
    public function doMobilePai()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('pai');
        include $this->template('index');
    }
    public function doMobileGoods(){
        global $_W, $_GPC;
        $this->checkMobileDo('goods');
        include $this->template('index');
    }
    public function doMobileGoodsGroupAdd(){
        global $_W, $_GPC;
        $this->checkMobileDo('goodsGroupAdd');
        include $this->template('index');
    }
    public function doMobileEmployer()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('pai');
        include $this->template('index');
    }
    public function doMobileTotal()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('total');
        include $this->template('index');
    }

    public function doMobileYeji()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('yeji');
        include $this->template('index');
    }

    public function doMobileMoney()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('money');
        include $this->template('index');
    }

    public function doMobileAsync()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('async');
        include $this->template('index');
    }

    public function doMobileBonus()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('bonus');
        include $this->template('index');
    }

    public function doMobileService()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('service');
        include $this->template('index');
    }
    public function doMobileCoach()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('coach');
        include $this->template('index');
    }
    public function doMobileMessage()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('message');
        include $this->template('index');
    }

    public function doMobileLogin()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('login');
        include $this->template('index');
    }
    public function doMobileRegister()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('register');
        include $this->template('index');
    }
    public function doMobileForget()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('forget');
        include $this->template('index');
    }

    public function doMobileHome()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('home');
        include $this->template('index');
    }
    public function doMobileIndex()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('index');
        include $this->template('index');
    }
    public function doMobilePost()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('post');
        include $this->template('index');
    }
    public function doMobileBilling()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('billing');
        include $this->template('index');
    }
    public function doMobileCarAdd()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('carAdd');
        include $this->template('index');
    }
    public function doMobileCarNum()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('carNum');
        include $this->template('index');
    }
    public function doMobileOrderList()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('orderList');
        include $this->template('index');
    }

    public function doMobileCarfilesList()
    {
        global $_W, $_GPC;
        $this->checkMobileDo('carfilesList');
        include $this->template('index');
    }
    public function doWebHome()
    {
        global $_W, $_GPC;
        include $this->template('web/index');
    }
}
