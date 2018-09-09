import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'//登录
import customdetails from '@/components/customdetails'//定制详情
import comment from '@/components/comment'//发布评论
import evaluationsuccess from '@/components/evaluationsuccess'//发布成功
import everyonethin from '@/components/everyonethin'//人人瘦
import successfully from '@/components/successfully'//提交成功
import myorder from '@/components/myorder'//我的订单
import nutritionistguidance from '@/components/nutritionistguidance'//营养师认证引导页
import nutritionistrules from '@/components/nutritionistrules'//营养师认证
import register from '@/components/register'//注册
import forgetpassword from '@/components/forgetpassword'//重置密码
import service from '@/components/service'//1V1服务区
import evaluation from '@/components/evaluation'//评价详情
import product from '@/components/product'//商品详情
import classify from '@/components/classify'//特色减肥系列
import explosive from '@/components/explosive'//爆款区
import problem from '@/components/problem'//常见问题
import weight from '@/components/weight'//减肥系列
import about from '@/components/about'//关于我们
import confirm from '@/components/confirm'//确认订单
import set from '@/components/set'//设置
import index from '@/components/index'//首页
import card from '@/components/card'//送礼卡
import condition from '@/components/condition'//条件筛选
import my from '@/components/my'//个人中心
import plan from '@/components/plan'//我的计划
import plan_detail from '@/components/plan-detail'//计划详情
import toolbox from '@/components/toolbox'//工具箱
import protocol from '@/components/protocol'//用户协议
import problemdets from '@/components/problem_detail'//问题详情
import headline from '@/components/headline'//头条详情
import activity from '@/components/activity'//活动区

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/toolbox',
      name: 'toolbox',
      component: toolbox
    },
    {
      path: '/plan_detail',
      name: 'plan_detail',
      component: plan_detail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/customdetails',
      name: 'customdetails',
      component: customdetails
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/evaluationsuccess',
      name: 'evaluationsuccess',
      component: evaluationsuccess
    },
    {
      path: '/everyonethin',
      name: 'everyonethin',
      component: everyonethin
    },
    {
      path: '/successfully',
      name: 'successfully',
      component: successfully
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: myorder
    },
    {
      path: '/nutritionistguidance',
      name: 'nutritionistguidance',
      component: nutritionistguidance
    },
    {
      path: '/nutritionistrules',
      name: 'nutritionistrules',
      component: nutritionistrules
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: forgetpassword
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },{
      path: '/evaluation',
      name: 'evaluation',
      component: evaluation
    },{
      path: '/product',
      name: 'product',
      component: product
    },{
      path: '/classify',
      name: 'classify',
      component: classify
    },{
      path: '/explosive',
      name: 'explosive',
      component: explosive
    },{
      path: '/problem',
      name: 'problem',
      component: problem
    },{
      path: '/weight',
      name: 'weight',
      component: weight
    },{
      path: '/about',
      name: 'about',
      component: about
    },{
      path: '/confirm',
      name: 'confirm',
      component: confirm
    },{
      path: '/set',
      name: 'set',
      component: set
    },{
      path: '/',
      name: 'index',
      component:index 
    },{
      path: '/card',
      name: 'card',
      component: card
    },{
      path: '/condition',
      name: 'condition',
      component: condition
    },{
      path: '/my',
      name: 'my',
      component: my
    },{
      path: '/plan',
      name: 'plan',
      component: plan
    },{
      path: '/protocol',
      name: 'protocol',
      component: protocol
    }
    ,{
      path: '/problemdets',
      name: 'problemdets',
      component: problemdets
    },
    {
      path: '/headline',
      name: 'headline',
      component: headline
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    }
  ]
})
