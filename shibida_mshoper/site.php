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

    public function doMobileTotal()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }

    public function doMobileYeji()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }

    public function doMobileMoney()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }

    public function doMobileAsync()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }

    public function doMobileBonus()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }

    public function doMobileService()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileCoach()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileMessage()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }

    public function doMobileLogin()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileRegister()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileForget()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }

    public function doMobileHome()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobilePost()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileBilling()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileCarAdd()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileCarNum()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doMobileOrderList()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    
    public function doMobileCarfilesList()
    {
        global $_W, $_GPC;
        include $this->template('index');
    }
    public function doWebHome()
    {
        global $_W, $_GPC;
        include $this->template('web/index');
    }
}
