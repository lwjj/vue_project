<template>
    <div class="plan-detail">
        <div v-if="isPupop">
            <top :text="header"></top>

            <div class="detail-header">
                <div class="detail-logo">
                    <img class="logo" src="../assets/images/logo.png" alt="">    
                </div>
                <div class="detail-set">
                	<router-link to='/toolbox'>
                        <img src="../assets/images/20180802143730.png" alt="">
                    </router-link>
                </div>
                <div class="detail-info">
                    <div>{{uname}}</div>
                    <div>{{title}}</div>
                </div>
            </div>
        <!--第一周-->
            <div class="plan-lists" v-if='status=="one_status"'>
            	<!--星期一-->
                <div class="list">
                    <div class="list-header">星期一</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.one_zuo == '' ? '' : showzuo($event,periodList.one_zuo)" :class='periodList.one_zuo == "" ? "" : "blue"'>{{periodList.one==""?'': periodList.one}}</li>
                            	<li  @click="periodList.one_zuo2 == '' ? '' : showzuo($event,periodList.one_zuo2)" :class='periodList.one_zuo2 == "" ? "" : "blue"'>{{periodList.one2==""?'': periodList.one2}}</li>
                            	<li  @click="periodList.one_zuo3 == '' ? '' : showzuo($event,periodList.one_zuo3)"  :class='periodList.one_zuo3 == "" ? "" : "blue"'>{{periodList.one3==""?'': periodList.one3}}</li>
                            	<li  @click="periodList.one_zuo4 == '' ? '' : showzuo($event,periodList.one_zuo4)"  :class='periodList.one_zuo4 == "" ? "" : "blue"'>{{periodList.one4==""?'': periodList.one4}}</li>
                            	<li  @click="periodList.one_zuo5 == '' ? '' : showzuo($event,periodList.one_zuo5)"  :class='periodList.one_zuo5 == "" ? "" : "blue"'>{{periodList.one5==""?'': periodList.one5}}</li>
                            	<li  @click="periodList.one_zuo6 == '' ? '' : showzuo($event,periodList.one_zuo6)"  :class='periodList.one_zuo6 == "" ? "" : "blue"'>{{periodList.one6==""?'': periodList.one6}}</li>
                            	<li  @click="periodList.one_zuo7 == '' ? '' : showzuo($event,periodList.one_zuo7)"  :class='periodList.one_zuo7 == "" ? "" : "blue"'>{{periodList.one7==""?'': periodList.one7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.zuo_wu_san == '' ? '' : showzuo($event,periodList.zuo_wu_san)"  :class='periodList.zuo_wu_san == "" ? "" : "blue"'>{{periodList.wu_san==""?'': periodList.wu_san}}</li>
                            	<li  @click="periodList.zuo_wu_san2 == '' ? '' : showzuo($event,periodList.zuo_wu_san2)" :class='periodList.zuo_wu_san2 == "" ? "" : "blue"'>{{periodList.wu_san2==""?'': periodList.wu_san2}}</li>
                            	<li  @click="periodList.zuo_wu_san3 == '' ? '' : showzuo($event,periodList.zuo_wu_san3)"  :class='periodList.zuo_wu_san3 == "" ? "" : "blue"'>{{periodList.wu_san3==""?'': periodList.wu_san3}}</li>
                            	<li  @click="periodList.zuo_wu_san4 == '' ? '' : showzuo($event,periodList.zuo_wu_san4)"  :class='periodList.zuo_wu_san4 == "" ? "" : "blue"'>{{periodList.wu_san4==""?'': periodList.wu_san4}}</li>
                            	<li  @click="periodList.zuo_wu_san5 == '' ? '' : showzuo($event,periodList.zuo_wu_san5)"  :class='periodList.zuo_wu_san5 == "" ? "" : "blue"'>{{periodList.wu_san5==""?'': periodList.wu_san5}}</li>
                            	<li  @click="periodList.zuo_wu_san6== '' ? '' : showzuo($event,periodList.zuo_wu_san6)"  :class='periodList.zuo_wu_san6 == "" ? "" : "blue"'>{{periodList.wu_san6==""?'': periodList.wu_san6}}</li>
                            	<li  @click="periodList.zuo_wu_san7 == '' ? '' : showzuo($event,periodList.zuo_wu_san7)"  :class='periodList.zuo_wu_san7 == "" ? "" : "blue"'>{{periodList.wu_san7==""?'': periodList.wu_san7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.zuo_wc_san == '' ? '' : showzuo($event,periodList.zuo_wc_san)" :class='periodList.zuo_wc_san == "" ? "" : "blue"'>{{periodList.wc_san==""?'': periodList.wc_san}}</li>
                            	<li @click="periodList.zuo_wc_san2 == '' ? '' : showzuo($event,periodList.zuo_wc_san2)" :class='periodList.zuo_wc_san2 == "" ? "" : "blue"'>{{periodList.wc_san2==""?'': periodList.wc_san2}}</li>
                            	<li @click="periodList.zuo_wc_san3 == '' ? '' : showzuo($event,periodList.zuo_wc_san3)" :class='periodList.zuo_wc_san3 == "" ? "" : "blue"'>{{periodList.wc_san3==""?'': periodList.wc_san3}}</li>
                            	<li @click="periodList.zuo_wc_san4 == '' ? '' : showzuo($event,periodList.zuo_wc_san4)" :class='periodList.zuo_wc_san4== "" ? "" : "blue"'>{{periodList.wc_san4==""?'': periodList.wc_san4}}</li>
                            	<li @click="periodList.zuo_wc_san5 == '' ? '' : showzuo($event,periodList.zuo_wc_san5)" :class='periodList.zuo_wc_san5 == "" ? "" : "blue"'>{{periodList.wc_san5==""?'': periodList.wc_san5}}</li>
                            	<li @click="periodList.zuo_wc_san6 == '' ? '' : showzuo($event,periodList.zuo_wc_san6)" :class='periodList.zuo_wc_san6 == "" ? "" : "blue"'>{{periodList.wc_san6==""?'': periodList.wc_san6}}</li>
                            	<li @click="periodList.zuo_wc_san7 == '' ? '' : showzuo($event,periodList.zuo_wc_san7)" :class='periodList.zuo_wc_san7 == "" ? "" : "blue"'>{{periodList.wc_san7==""?'': periodList.wc_san7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--星期二-->
                <div class="list">
                    <div class="list-header">星期二</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.two_zuo == '' ? '' : showzuo($event,periodList.two_zuo)" :class='periodList.two_zuo == "" ? "" : "blue"'>{{periodList.two==""?'': periodList.two}}</li>
                            	<li @click="periodList.two_zuo2 == '' ? '' : showzuo($event,periodList.two_zuo2)" :class='periodList.two_zuo2 == "" ? "" : "blue"'>{{periodList.two2==""?'': periodList.two2}}</li>
                            	<li @click="periodList.two_zuo3 == '' ? '' : showzuo($event,periodList.two_zuo3)" :class='periodList.two_zuo3 == "" ? "" : "blue"'>{{periodList.two3==""?'': periodList.two3}}</li>
                            	<li @click="periodList.two_zuo4 == '' ? '' : showzuo($event,periodList.two_zuo4)" :class='periodList.two_zuo4 == "" ? "" : "blue"'>{{periodList.two4==""?'': periodList.two4}}</li>
                            	<li @click="periodList.two_zuo5 == '' ? '' : showzuo($event,periodList.two_zuo5)" :class='periodList.two_zuo5 == "" ? "" : "blue"'>{{periodList.two5==""?'': periodList.two5}}</li>
                            	<li @click="periodList.two_zuo6 == '' ? '' : showzuo($event,periodList.two_zuo6)" :class='periodList.two_zuo6 == "" ? "" : "blue"'>{{periodList.two6==""?'': periodList.two6}}</li>
                            	<li @click="periodList.two_zuo7 == '' ? '' : showzuo($event,periodList.two_zuo7)" :class='periodList.two_zuo7 == "" ? "" : "blue"'>{{periodList.two7==""?'': periodList.two7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.zuo_wu_two == '' ? '' : showzuo($event,periodList.zuo_wu_two)" :class='periodList.zuo_wu_two == "" ? "" : "blue"'>{{periodList.wu_two==""?'': periodList.wu_two}}</li>
                            	<li @click="periodList.zuo_wu_two2 == '' ? '' : showzuo($event,periodList.zuo_wu_two2)" :class='periodList.zuo_wu_two2 == "" ? "" : "blue"'>{{periodList.wu_two2==""?'': periodList.wu_two2}}</li>
                            	<li @click="periodList.zuo_wu_two3 == '' ? '' : showzuo($event,periodList.zuo_wu_two3)" :class='periodList.zuo_wu_two3 == "" ? "" : "blue"'>{{periodList.wu_two3==""?'': periodList.wu_two3}}</li>
                            	<li @click="periodList.zuo_wu_two4 == '' ? '' : showzuo($event,periodList.zuo_wu_two4)" :class='periodList.zuo_wu_two4 == "" ? "" : "blue"'>{{periodList.wu_two4==""?'': periodList.wu_two4}}</li>
                            	<li @click="periodList.zuo_wu_two5 == '' ? '' : showzuo($event,periodList.zuo_wu_two5)" :class='periodList.zuo_wu_two5 == "" ? "" : "blue"'>{{periodList.wu_two5==""?'': periodList.wu_two5}}</li>
                            	<li @click="periodList.zuo_wu_two6 == '' ? '' : showzuo($event,periodList.zuo_wu_two6)" :class='periodList.zuo_wu_two6 == "" ? "" : "blue"'>{{periodList.wu_two6==""?'': periodList.wu_two6}}</li>
                            	<li @click="periodList.zuo_wu_two7 == '' ? '' : showzuo($event,periodList.zuo_wu_two7)" :class='periodList.zuo_wu_two7 == "" ? "" : "blue"'>{{periodList.wu_two7==""?'': periodList.wu_two7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.zuo_wc_two == '' ? '' : showzuo($event,periodList.zuo_wc_two)" :class='periodList.zuo_wc_two == "" ? "" : "blue"'>{{periodList.wc_two==""?'': periodList.wc_two}}</li>
                            	<li @click="periodList.zuo_wc_two2 == '' ? '' : showzuo($event,periodList.zuo_wc_two2)" :class='periodList.zuo_wc_two2 == "" ? "" : "blue"'>{{periodList.wc_two2==""?'': periodList.wc_two2}}</li>
                            	<li @click="periodList.zuo_wc_two3 == '' ? '' : showzuo($event,periodList.zuo_wc_two3)" :class='periodList.zuo_wc_two3 == "" ? "" : "blue"'>{{periodList.wc_two3==""?'': periodList.wc_two3}}</li>
                            	<li @click="periodList.zuo_wc_two4 == '' ? '' : showzuo($event,periodList.zuo_wc_two4)" :class='periodList.zuo_wc_two4 == "" ? "" : "blue"'>{{periodList.wc_two4==""?'': periodList.wc_two4}}</li>
                            	<li @click="periodList.zuo_wc_two5 == '' ? '' : showzuo($event,periodList.zuo_wc_two5)" :class='periodList.zuo_wc_two5 == "" ? "" : "blue"'>{{periodList.wc_two5==""?'': periodList.wc_two5}}</li>
                            	<li @click="periodList.zuo_wc_two6 == '' ? '' : showzuo($event,periodList.zuo_wc_two6)" :class='periodList.zuo_wc_two6 == "" ? "" : "blue"'>{{periodList.wc_two6==""?'': periodList.wc_two6}}</li>
                            	<li @click="periodList.zuo_wc_two7 == '' ? '' : showzuo($event,periodList.zuo_wc_two7)" :class='periodList.zuo_wc_two7 == "" ? "" : "blue"'>{{periodList.wc_two7==""?'': periodList.wc_two7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!--星期三-->
                <div class="list">
                    <div class="list-header">星期三</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.san_zuo == '' ? '' : showzuo($event,periodList.san_zuo)" :class='periodList.san_zuo== "" ? "" : "blue"'>{{periodList.san==""?'': periodList.san}}</li>
                            	<li @click="periodList.san_zuo2 == '' ? '' : showzuo($event,periodList.san_zuo2)" :class='periodList.san_zuo2 == "" ? "" : "blue"'>{{periodList.san2==""?'': periodList.san2}}</li>
                            	<li @click="periodList.san_zuo3 == '' ? '' : showzuo($event,periodList.san_zuo3)" :class='periodList.san_zuo3 == "" ? "" : "blue"'>{{periodList.san3==""?'': periodList.san3}}</li>
                            	<li @click="periodList.san_zuo4 == '' ? '' : showzuo($event,periodList.san_zuo4)" :class='periodList.san_zuo4 == "" ? "" : "blue"'>{{periodList.san4==""?'': periodList.san4}}</li>
                            	<li @click="periodList.san_zuo5 == '' ? '' : showzuo($event,periodList.san_zuo5)" :class='periodList.san_zuo5 == "" ? "" : "blue"'>{{periodList.san5==""?'': periodList.san5}}</li>
                            	<li @click="periodList.san_zuo6 == '' ? '' : showzuo($event,periodList.san_zuo6)" :class='periodList.san_zuo6 == "" ? "" : "blue"'>{{periodList.san6==""?'': periodList.san6}}</li>
                            	<li @click="periodList.san_zuo7 == '' ? '' : showzuo($event,periodList.san_zuo7)" :class='periodList.san_zuo7 == "" ? "" : "blue"'>{{periodList.san7==""?'': periodList.san7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.zuo_wu_san == '' ? '' : showzuo($event,periodList.zuo_wu_san)" :class='periodList.zuo_wu_san == "" ? "" : "blue"'>{{periodList.wu_san==""?'': periodList.wu_san}}</li>
                            	<li @click="periodList.zuo_wu_san2 == '' ? '' : showzuo($event,periodList.zuo_wu_san2)" :class='periodList.zuo_wu_san2 == "" ? "" : "blue"'>{{periodList.wu_san2==""?'': periodList.wu_san2}}</li>
                            	<li @click="periodList.zuo_wu_san3 == '' ? '' : showzuo($event,periodList.zuo_wu_san3)" :class='periodList.zuo_wu_san3 == "" ? "" : "blue"'>{{periodList.wu_san3==""?'': periodList.wu_san3}}</li>
                            	<li @click="periodList.zuo_wu_san4 == '' ? '' : showzuo($event,periodList.zuo_wu_san4)" :class='periodList.zuo_wu_san4 == "" ? "" : "blue"'>{{periodList.wu_san4==""?'': periodList.wu_san4}}</li>
                            	<li @click="periodList.zuo_wu_san5 == '' ? '' : showzuo($event,periodList.zuo_wu_san5)" :class='periodList.zuo_wu_san5 == "" ? "" : "blue"'>{{periodList.wu_san5==""?'': periodList.wu_san5}}</li>
                            	<li @click="periodList.zuo_wu_san6 == '' ? '' : showzuo($event,periodList.zuo_wu_san6)" :class='periodList.zuo_wu_san6 == "" ? "" : "blue"'>{{periodList.wu_san6==""?'': periodList.wu_san6}}</li>
                            	<li @click="periodList.zuo_wu_san7 == '' ? '' : showzuo($event,periodList.zuo_wu_san7)" :class='periodList.zuo_wu_san7 == "" ? "" : "blue"'>{{periodList.wu_san7==""?'': periodList.wu_san7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.zuo_wc_san == '' ? '' : showzuo($event,periodList.zuo_wc_san)" :class='periodList.zuo_wc_san == "" ? "" : "blue"'>{{periodList.wc_san==""?'': periodList.wc_san}}</li>
                            	<li @click="periodList.zuo_wc_san2 == '' ? '' : showzuo($event,periodList.zuo_wc_san2)" :class='periodList.zuo_wc_san == "" ? "" : "blue"'>{{periodList.wc_san2==""?'': periodList.wc_san2}}</li>
                            	<li @click="periodList.zuo_wc_san3 == '' ? '' : showzuo($event,periodList.zuo_wc_san3)" :class='periodList.zuo_wc_san == "" ? "" : "blue"'>{{periodList.wc_san3==""?'': periodList.wc_san3}}</li>
                            	<li @click="periodList.zuo_wc_san4 == '' ? '' : showzuo($event,periodList.zuo_wc_san4)" :class='periodList.zuo_wc_san== "" ? "" : "blue"'>{{periodList.wc_san4==""?'': periodList.wc_san4}}</li>
                            	<li @click="periodList.zuo_wc_san5 == '' ? '' : showzuo($event,periodList.zuo_wc_san5)" :class='periodList.zuo_wc_san == "" ? "" : "blue"'>{{periodList.wc_san5==""?'': periodList.wc_san5}}</li>
                            	<li @click="periodList.zuo_wc_san6 == '' ? '' : showzuo($event,periodList.zuo_wc_san6)" :class='periodList.zuo_wc_san == "" ? "" : "blue"'>{{periodList.wc_san6==""?'': periodList.wc_san6}}</li>
                            	<li @click="periodList.zuo_wc_san7 == '' ? '' : showzuo($event,periodList.zuo_wc_san7)" :class='periodList.zuo_wc_san == "" ? "" : "blue"'>{{periodList.wc_san7==""?'': periodList.wc_san7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!--星期四-->
                <div class="list">
                    <div class="list-header">星期四</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.si_zuo == '' ? '' : showzuo($event,periodList.si_zuo)" :class='periodList.si_zuo == "" ? "" : "blue"'>{{periodList.si==""?'': periodList.si}}</li>
                            	<li  @click="periodList.si_zuo2 == '' ? '' : showzuo($event,periodList.si_zuo2)" :class='periodList.si_zuo2 == "" ? "" : "blue"'>{{periodList.si2==""?'': periodList.si2}}</li>
                            	<li  @click="periodList.si_zuo3 == '' ? '' : showzuo($event,periodList.si_zuo3)" :class='periodList.si_zuo3 == "" ? "" : "blue"'>{{periodList.si3==""?'': periodList.si3}}</li>
                            	<li  @click="periodList.si_zuo4 == '' ? '' : showzuo($event,periodList.si_zuo4)" :class='periodList.si_zuo4 == "" ? "" : "blue"'>{{periodList.si4==""?'': periodList.si4}}</li>
                            	<li  @click="periodList.si_zuo5 == '' ? '' : showzuo($event,periodList.si_zuo5)" :class='periodList.si_zuo5 == "" ? "" : "blue"'>{{periodList.si5==""?'': periodList.si5}}</li>
                            	<li  @click="periodList.si_zuo6 == '' ? '' : showzuo($event,periodList.si_zuo6)" :class='periodList.si_zuo6 == "" ? "" : "blue"'>{{periodList.si6==""?'': periodList.si6}}</li>
                            	<li  @click="periodList.si_zuo7 == '' ? '' : showzuo($event,periodList.si_zuo7)" :class='periodList.si_zuo7 == "" ? "" : "blue"'>{{periodList.si7==""?'': periodList.si7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.zuo_wu_si == '' ? '' : showzuo($event,periodList.zuo_wu_si)" :class='periodList.zuo_wu_si == "" ? "" : "blue"'>{{periodList.wu_si==""?'': periodList.wu_si}}</li>
                            	<li  @click="periodList.zuo_wu_si2 == '' ? '' : showzuo($event,periodList.zuo_wu_si2)" :class='periodList.zuo_wu_si2 == "" ? "" : "blue"'>{{periodList.wu_si2==""?'': periodList.wu_si2}}</li>
                            	<li  @click="periodList.zuo_wu_si3 == '' ? '' : showzuo($event,periodList.zuo_wu_si3)" :class='periodList.zuo_wu_si3 == "" ? "" : "blue"'>{{periodList.wu_si3==""?'': periodList.wu_si3}}</li>
                            	<li  @click="periodList.zuo_wu_si4 == '' ? '' : showzuo($event,periodList.zuo_wu_si4)" :class='periodList.zuo_wu_si4 == "" ? "" : "blue"'>{{periodList.wu_si4==""?'': periodList.wu_si4}}</li>
                            	<li  @click="periodList.zuo_wu_si5 == '' ? '' : showzuo($event,periodList.zuo_wu_si5)" :class='periodList.zuo_wu_si5 == "" ? "" : "blue"'>{{periodList.wu_si5==""?'': periodList.wu_si5}}</li>
                            	<li  @click="periodList.zuo_wu_si6 == '' ? '' : showzuo($event,periodList.zuo_wu_si6)" :class='periodList.zuo_wu_si6 == "" ? "" : "blue"'>{{periodList.wu_si6==""?'': periodList.wu_si6}}</li>
                            	<li  @click="periodList.zuo_wu_si7 == '' ? '' : showzuo($event,periodList.zuo_wu_si7)" :class='periodList.zuo_wu_si7 == "" ? "" : "blue"'>{{periodList.wu_si7==""?'': periodList.wu_si7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="periodList.zuo_wc_si == '' ? '' : showzuo($event,periodList.zuo_wc_si)"  :class='periodList.zuo_wc_si == "" ? "" : "blue"'>{{periodList.wc_si==""?'': periodList.wc_si}}</li>
                            	<li @click="periodList.zuo_wc_si2 == '' ? '' : showzuo($event,periodList.zuo_wc_si2)" :class='periodList.zuo_wc_si2 == "" ? "" : "blue"'>{{periodList.wc_si2==""?'': periodList.wc_si2}}</li>
                            	<li @click="periodList.zuo_wc_si3 == '' ? '' : showzuo($event,periodList.zuo_wc_si3)" :class='periodList.zuo_wc_si3 == "" ? "" : "blue"'>{{periodList.wc_si3==""?'': periodList.wc_si3}}</li>
                            	<li @click="periodList.zuo_wc_si4 == '' ? '' : showzuo($event,periodList.zuo_wc_si4)" :class='periodList.zuo_wc_si4 == "" ? "" : "blue"'>{{periodList.wc_si4==""?'': periodList.wc_si4}}</li>
                            	<li @click="periodList.zuo_wc_si5 == '' ? '' : showzuo($event,periodList.zuo_wc_si5)" :class='periodList.zuo_wc_si5 == "" ? "" : "blue"'>{{periodList.wc_si5==""?'': periodList.wc_si5}}</li>
                            	<li @click="periodList.zuo_wc_si6 == '' ? '' : showzuo($event,periodList.zuo_wc_si6)" :class='periodList.zuo_wc_si6 == "" ? "" : "blue"'>{{periodList.wc_si6==""?'': periodList.wc_si6}}</li>
                            	<li @click="periodList.zuo_wc_si7 == '' ? '' : showzuo($event,periodList.zuo_wc_si7)" :class='periodList.zuo_wc_si7 == "" ? "" : "blue"'>{{periodList.wc_si7==""?'': periodList.wc_si7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!--星期五-->
                <div class="list">
                    <div class="list-header">星期五</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.wu_zuo  == '' ? '' : showzuo($event,periodList.wu_zuo )" :class='periodList.wu_zuo == "" ? "" : "blue"'>{{periodList.wu==""?'': periodList.wu}}</li>
                            	<li @click="periodList.wu_zuo2  == '' ? '' : showzuo($event,periodList.wu_zuo2)" :class='periodList.wu_zuo2 == "" ? "" : "blue"'>{{periodList.wu2==""?'': periodList.wu2}}</li>
                            	<li @click="periodList.wu_zuo3  == '' ? '' : showzuo($event,periodList.wu_zuo3 )" :class='periodList.wu_zuo3 == "" ? "" : "blue"'>{{periodList.wu3==""?'': periodList.wu3}}</li>
                            	<li @click="periodList.wu_zuo4 == '' ? '' : showzuo($event,periodList.wu_zuo4 )" :class='periodList.wu_zuo4 == "" ? "" : "blue"'>{{periodList.wu4==""?'': periodList.wu4}}</li>
                            	<li @click="periodList.wu_zuo5  == '' ? '' : showzuo($event,periodList.wu_zuo5 )" :class='periodList.wu_zuo5 == "" ? "" : "blue"'>{{periodList.wu5==""?'': periodList.wu5}}</li>
                            	<li @click="periodList.wu_zuo6  == '' ? '' : showzuo($event,periodList.wu_zuo6 )" :class='periodList.wu_zuo6 == "" ? "" : "blue"'>{{periodList.wu6==""?'': periodList.wu6}}</li>
                            	<li @click="periodList.wu_zuo7  == '' ? '' : showzuo($event,periodList.wu_zuo7 )" :class='periodList.wu_zuo7 == "" ? "" : "blue"'>{{periodList.wu7==""?'': periodList.wu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                             <ul>
                            	<li @click="periodList.zuo_wu_wu  == '' ? '' : showzuo($event,periodList.zuo_wu_wu )" :class='periodList.zuo_wu_wu == "" ? "" : "blue"'>{{periodList.wu_wu==""?'': periodList.wu_wu}}</li>
                            	<li @click="periodList.zuo_wu_wu2  == '' ? '' : showzuo($event,periodList.zuo_wu_wu2 )" :class='periodList.zuo_wu_wu2 == "" ? "" : "blue"'>{{periodList.wu_wu2==""?'': periodList.wu_wu2}}</li>
                            	<li @click="periodList.zuo_wu_wu3  == '' ? '' : showzuo($event,periodList.zuo_wu_wu3 )" :class='periodList.zuo_wu_wu3 == "" ? "" : "blue"'>{{periodList.wu_wu3==""?'': periodList.wu_wu3}}</li>
                            	<li @click="periodList.zuo_wu_wu4  == '' ? '' : showzuo($event,periodList.zuo_wu_wu4 )" :class='periodList.zuo_wu_wu4 == "" ? "" : "blue"'>{{periodList.wu_wu4==""?'': periodList.wu_wu4}}</li>
                            	<li @click="periodList.zuo_wu_wu5  == '' ? '' : showzuo($event,periodList.zuo_wu_wu5 )" :class='periodList.zuo_wu_wu5 == "" ? "" : "blue"'>{{periodList.wu_wu5==""?'': periodList.wu_wu5}}</li>
                            	<li @click="periodList.zuo_wu_wu6  == '' ? '' : showzuo($event,periodList.zuo_wu_wu6 )" :class='periodList.zuo_wu_wu6 == "" ? "" : "blue"'>{{periodList.wu_wu6==""?'': periodList.wu_wu6}}</li>
                            	<li @click="periodList.zuo_wu_wu7  == '' ? '' : showzuo($event,periodList.zuo_wu_wu7 )" :class='periodList.zuo_wu_wu7 == "" ? "" : "blue"'>{{periodList.wu_wu7==""?'': periodList.wu_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.zuo_wc_wu  == '' ? '' : showzuo($event,periodList.zuo_wc_wu)" :class='periodList.zuo_wc_wu == "" ? "" : "blue"'>{{periodList.wc_wu==""?'': periodList.wc_wu}}</li>
                            	<li @click="periodList.zuo_wc_wu2  == '' ? '' : showzuo($event,periodList.zuo_wc_wu2)" :class='periodList.zuo_wc_wu2 == "" ? "" : "blue"'>{{periodList.wc_wu2==""?'':periodList.wc_wu2}}</li>
                            	<li @click="periodList.zuo_wc_wu3  == '' ? '' : showzuo($event,periodList.zuo_wc_wu3)" :class='periodList.zuo_wc_wu3 == "" ? "" : "blue"'>{{periodList.wc_wu3==""?'': periodList.wc_wu3}}</li>
                            	<li @click="periodList.zuo_wc_wu4  == '' ? '' : showzuo($event,periodList.zuo_wc_wu4)" :class='periodList.zuo_wc_wu4 == "" ? "" : "blue"'>{{periodList.wc_wu4==""?'': periodList.wc_wu4}}</li>
                            	<li @click="periodList.zuo_wc_wu5  == '' ? '' : showzuo($event,periodList.zuo_wc_wu5)" :class='periodList.zuo_wc_wu5 == "" ? "" : "blue"'>{{periodList.wc_wu5==""?'': periodList.wc_wu5}}</li>
                            	<li @click="periodList.zuo_wc_wu6  == '' ? '' : showzuo($event,periodList.zuo_wc_wu6)" :class='periodList.zuo_wc_wu6 == "" ? "" : "blue"'>{{periodList.wc_wu6==""?'': periodList.wc_wu6}}</li>
                            	<li @click="periodList.zuo_wc_wu7  == '' ? '' : showzuo($event,periodList.zuo_wc_wu7)" :class='periodList.zuo_wc_wu7 == "" ? "" : "blue"'>{{periodList.wc_wu7==""?'': periodList.wc_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!--星期六-->
                <div class="list">
                    <div class="list-header">星期六</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.liu_zuo  == '' ? '' : showzuo($event,periodList.liu_zuo)" :class='periodList.liu_zuo == "" ? "" : "blue"'>{{periodList.liu==""?'': periodList.liu}}</li>
                            	<li @click="periodList.liu_zuo2  == '' ? '' : showzuo($event,periodList.liu_zuo2)" :class='periodList.liu_zuo2 == "" ? "" : "blue"'>{{periodList.liu2==""?'': periodList.liu2}}</li>
                            	<li @click="periodList.liu_zuo3  == '' ? '' : showzuo($event,periodList.liu_zuo3)" :class='periodList.liu_zuo3 == "" ? "" : "blue"'>{{periodList.liu3==""?'': periodList.liu3}}</li>
                            	<li @click="periodList.liu_zuo4  == '' ? '' : showzuo($event,periodList.liu_zuo4)" :class='periodList.liu_zuo4 == "" ? "" : "blue"'>{{periodList.liu4==""?'': periodList.liu4}}</li>
                            	<li @click="periodList.liu_zuo5  == '' ? '' : showzuo($event,periodList.liu_zuo5)" :class='periodList.liu_zuo5 == "" ? "" : "blue"'>{{periodList.liu5==""?'': periodList.liu5}}</li>
                            	<li @click="periodList.liu_zuo6  == '' ? '' : showzuo($event,periodList.liu_zuo6)" :class='periodList.liu_zuo6 == "" ? "" : "blue"'>{{periodList.liu6==""?'': periodList.liu6}}</li>
                            	<li @click="periodList.liu_zuo7  == '' ? '' : showzuo($event,periodList.liu_zuo7)" :class='periodList.liu_zuo7 == "" ? "" : "blue"'>{{periodList.liu7==""?'': periodList.liu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.zuo_liu_liu  == '' ? '' : showzuo($event,periodList.zuo_liu_liu)" :class='periodList.zuo_liu_liu == "" ? "" : "blue"'>{{periodList.liu_liu==""?'': periodList.liu_liu}}</li>
                            	<li @click="periodList.zuo_liu_liu2  == '' ? '' : showzuo($event,periodList.zuo_liu_liu2)" :class='periodList.zuo_liu_liu2 == "" ? "" : "blue"'>{{periodList.liu_liu2==""?'': periodList.liu_liu2}}</li>
                            	<li @click="periodList.zuo_liu_liu3  == '' ? '' : showzuo($event,periodList.zuo_liu_liu3)" :class='periodList.zuo_liu_liu3 == "" ? "" : "blue"'>{{periodList.liu_liu3==""?'': periodList.liu_liu3}}</li>
                            	<li @click="periodList.zuo_liu_liu4  == '' ? '' : showzuo($event,periodList.zuo_liu_liu4)" :class='periodList.zuo_liu_liu4 == "" ? "" : "blue"'>{{periodList.liu_liu4==""?'': periodList.liu_liu4}}</li>
                            	<li @click="periodList.zuo_liu_liu5  == '' ? '' : showzuo($event,periodList.zuo_liu_liu5)" :class='periodList.zuo_liu_liu5 == "" ? "" : "blue"'>{{periodList.liu_liu5==""?'': periodList.liu_liu5}}</li>
                            	<li @click="periodList.zuo_liu_liu6  == '' ? '' : showzuo($event,periodList.zuo_liu_liu6)" :class='periodList.zuo_liu_liu6 == "" ? "" : "blue"'>{{periodList.liu_liu6==""?'': periodList.liu_liu6}}</li>
                            	<li @click="periodList.zuo_liu_liu7  == '' ? '' : showzuo($event,periodList.zuo_liu_liu7)" :class='periodList.zuo_liu_liu7 == "" ? "" : "blue"'>{{periodList.liu_liu7==""?'': periodList.liu_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.zuo_wc_liu  == '' ? '' : showzuo($event,periodList.zuo_wc_liu)" :class='periodList.zuo_wc_liu == "" ? "" : "blue"'>{{periodList.wc_liu==""?'': periodList.wc_liu}}</li>
                            	<li @click="periodList.zuo_wc_liu2  == '' ? '' : showzuo($event,periodList.zuo_wc_liu2)"  :class='periodList.zuo_wc_liu2 == "" ? "" : "blue"'>{{periodList.wc_liu2==""?'': periodList.wc_liu2}}</li>
                            	<li @click="periodList.zuo_wc_liu3  == '' ? '' : showzuo($event,periodList.zuo_wc_liu3)"  :class='periodList.zuo_wc_liu3 == "" ? "" : "blue"'>{{periodList.wc_liu3==""?'':periodList.wc_liu3}}</li>
                            	<li @click="periodList.zuo_wc_liu4  == '' ? '' : showzuo($event,periodList.zuo_wc_liu4)"  :class='periodList.zuo_wc_liu4 == "" ? "" : "blue"'>{{periodList.wc_liu4==""?'': periodList.wc_liu4}}</li>
                            	<li @click="periodList.zuo_wc_liu5 == '' ? '' : showzuo($event,periodList.zuo_wc_liu5)"  :class='periodList.zuo_wc_liu5 == "" ? "" : "blue"'>{{periodList.wc_liu5==""?'': periodList.wc_liu5}}</li>
                            	<li @click="periodList.zuo_wc_liu6  == '' ? '' : showzuo($event,periodList.zuo_wc_liu6)"  :class='periodList.zuo_wc_liu6 == "" ? "" : "blue"'>{{periodList.wc_liu6==""?'': periodList.wc_liu6}}</li>
                            	<li @click="periodList.zuo_wc_liu7  == '' ? '' : showzuo($event,periodList.zuo_wc_liu7)"  :class='periodList.zuo_wc_liu7 == "" ? "" : "blue"'>{{periodList.wc_liu7==""?'': periodList.wc_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--星期日-->
                <div class="list">
                    <div class="list-header">星期日</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.ri_zuo  == '' ? '' : showzuo($event,periodList.ri_zuo)"  :class='periodList.ri_zuo == "" ? "" : "blue"'>{{periodList.ri==""?'': periodList.ri}}</li>
                            	<li @click="periodList.ri_zuo2  == '' ? '' : showzuo($event,periodList.ri_zuo2)" :class='periodList.ri_zuo2 == "" ? "" : "blue"'>{{periodList.ri2==""?'': periodList.ri2}}</li>
                            	<li @click="periodList.ri_zuo3  == '' ? '' : showzuo($event,periodList.ri_zuo3)" :class='periodList.ri_zuo3 == "" ? "" : "blue"'>{{periodList.ri3==""?'': periodList.ri3}}</li>
                            	<li @click="periodList.ri_zuo4  == '' ? '' : showzuo($event,periodList.ri_zuo4)" :class='periodList.ri_zuo4 == "" ? "" : "blue"'>{{periodList.ri4==""?'': periodList.ri4}}</li>
                            	<li @click="periodList.ri_zuo5  == '' ? '' : showzuo($event,periodList.ri_zuo5)" :class='periodList.ri_zuo5 == "" ? "" : "blue"'>{{periodList.ri5==""?'': periodList.ri5}}</li>
                            	<li @click="periodList.ri_zuo6  == '' ? '' : showzuo($event,periodList.ri_zuo6)" :class='periodList.ri_zuo6 == "" ? "" : "blue"'>{{periodList.ri6==""?'': periodList.ri6}}</li>
                            	<li @click="periodList.ri_zuo7  == '' ? '' : showzuo($event,periodList.ri_zuo7)" :class='periodList.ri_zuo7 == "" ? "" : "blue"'>{{periodList.ri7==""?'': periodList.ri7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.zuo_wu_ri == '' ? '' : showzuo($event,periodList.zuo_wu_ri)" :class='periodList.zuo_wu_ri == "" ? "" : "blue"'>{{periodList.wu_ri==""?'': periodList.wu_ri}}</li>
                            	<li @click="periodList.zuo_wu_ri2 == '' ? '' : showzuo($event,periodList.zuo_wu_ri2)"  :class='periodList.zuo_wu_ri2 == "" ? "" : "blue"'>{{periodList.wu_ri2==""?'': periodList.wu_ri2}}</li>
                            	<li @click="periodList.zuo_wu_ri3 == '' ? '' : showzuo($event,periodList.zuo_wu_ri3)"  :class='periodList.zuo_wu_ri3 == "" ? "" : "blue"'>{{periodList.wu_ri3==""?'': periodList.wu_ri3}}</li>
                            	<li @click="periodList.zuo_wu_ri4 == '' ? '' : showzuo($event,periodList.zuo_wu_ri4)"  :class='periodList.zuo_wu_ri4 == "" ? "" : "blue"'>{{periodList.wu_ri4==""?'': periodList.wu_ri4}}</li>
                            	<li @click="periodList.zuo_wu_ri5 == '' ? '' : showzuo($event,periodList.zuo_wu_ri5)"  :class='periodList.zuo_wu_ri5 == "" ? "" : "blue"'>{{periodList.wu_ri5==""?'': periodList.wu_ri5}}</li>
                            	<li @click="periodList.zuo_wu_ri6 == '' ? '' : showzuo($event,periodList.zuo_wu_ri6)"  :class='periodList.zuo_wu_ri6 == "" ? "" : "blue"'>{{periodList.wu_ri6==""?'': periodList.wu_ri6}}</li>
                            	<li @click="periodList.zuo_wu_ri7 == '' ? '' : showzuo($event,periodList.zuo_wu_ri7)"  :class='periodList.zuo_wu_ri7 == "" ? "" : "blue"'>{{periodList.wu_ri7==""?'': periodList.wu_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="periodList.zuo_wc_ri  == '' ? '' : showzuo($event,periodList.zuo_wc_ri )"  :class='periodList.zuo_wc_ri == "" ? "" : "blue"'>{{periodList.wc_ri==""?'': periodList.wc_ri}}</li>
                            	<li @click="periodList.zuo_wc_ri2  == '' ? '' : showzuo($event,periodList.zuo_wc_ri2 )" :class='periodList.zuo_wc_ri2 == "" ? "" : "blue"'>{{periodList.wc_ri2==""?'': periodList.wc_ri2}}</li>
                            	<li @click="periodList.zuo_wc_ri3  == '' ? '' : showzuo($event,periodList.zuo_wc_ri3 )" :class='periodList.zuo_wc_ri3 == "" ? "" : "blue"'>{{periodList.wc_ri3==""?'': periodList.wc_ri3}}</li>
                            	<li @click="periodList.zuo_wc_ri4  == '' ? '' : showzuo($event,periodList.zuo_wc_ri4 )" :class='periodList.zuo_wc_ri4 == "" ? "" : "blue"'>{{periodList.wc_ri4==""?'': periodList.wc_ri4}}</li>
                            	<li @click="periodList.zuo_wc_ri5  == '' ? '' : showzuo($event,periodList.zuo_wc_ri5 )" :class='periodList.zuo_wc_ri5 == "" ? "" : "blue"'>{{periodList.wc_ri5==""?'': periodList.wc_ri5}}</li>
                            	<li @click="periodList.zuo_wc_ri6  == '' ? '' : showzuo($event,periodList.zuo_wc_ri6 )" :class='periodList.zuo_wc_ri6 == "" ? "" : "blue"'>{{periodList.wc_ri6==""?'': periodList.wc_ri6}}</li>
                            	<li @click="periodList.zuo_wc_ri7  == '' ? '' : showzuo($event,periodList.zuo_wc_ri7 )" :class='periodList.zuo_wc_ri7 == "" ? "" : "blue"'>{{periodList.wc_ri7==""?'': periodList.wc_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tip" style="margin-top: 42px;">注意   <span style="padding-left: 20px;color:#000000">  {{takeOut.zhuyi==null?'':takeOut.zhuyi}}</span></div>
            </div>
        <!--第二周--> 
            <div class="plan-lists" v-if='status=="two_status"'>
                <div class="list">
                    <div class="list-header">星期一</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <!--<div class="content">
                                <span class="blue" @click="blueBtn()">牛奶100ml</span>
                                <span>鸡蛋1个</span>
                            </div>-->
                            <ul>
                            	<li @click="sanList.sanone_zuo == '' ? '' : showzuo($event,sanList.sanone_zuo)"  :class='sanList.sanone_zuo == "" ? "" : "blue"'>{{twoList.erone==""?'': twoList.erone}}</li>
                            	<li @click="sanList.sanone_zuo2 == '' ? '' : showzuo($event,sanList.sanone_zuo2)" :class='sanList.sanone_zuo2 == "" ? "" : "blue"'>{{twoList.erone2==""?'': twoList.erone2}}</li>
                            	<li @click="sanList.sanone_zuo3 == '' ? '' : showzuo($event,sanList.sanone_zuo3)" :class='sanList.sanone_zuo3 == "" ? "" : "blue"'>{{twoList.erone3==""?'': twoList.erone3}}</li>
                            	<li @click="sanList.sanone_zuo4 == '' ? '' : showzuo($event,sanList.sanone_zuo4)" :class='sanList.sanone_zuo4 == "" ? "" : "blue"'>{{twoList.erone4==""?'': twoList.erone4}}</li>
                            	<li @click="sanList.sanone_zuo5 == '' ? '' : showzuo($event,sanList.sanone_zuo5)" :class='sanList.sanone_zuo5 == "" ? "" : "blue"'>{{twoList.erone5==""?'': twoList.erone5}}</li>
                            	<li @click="sanList.sanone_zuo6 == '' ? '' : showzuo($event,sanList.sanone_zuo6)" :class='sanList.sanone_zuo6 == "" ? "" : "blue"'>{{twoList.erone6==""?'': twoList.erone6}}</li>
                            	<li @click="sanList.sanone_zuo7 == '' ? '' : showzuo($event,sanList.sanone_zuo7)" :class='sanList.sanone_zuo7 == "" ? "" : "blue"'>{{twoList.erone7==""?'': twoList.erone7}}</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="twoList.erzuo_wu_one == '' ? '' : showzuo($event,twoList.erzuo_wu_one)" :class='twoList.erzuo_wu_one == "" ? "" : "blue"'>{{twoList.erwu_one==""?'': twoList.erwu_one}}</li>
                            	<li  @click="twoList.erzuo_wu_one2 == '' ? '' : showzuo($event,twoList.erzuo_wu_one2)"  :class='twoList.erzuo_wu_one2 == "" ? "" : "blue"'>{{twoList.erwu_one2==""?'': twoList.erwu_one2}}</li>
                            	<li  @click="twoList.erzuo_wu_one3 == '' ? '' : showzuo($event,twoList.erzuo_wu_one3)"  :class='twoList.erzuo_wu_one3 == "" ? "" : "blue"'>{{twoList.erwu_one3==""?'': twoList.erwu_one3}}</li>
                            	<li  @click="twoList.erzuo_wu_one4 == '' ? '' : showzuo($event,twoList.erzuo_wu_one4)"  :class='twoList.erzuo_wu_one4 == "" ? "" : "blue"'>{{twoList.erwu_one4==""?'': twoList.erwu_one4}}</li>
                            	<li  @click="twoList.erzuo_wu_one5 == '' ? '' : showzuo($event,twoList.erzuo_wu_one5)"  :class='twoList.erzuo_wu_one5 == "" ? "" : "blue"'>{{twoList.erwu_one5==""?'': twoList.erwu_one5}}</li>
                            	<li  @click="twoList.erzuo_wu_one6 == '' ? '' : showzuo($event,twoList.erzuo_wu_one6)"  :class='twoList.erzuo_wu_one6 == "" ? "" : "blue"'>{{twoList.erwu_one6==""?'': twoList.erwu_one6}}</li>
                            	<li  @click="twoList.erzuo_wu_one7 == '' ? '' : showzuo($event,twoList.erzuo_wu_one7)"  :class='twoList.erzuo_wu_one7 == "" ? "" : "blue"'>{{twoList.erwu_one7==""?'': twoList.erwu_one7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="twoList.erzuo_wc_one == '' ? '' : showzuo($event,twoList.erzuo_wc_one )"  :class='twoList.erzuo_wc_one == "" ? "" : "blue"'>{{twoList.erwc_one==""?'': twoList.erwc_one}}</li>
                            	<li  @click="twoList.erzuo_wc_one2 == '' ? '' : showzuo($event,twoList.erzuo_wc_one2 )" :class='twoList.erzuo_wc_one2 == "" ? "" : "blue"'>{{twoList.erwc_one2==""?'': twoList.erwc_one2}}</li>
                            	<li  @click="twoList.erzuo_wc_one3== '' ? '' : showzuo($event,twoList.erzuo_wc_one3 )" :class='twoList.erzuo_wc_one3 == "" ? "" : "blue"'>{{twoList.erwc_one3==""?'': twoList.erwc_one3}}</li>
                            	<li  @click="twoList.erzuo_wc_one4 == '' ? '' : showzuo($event,twoList.erzuo_wc_one4 )" :class='twoList.erzuo_wc_one4 == "" ? "" : "blue"'>{{twoList.erwc_one4==""?'': twoList.erwc_one4}}</li>
                            	<li  @click="twoList.erzuo_wc_one5 == '' ? '' : showzuo($event,twoList.erzuo_wc_one5 )" :class='twoList.erzuo_wc_one5 == "" ? "" : "blue"'>{{twoList.erwc_one5==""?'': twoList.erwc_one5}}</li>
                            	<li  @click="twoList.erzuo_wc_one6 == '' ? '' : showzuo($event,twoList.erzuo_wc_one6 )" :class='twoList.erzuo_wc_one6 == "" ? "" : "blue"'>{{twoList.erwc_one6==""?'': twoList.erwc_one6}}</li>
                            	<li  @click="twoList.erzuo_wc_one7 == '' ? '' : showzuo($event,twoList.erzuo_wc_one7 )" :class='twoList.erzuo_wc_one7 == "" ? "" : "blue"'>{{twoList.erwc_one7==""?'': twoList.erwc_one7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">

                    <div class="list-header">星期二</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="twoList.ertwo_zuo == '' ? '' : showzuo($event,twoList.ertwo_zuo )" :class='twoList.ertwo_zuo == "" ? "" : "blue"'>{{twoList.ertwo==""?'': twoList.ertwo}}</li>
                            	<li  @click="twoList.ertwo_zuo2 == '' ? '' : showzuo($event,twoList.ertwo_zuo2 )" :class='twoList.ertwo_zuo2 == "" ? "" : "blue"'>{{twoList.ertwo2==""?'': twoList.ertwo2}}</li>
                            	<li  @click="twoList.ertwo_zuo3 == '' ? '' : showzuo($event,twoList.ertwo_zuo3 )" :class='twoList.ertwo_zuo3 == "" ? "" : "blue"'>{{twoList.ertwo3==""?'': twoList.ertwo3}}</li>
                            	<li  @click="twoList.ertwo_zuo4 == '' ? '' : showzuo($event,twoList.ertwo_zuo4 )" :class='twoList.ertwo_zuo4 == "" ? "" : "blue"'>{{twoList.ertwo4==""?'': twoList.ertwo4}}</li>
                            	<li  @click="twoList.ertwo_zuo5 == '' ? '' : showzuo($event,twoList.ertwo_zuo5 )" :class='twoList.ertwo_zuo5 == "" ? "" : "blue"'>{{twoList.ertwo5==""?'': twoList.ertwo5}}</li>
                            	<li  @click="twoList.ertwo_zuo6 == '' ? '' : showzuo($event,twoList.ertwo_zuo6 )" :class='twoList.ertwo_zuo6 == "" ? "" : "blue"'>{{twoList.ertwo6==""?'': twoList.ertwo6}}</li>
                            	<li  @click="twoList.ertwo_zuo7 == '' ? '' : showzuo($event,twoList.ertwo_zuo7 )" :class='twoList.ertwo_zuo7 == "" ? "" : "blue"'>{{twoList.ertwo7==""?'': twoList.ertwo7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li  @click="twoList.erzuo_wu_two == '' ? '' : showzuo($event,twoList.erzuo_wu_two )" :class='twoList.erzuo_wu_two == "" ? "" : "blue"'>{{twoList.erwu_two==""?'': twoList.erwu_two}}</li>
                            	<li @click="twoList.erzuo_wu_two2 == '' ? '' : showzuo($event,twoList.erzuo_wu_two2 )" :class='twoList.erzuo_wu_two2 == "" ? "" : "blue"'>{{twoList.erwu_two2==""?'': twoList.erwu_two2}}</li>
                            	<li @click="twoList.erzuo_wu_two3 == '' ? '' : showzuo($event,twoList.erzuo_wu_two3 )" :class='twoList.erzuo_wu_two3 == "" ? "" : "blue"'>{{twoList.erwu_two3==""?'': twoList.erwu_two3}}</li>
                            	<li @click="twoList.erzuo_wu_two4 == '' ? '' : showzuo($event,twoList.erzuo_wu_two4 )" :class='twoList.erzuo_wu_two4 == "" ? "" : "blue"'>{{twoList.erwu_two4==""?'': twoList.erwu_two4}}</li>
                            	<li @click="twoList.erzuo_wu_two5 == '' ? '' : showzuo($event,twoList.erzuo_wu_two5 )" :class='twoList.erzuo_wu_two5 == "" ? "" : "blue"'>{{twoList.erwu_two5==""?'': twoList.erwu_two5}}</li>
                            	<li @click="twoList.erzuo_wu_two6 == '' ? '' : showzuo($event,twoList.erzuo_wu_two6 )" :class='twoList.erzuo_wu_two6 == "" ? "" : "blue"'>{{twoList.erwu_two6==""?'': twoList.erwu_two6}}</li>
                            	<li @click="twoList.erzuo_wu_two7 == '' ? '' : showzuo($event,twoList.erzuo_wu_two7 )" :class='twoList.erzuo_wu_two7 == "" ? "" : "blue"'>{{twoList.erwu_two7==""?'': twoList.erwu_two7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wc_two == '' ? '' : showzuo($event,twoList.erzuo_wc_two )" :class='twoList.erzuo_wc_two == "" ? "" : "blue"'>{{twoList.erwc_two==""?'': twoList.erwc_two}}</li>
                            	<li @click="twoList.erzuo_wc_two2 == '' ? '' : showzuo($event,twoList.erzuo_wc_two2 )" :class='twoList.erzuo_wc_two2 == "" ? "" : "blue"'>{{twoList.erwc_two2==""?'': twoList.erwc_two2}}</li>
                            	<li @click="twoList.erzuo_wc_two3 == '' ? '' : showzuo($event,twoList.erzuo_wc_two3 )" :class='twoList.erzuo_wc_two3 == "" ? "" : "blue"'>{{twoList.erwc_two3==""?'': twoList.erwc_two3}}</li>
                            	<li @click="twoList.erzuo_wc_two4 == '' ? '' : showzuo($event,twoList.erzuo_wc_two4 )" :class='twoList.erzuo_wc_two4 == "" ? "" : "blue"'>{{twoList.erwc_two4==""?'': twoList.erwc_two4}}</li>
                            	<li @click="twoList.erzuo_wc_two5 == '' ? '' : showzuo($event,twoList.erzuo_wc_two5 )" :class='twoList.erzuo_wc_two5 == "" ? "" : "blue"'>{{twoList.erwc_two5==""?'': twoList.erwc_two5}}</li>
                            	<li @click="twoList.erzuo_wc_two6 == '' ? '' : showzuo($event,twoList.erzuo_wc_two6 )" :class='twoList.erzuo_wc_two6 == "" ? "" : "blue"'>{{twoList.erwc_two6==""?'': twoList.erwc_two6}}</li>
                            	<li @click="twoList.erzuo_wc_two7 == '' ? '' : showzuo($event,twoList.erzuo_wc_two7 )" :class='twoList.erzuo_wc_two7 == "" ? "" : "blue"'>{{twoList.erwc_two7==""?'': twoList.erwc_two7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期三</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.ersan_zuo == '' ? '' : showzuo($event,twoList.ersan_zuo )" :class='twoList.ersan_zuo== "" ? "" : "blue"'>{{twoList.ersan==""?'': twoList.ersan}}</li>
                            	<li @click="twoList.ersan_zuo2 == '' ? '' : showzuo($event,twoList.ersan_zuo2 )" :class='twoList.ersan_zuo2 == "" ? "" : "blue"'>{{twoList.ersan2==""?'': twoList.ersan2}}</li>
                            	<li @click="twoList.ersan_zuo3 == '' ? '' : showzuo($event,twoList.ersan_zuo3 )" :class='twoList.ersan_zuo3 == "" ? "" : "blue"'>{{twoList.ersan3==""?'': twoList.ersan3}}</li>
                            	<li @click="twoList.ersan_zuo4 == '' ? '' : showzuo($event,twoList.ersan_zuo4 )" :class='twoList.ersan_zuo4 == "" ? "" : "blue"'>{{twoList.ersan4==""?'': twoList.ersan4}}</li>
                            	<li @click="twoList.ersan_zuo5 == '' ? '' : showzuo($event,twoList.ersan_zuo5 )" :class='twoList.ersan_zuo5 == "" ? "" : "blue"'>{{twoList.ersan5==""?'': twoList.ersan5}}</li>
                            	<li @click="twoList.ersan_zuo6 == '' ? '' : showzuo($event,twoList.ersan_zuo6 )" :class='twoList.ersan_zuo6 == "" ? "" : "blue"'>{{twoList.ersan6==""?'': twoList.ersan6}}</li>
                            	<li @click="twoList.ersan_zuo7 == '' ? '' : showzuo($event,twoList.ersan_zuo7)" :class='twoList.ersan_zuo7 == "" ? "" : "blue"'>{{twoList.ersan7==""?'': twoList.ersan7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wu_san == '' ? '' : showzuo($event,twoList.erzuo_wu_san )" :class='twoList.erzuo_wu_san == "" ? "" : "blue"'>{{twoList.erwu_san==""?'': twoList.erwu_san}}</li>
                            	<li @click="twoList.erzuo_wu_san2 == '' ? '' : showzuo($event,twoList.erzuo_wu_san2 )" :class='twoList.erzuo_wu_san2 == "" ? "" : "blue"'>{{twoList.erwu_san2==""?'': twoList.erwu_san2}}</li>
                            	<li @click="twoList.erzuo_wu_san3 == '' ? '' : showzuo($event,twoList.erzuo_wu_san3 )" :class='twoList.erzuo_wu_san3 == "" ? "" : "blue"'>{{twoList.erwu_san3==""?'': twoList.erwu_san3}}</li>
                            	<li @click="twoList.erzuo_wu_san4 == '' ? '' : showzuo($event,twoList.erzuo_wu_san4 )" :class='twoList.erzuo_wu_san4 == "" ? "" : "blue"'>{{twoList.erwu_san4==""?'': twoList.erwu_san4}}</li>
                            	<li @click="twoList.erzuo_wu_san5 == '' ? '' : showzuo($event,twoList.erzuo_wu_san5 )" :class='twoList.erzuo_wu_san5 == "" ? "" : "blue"'>{{twoList.erwu_san5==""?'': twoList.erwu_san5}}</li>
                            	<li @click="twoList.erzuo_wu_san6 == '' ? '' : showzuo($event,twoList.erzuo_wu_san6 )" :class='twoList.erzuo_wu_san6 == "" ? "" : "blue"'>{{twoList.erwu_san6==""?'': twoList.erwu_san6}}</li>
                            	<li @click="twoList.erzuo_wu_san7 == '' ? '' : showzuo($event,twoList.erzuo_wu_san7 )" :class='twoList.erzuo_wu_san7 == "" ? "" : "blue"'>{{twoList.erwu_san7==""?'': twoList.erwu_san7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wc_san == '' ? '' : showzuo($event,twoList.erzuo_wc_san )" :class='twoList.erzuo_wc_san == "" ? "" : "blue"'>{{twoList.erwc_san==""?'': twoList.erwc_san}}</li>
                            	<li @click="twoList.erzuo_wc_san2 == '' ? '' : showzuo($event,twoList.erzuo_wc_san2 )" :class='twoList.erzuo_wc_san == "" ? "" : "blue"'>{{twoList.erwc_san2==""?'': twoList.erwc_san2}}</li>
                            	<li @click="twoList.erzuo_wc_san3 == '' ? '' : showzuo($event,twoList.erzuo_wc_san3 )" :class='twoList.erzuo_wc_san == "" ? "" : "blue"'>{{twoList.erwc_san3==""?'': twoList.erwc_san3}}</li>
                            	<li @click="twoList.erzuo_wc_san4 == '' ? '' : showzuo($event,twoList.erzuo_wc_san4 )" :class='twoList.erzuo_wc_san== "" ? "" : "blue"'>{{twoList.erwc_san4==""?'': twoList.erwc_san4}}</li>
                            	<li @click="twoList.erzuo_wc_san5 == '' ? '' : showzuo($event,twoList.erzuo_wc_san5 )" :class='twoList.erzuo_wc_san == "" ? "" : "blue"'>{{twoList.erwc_san5==""?'': twoList.erwc_san5}}</li>
                            	<li @click="twoList.erzuo_wc_san6 == '' ? '' : showzuo($event,twoList.erzuo_wc_san6 )" :class='twoList.erzuo_wc_san == "" ? "" : "blue"'>{{twoList.erwc_san6==""?'': twoList.erwc_san6}}</li>
                            	<li @click="twoList.erzuo_wc_san7 == '' ? '' : showzuo($event,twoList.erzuo_wc_san7 )" :class='twoList.erzuo_wc_san == "" ? "" : "blue"'>{{twoList.erwc_san7==""?'': twoList.erwc_san7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期四</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.ersi_zuo == '' ? '' : showzuo($event,twoList.twoList.ersi_zuo )" :class='twoList.ersi_zuo == "" ? "" : "blue"'>{{twoList.ersi==""?'': twoList.ersi}}</li>
                            	<li @click="twoList.ersi_zuo2 == '' ? '' : showzuo($event,twoList.twoList.ersi_zuo2 )" :class='twoList.ersi_zuo2 == "" ? "" : "blue"'>{{twoList.ersi2==""?'': twoList.ersi2}}</li>
                            	<li @click="twoList.ersi_zuo3 == '' ? '' : showzuo($event,twoList.twoList.ersi_zuo3 )" :class='twoList.ersi_zuo3 == "" ? "" : "blue"'>{{twoList.ersi3==""?'': twoList.ersi3}}</li>
                            	<li @click="twoList.ersi_zuo4 == '' ? '' : showzuo($event,twoList.twoList.ersi_zuo4 )" :class='twoList.ersi_zuo4 == "" ? "" : "blue"'>{{twoList.ersi4==""?'': twoList.ersi4}}</li>
                            	<li @click="twoList.ersi_zuo5 == '' ? '' : showzuo($event,twoList.twoList.ersi_zuo5 )" :class='twoList.ersi_zuo5 == "" ? "" : "blue"'>{{twoList.ersi5==""?'': twoList.ersi5}}</li>
                            	<li @click="twoList.ersi_zuo6 == '' ? '' : showzuo($event,twoList.twoList.ersi_zuo6 )" :class='twoList.ersi_zuo6 == "" ? "" : "blue"'>{{twoList.ersi6==""?'': twoList.ersi6}}</li>
                            	<li @click="twoList.ersi_zuo7 == '' ? '' : showzuo($event,twoList.twoList.ersi_zuo7 )" :class='twoList.ersi_zuo7 == "" ? "" : "blue"'>{{twoList.ersi7==""?'': twoList.ersi7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wu_si == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_si )" :class='twoList.erzuo_wu_si == "" ? "" : "blue"'>{{twoList.erwu_si==""?'': twoList.erwu_si}}</li>
                            	<li @click="twoList.erzuo_wu_si2 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_si2 )" :class='twoList.erzuo_wu_si2 == "" ? "" : "blue"'>{{twoList.erwu_si2==""?'': twoList.erwu_si2}}</li>
                            	<li @click="twoList.erzuo_wu_si3 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_si3 )" :class='twoList.erzuo_wu_si3 == "" ? "" : "blue"'>{{twoList.erwu_si3==""?'': twoList.erwu_si3}}</li>
                            	<li @click="twoList.erzuo_wu_si4 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_si4 )" :class='twoList.erzuo_wu_si4 == "" ? "" : "blue"'>{{twoList.erwu_si4==""?'': twoList.erwu_si4}}</li>
                            	<li @click="twoList.erzuo_wu_si5 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_si5 )" :class='twoList.erzuo_wu_si5 == "" ? "" : "blue"'>{{twoList.erwu_si5==""?'': twoList.erwu_si5}}</li>
                            	<li @click="twoList.erzuo_wu_si6 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_si6 )" :class='twoList.erzuo_wu_si6 == "" ? "" : "blue"'>{{twoList.erwu_si6==""?'': twoList.erwu_si6}}</li>
                            	<li @click="twoList.erzuo_wu_si7 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_si7 )" :class='twoList.erzuo_wu_si7 == "" ? "" : "blue"'>{{twoList.erwu_si7==""?'': twoList.erwu_si7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wc_si  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_si  )" :class='twoList.erzuo_wc_si == "" ? "" : "blue"'>{{twoList.erwc_si==""?'': twoList.erwc_si}}</li>
                            	<li @click="twoList.erzuo_wc_si2  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_si2  )" :class='twoList.erzuo_wc_si2 == "" ? "" : "blue"'>{{twoList.erwc_si2==""?'': twoList.erwc_si2}}</li>
                            	<li @click="twoList.erzuo_wc_si3  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_si3  )" :class='twoList.erzuo_wc_si3 == "" ? "" : "blue"'>{{twoList.erwc_si3==""?'': twoList.erwc_si3}}</li>
                            	<li @click="twoList.erzuo_wc_si4  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_si4  )" :class='twoList.erzuo_wc_si4 == "" ? "" : "blue"'>{{twoList.erwc_si4==""?'': twoList.erwc_si4}}</li>
                            	<li @click="twoList.erzuo_wc_si5  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_si5 )" :class='twoList.erzuo_wc_si5 == "" ? "" : "blue"'>{{twoList.erwc_si5==""?'': twoList.erwc_si5}}</li>
                            	<li @click="twoList.erzuo_wc_si6  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_si6  )" :class='twoList.erzuo_wc_si6 == "" ? "" : "blue"'>{{twoList.erwc_si6==""?'': twoList.erwc_si6}}</li>
                            	<li @click="twoList.erzuo_wc_si7  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_si7  )" :class='twoList.erzuo_wc_si7 == "" ? "" : "blue"'>{{twoList.erwc_si7==""?'': twoList.erwc_si7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期五</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erwu_zuo   == '' ? '' : showzuo($event,twoList.twoList.erwu_zuo  )" :class='twoList.erwu_zuo == "" ? "" : "blue"'>{{twoList.erwu==""?'': twoList.erwu}}</li>
                            	<li @click="twoList.erwu_zuo2   == '' ? '' : showzuo($event,twoList.twoList.erwu_zuo2  )" :class='twoList.erwu_zuo2 == "" ? "" : "blue"'>{{twoList.erwu2==""?'': twoList.erwu2}}</li>
                            	<li @click="twoList.erwu_zuo3   == '' ? '' : showzuo($event,twoList.twoList.erwu_zuo3  )" :class='twoList.erwu_zuo3 == "" ? "" : "blue"'>{{twoList.erwu3==""?'': twoList.erwu3}}</li>
                            	<li @click="twoList.erwu_zuo4   == '' ? '' : showzuo($event,twoList.twoList.erwu_zuo4  )" :class='twoList.erwu_zuo4 == "" ? "" : "blue"'>{{twoList.erwu4==""?'': twoList.erwu4}}</li>
                            	<li @click="twoList.erwu_zuo5   == '' ? '' : showzuo($event,twoList.twoList.erwu_zuo5  )" :class='twoList.erwu_zuo5 == "" ? "" : "blue"'>{{twoList.erwu5==""?'': twoList.erwu5}}</li>
                            	<li @click="twoList.erwu_zuo6   == '' ? '' : showzuo($event,twoList.twoList.erwu_zuo6  )" :class='twoList.erwu_zuo6 == "" ? "" : "blue"'>{{twoList.erwu6==""?'': twoList.erwu6}}</li>
                            	<li @click="twoList.erwu_zuo7   == '' ? '' : showzuo($event,twoList.twoList.erwu_zuo7  )" :class='twoList.erwu_zuo7 == "" ? "" : "blue"'>{{twoList.erwu7==""?'': twoList.erwu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wu_wu  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_wu  )" :class='twoList.erzuo_wu_wu == "" ? "" : "blue"'>{{twoList.erwu_wu==""?'': twoList.erwu_wu}}</li>
                            	<li @click="twoList.erzuo_wu_wu2  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_wu2  )" :class='twoList.erzuo_wu_wu2 == "" ? "" : "blue"'>{{twoList.erwu_wu2==""?'': twoList.erwu_wu2}}</li>
                            	<li @click="twoList.erzuo_wu_wu3  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_wu3  )" :class='twoList.erzuo_wu_wu3 == "" ? "" : "blue"'>{{twoList.erwu_wu3==""?'': twoList.erwu_wu3}}</li>
                            	<li @click="twoList.erzuo_wu_wu4  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_wu4  )" :class='twoList.erzuo_wu_wu4 == "" ? "" : "blue"'>{{twoList.erwu_wu4==""?'': twoList.erwu_wu4}}</li>
                            	<li @click="twoList.erzuo_wu_wu5  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_wu5  )" :class='twoList.erzuo_wu_wu5 == "" ? "" : "blue"'>{{twoList.erwu_wu5==""?'': twoList.erwu_wu5}}</li>
                            	<li @click="twoList.erzuo_wu_wu6  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_wu6  )" :class='twoList.erzuo_wu_wu6 == "" ? "" : "blue"'>{{twoList.erwu_wu6==""?'': twoList.erwu_wu6}}</li>
                            	<li @click="twoList.erzuo_wu_wu7 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wu_wu7  )" :class='twoList.erzuo_wu_wu7 == "" ? "" : "blue"'>{{twoList.erwu_wu7==""?'': twoList.erwu_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wc_wu  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_wu  )" :class='twoList.erzuo_wc_wu == "" ? "" : "blue"'>{{twoList.erwc_wu==""?'': twoList.erwc_wu}}</li>
                            	<li @click="twoList.erzuo_wc_wu2  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_wu2  )" :class='twoList.erzuo_wc_wu2 == "" ? "" : "blue"'>{{twoList.erwc_wu2==""?'':twoList.erwc_wu2}}</li>
                            	<li @click="twoList.erzuo_wc_wu3  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_wu3  )" :class='twoList.erzuo_wc_wu3 == "" ? "" : "blue"'>{{twoList.erwc_wu3==""?'': twoList.erwc_wu3}}</li>
                            	<li @click="twoList.erzuo_wc_wu4 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_wu4  )" :class='twoList.erzuo_wc_wu4 == "" ? "" : "blue"'>{{twoList.erwc_wu4==""?'': twoList.erwc_wu4}}</li>
                            	<li @click="twoList.erzuo_wc_wu5  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_wu5  )" :class='twoList.erzuo_wc_wu5 == "" ? "" : "blue"'>{{twoList.erwc_wu5==""?'': twoList.erwc_wu5}}</li>
                            	<li @click="twoList.erzuo_wc_wu6 == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_wu6  )" :class='twoList.erzuo_wc_wu6 == "" ? "" : "blue"'>{{twoList.erwc_wu6==""?'': twoList.erwc_wu6}}</li>
                            	<li @click="twoList.erzuo_wc_wu7  == '' ? '' : showzuo($event,twoList.twoList.erzuo_wc_wu7  )" :class='twoList.erzuo_wc_wu7 == "" ? "" : "blue"'>{{twoList.erwc_wu7==""?'': twoList.erwc_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期六</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erliu_zuo  == '' ? '' : showzuo($event,twoList.twoList.erliu_zuo  )" :class='twoList.erliu_zuo == "" ? "" : "blue"'>{{twoList.erliu==""?'': twoList.erliu}}</li>
                            	<li @click="twoList.erliu_zuo2  == '' ? '' : showzuo($event,twoList.twoList.erliu_zuo2  )" :class='twoList.erliu_zuo2 == "" ? "" : "blue"'>{{twoList.erliu2==""?'': twoList.erliu2}}</li>
                            	<li @click="twoList.erliu_zuo3  == '' ? '' : showzuo($event,twoList.twoList.erliu_zuo3  )" :class='twoList.erliu_zuo3 == "" ? "" : "blue"'>{{twoList.erliu3==""?'': twoList.erliu3}}</li>
                            	<li @click="twoList.erliu_zuo4  == '' ? '' : showzuo($event,twoList.twoList.erliu_zuo4  )" :class='twoList.erliu_zuo4 == "" ? "" : "blue"'>{{twoList.erliu4==""?'': twoList.erliu4}}</li>
                            	<li @click="twoList.erliu_zuo5  == '' ? '' : showzuo($event,twoList.twoList.erliu_zuo5  )" :class='twoList.erliu_zuo5 == "" ? "" : "blue"'>{{twoList.erliu5==""?'': twoList.erliu5}}</li>
                            	<li @click="twoList.erliu_zuo6  == '' ? '' : showzuo($event,twoList.twoList.erliu_zuo6 )" :class='twoList.erliu_zuo6 == "" ? "" : "blue"'>{{twoList.erliu6==""?'': twoList.erliu6}}</li>
                            	<li @click="twoList.erliu_zuo7  == '' ? '' : showzuo($event,twoList.twoList.erliu_zuo7 )" :class='twoList.erliu_zuo7 == "" ? "" : "blue"'>{{twoList.erliu7==""?'': twoList.erliu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_liu_liu  == '' ? '' : showzuo($event,twoList.erzuo_liu_liu  )" :class='twoList.erzuo_liu_liu == "" ? "" : "blue"'>{{twoList.erliu_liu==""?'': twoList.erliu_liu}}</li>
                            	<li @click="twoList.erzuo_liu_liu2  == '' ? '' : showzuo($event,twoList.erzuo_liu_liu2  )" :class='twoList.erzuo_liu_liu2 == "" ? "" : "blue"'>{{twoList.erliu_liu2==""?'': twoList.erliu_liu2}}</li>
                            	<li @click="twoList.erzuo_liu_liu3  == '' ? '' : showzuo($event,twoList.erzuo_liu_liu3  )" :class='twoList.erzuo_liu_liu3 == "" ? "" : "blue"'>{{twoList.erliu_liu3==""?'': twoList.erliu_liu3}}</li>
                            	<li @click="twoList.erzuo_liu_liu4  == '' ? '' : showzuo($event,twoList.erzuo_liu_liu4  )" :class='twoList.erzuo_liu_liu4 == "" ? "" : "blue"'>{{twoList.erliu_liu4==""?'': twoList.erliu_liu4}}</li>
                            	<li @click="twoList.erzuo_liu_liu5  == '' ? '' : showzuo($event,twoList.erzuo_liu_liu5  )" :class='twoList.erzuo_liu_liu5 == "" ? "" : "blue"'>{{twoList.erliu_liu5==""?'': twoList.erliu_liu5}}</li>
                            	<li @click="twoList.erzuo_liu_liu6  == '' ? '' : showzuo($event,twoList.erzuo_liu_liu6  )" :class='twoList.erzuo_liu_liu6 == "" ? "" : "blue"'>{{twoList.erliu_liu6==""?'': twoList.erliu_liu6}}</li>
                            	<li @click="twoList.erzuo_liu_liu7  == '' ? '' : showzuo($event,twoList.erzuo_liu_liu7  )" :class='twoList.erzuo_liu_liu7 == "" ? "" : "blue"'>{{twoList.erliu_liu7==""?'': twoList.erliu_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wc_liu  == '' ? '' : showzuo($event,twoList.erzuo_wc_liu  )" :class='twoList.erzuo_wc_liu == "" ? "" : "blue"'>{{twoList.erwc_liu==""?'': twoList.erwc_liu}}</li>
                            	<li @click="twoList.erzuo_wc_liu2  == '' ? '' : showzuo($event,twoList.erzuo_wc_liu2  )" :class='twoList.erzuo_wc_liu2 == "" ? "" : "blue"'>{{twoList.erwc_liu2==""?'': twoList.erwc_liu2}}</li>
                            	<li @click="twoList.erzuo_wc_liu3  == '' ? '' : showzuo($event,twoList.erzuo_wc_liu3  )" :class='twoList.erzuo_wc_liu3 == "" ? "" : "blue"'>{{twoList.erwc_liu3==""?'':twoList.erwc_liu3}}</li>
                            	<li @click="twoList.erzuo_wc_liu4  == '' ? '' : showzuo($event,twoList.erzuo_wc_liu4  )" :class='twoList.erzuo_wc_liu4 == "" ? "" : "blue"'>{{twoList.erwc_liu4==""?'': twoList.erwc_liu4}}</li>
                            	<li @click="twoList.erzuo_wc_liu5  == '' ? '' : showzuo($event,twoList.erzuo_wc_liu5  )" :class='twoList.erzuo_wc_liu5 == "" ? "" : "blue"'>{{twoList.erwc_liu5==""?'': twoList.erwc_liu5}}</li>
                            	<li @click="twoList.erzuo_wc_liu6  == '' ? '' : showzuo($event,twoList.erzuo_wc_liu6  )" :class='twoList.erzuo_wc_liu6 == "" ? "" : "blue"'>{{twoList.erwc_liu6==""?'': twoList.erwc_liu6}}</li>
                            	<li @click="twoList.erzuo_wc_liu7  == '' ? '' : showzuo($event,twoList.erzuo_wc_liu7  )" :class='twoList.erzuo_wc_liu7 == "" ? "" : "blue"'>{{twoList.erwc_liu7==""?'': twoList.erwc_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期日</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erri_zuo  == '' ? '' : showzuo($event,twoList.erri_zuo )" :class='twoList.erri_zuo == "" ? "" : "blue"'>{{twoList.erri==""?'': twoList.erri}}</li>
                            	<li @click="twoList.erri_zuo2  == '' ? '' : showzuo($event,twoList.erri_zuo2 )" :class='twoList.erri_zuo2 == "" ? "" : "blue"'>{{twoList.erri2==""?'': twoList.erri2}}</li>
                            	<li @click="twoList.erri_zuo3  == '' ? '' : showzuo($event,twoList.erri_zuo3 )" :class='twoList.erri_zuo3 == "" ? "" : "blue"'>{{twoList.erri3==""?'': twoList.erri3}}</li>
                            	<li @click="twoList.erri_zuo4  == '' ? '' : showzuo($event,twoList.erri_zuo4 )" :class='twoList.erri_zuo4 == "" ? "" : "blue"'>{{twoList.erri4==""?'': twoList.erri4}}</li>
                            	<li @click="twoList.erri_zuo5  == '' ? '' : showzuo($event,twoList.erri_zuo5 )" :class='twoList.erri_zuo5 == "" ? "" : "blue"'>{{twoList.erri5==""?'': twoList.erri5}}</li>
                            	<li @click="twoList.erri_zuo6  == '' ? '' : showzuo($event,twoList.erri_zuo6 )" :class='twoList.erri_zuo6 == "" ? "" : "blue"'>{{twoList.erri6==""?'': twoList.erri6}}</li>
                            	<li @click="twoList.erri_zuo7  == '' ? '' : showzuo($event,twoList.erri_zuo7 )" :class='twoList.erri_zuo7 == "" ? "" : "blue"'>{{twoList.erri7==""?'': twoList.erri7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="twoList.erzuo_wu_ri == '' ? '' : showzuo($event,twoList.erzuo_wu_ri )" :class='twoList.erzuo_wu_ri == "" ? "" : "blue"'>{{twoList.erwu_ri==""?'': twoList.erwu_ri}}</li>
                            	<li @click="twoList.erzuo_wu_ri2 == '' ? '' : showzuo($event,twoList.erzuo_wu_ri2 )" :class='twoList.erzuo_wu_ri2 == "" ? "" : "blue"'>{{twoList.erwu_ri2==""?'': twoList.erwu_ri2}}</li>
                            	<li @click="twoList.erzuo_wu_ri3 == '' ? '' : showzuo($event,twoList.erzuo_wu_ri3 )" :class='twoList.erzuo_wu_ri3 == "" ? "" : "blue"'>{{twoList.erwu_ri3==""?'': twoList.erwu_ri3}}</li>
                            	<li @click="twoList.erzuo_wu_ri4 == '' ? '' : showzuo($event,twoList.erzuo_wu_ri4 )" :class='twoList.erzuo_wu_ri4 == "" ? "" : "blue"'>{{twoList.erwu_ri4==""?'': twoList.erwu_ri4}}</li>
                            	<li @click="twoList.erzuo_wu_ri5 == '' ? '' : showzuo($event,twoList.erzuo_wu_ri5 )" :class='twoList.erzuo_wu_ri5 == "" ? "" : "blue"'>{{twoList.erwu_ri5==""?'': twoList.erwu_ri5}}</li>
                            	<li @click="twoList.erzuo_wu_ri6 == '' ? '' : showzuo($event,twoList.erzuo_wu_ri6 )" :class='twoList.erzuo_wu_ri6 == "" ? "" : "blue"'>{{twoList.erwu_ri6==""?'': twoList.erwu_ri6}}</li>
                            	<li @click="twoList.erzuo_wu_ri7 == '' ? '' : showzuo($event,twoList.erzuo_wu_ri7 )" :class='twoList.erzuo_wu_ri7 == "" ? "" : "blue"'>{{twoList.erwu_ri7==""?'': twoList.erwu_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                           <ul>
                            	<li @click="twoList.erzuo_wc_ri == '' ? '' : showzuo($event,twoList.erzuo_wc_ri )" :class='twoList.erzuo_wc_ri == "" ? "" : "blue"'>{{twoList.erwc_ri==""?'': twoList.erwc_ri}}</li>
                            	<li @click="twoList.erzuo_wc_ri2 == '' ? '' : showzuo($event,twoList.erzuo_wc_ri2 )" :class='twoList.erzuo_wc_ri2 == "" ? "" : "blue"'>{{twoList.erwc_ri2==""?'': twoList.erwc_ri2}}</li>
                            	<li @click="twoList.erzuo_wc_ri3 == '' ? '' : showzuo($event,twoList.erzuo_wc_ri3 )" :class='twoList.erzuo_wc_ri3 == "" ? "" : "blue"'>{{twoList.erwc_ri3==""?'': twoList.erwc_ri3}}</li>
                            	<li @click="twoList.erzuo_wc_ri4 == '' ? '' : showzuo($event,twoList.erzuo_wc_ri4 )" :class='twoList.erzuo_wc_ri4 == "" ? "" : "blue"'>{{twoList.erwc_ri4==""?'': twoList.erwc_ri4}}</li>
                            	<li @click="twoList.erzuo_wc_ri5 == '' ? '' : showzuo($event,twoList.erzuo_wc_ri5 )" :class='twoList.erzuo_wc_ri5 == "" ? "" : "blue"'>{{twoList.erwc_ri5==""?'': twoList.erwc_ri5}}</li>
                            	<li @click="twoList.erzuo_wc_ri6 == '' ? '' : showzuo($event,twoList.erzuo_wc_ri6 )" :class='twoList.erzuo_wc_ri6 == "" ? "" : "blue"'>{{twoList.erwc_ri6==""?'': twoList.erwc_ri6}}</li>
                            	<li @click="twoList.erzuo_wc_ri7 == '' ? '' : showzuo($event,twoList.erzuo_wc_ri7 )" :class='twoList.erzuo_wc_ri7 == "" ? "" : "blue"'>{{twoList.erwc_ri7==""?'': twoList.erwc_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tip" style='margin-top: 40px;'>注意</div>
            </div>
            
        
        
        
        <!--第三周-->
        
        <div class="plan-lists" v-if='status=="san_status"'>
                <div class="list">
                    <div class="list-header">星期一</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <!--<div class="content">
                                <span class="blue" @click="blueBtn()">牛奶100ml</span>
                                <span>鸡蛋1个</span>
                            </div>-->
                            <ul>
                            	<li @click="sanList.sanone_zuo == '' ? '' : showzuo($event,sanList.sanone_zuo )" :class='sanList.sanone_zuo == "" ? "" : "blue"'>{{sanList.sanone==""?'': sanList.sanone}}</li>
                            	<li @click="sanList.sanone_zuo2 == '' ? '' : showzuo($event,sanList.sanone_zuo2 )" :class='sanList.sanone_zuo2 == "" ? "" : "blue"'>{{sanList.sanone2==""?'': sanList.sanone2}}</li>
                            	<li @click="sanList.sanone_zuo3 == '' ? '' : showzuo($event,sanList.sanone_zuo3 )" :class='sanList.sanone_zuo3 == "" ? "" : "blue"'>{{sanList.sanone3==""?'': sanList.sanone3}}</li>
                            	<li @click="sanList.sanone_zuo4 == '' ? '' : showzuo($event,sanList.sanone_zuo4 )" :class='sanList.sanone_zuo4 == "" ? "" : "blue"'>{{sanList.sanone4==""?'': sanList.sanone4}}</li>
                            	<li @click="sanList.sanone_zuo5 == '' ? '' : showzuo($event,sanList.sanone_zuo5 )" :class='sanList.sanone_zuo5 == "" ? "" : "blue"'>{{sanList.sanone5==""?'': sanList.sanone5}}</li>
                            	<li @click="sanList.sanone_zuo6 == '' ? '' : showzuo($event,sanList.sanone_zuo6 )" :class='sanList.sanone_zuo6 == "" ? "" : "blue"'>{{sanList.sanone6==""?'': sanList.sanone6}}</li>
                            	<li @click="sanList.sanone_zuo7 == '' ? '' : showzuo($event,sanList.sanone_zuo7 )" :class='sanList.sanone_zuo7 == "" ? "" : "blue"'>{{sanList.sanone7==""?'': sanList.sanone7}}</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_sansanwu_one == '' ? '' : showzuo($event,sanList.sanzuo_sansanwu_one )" :class='sanList.sanzuo_sansanwu_one == "" ? "" : "blue"'>{{sanList.sansanwu_one==""?'': sanList.sansanwu_one}}</li>
                            	<li @click="sanList.sanzuo_sansanwu_one2 == '' ? '' : showzuo($event,sanList.sanzuo_sansanwu_one2 )" :class='sanList.sanzuo_sansanwu_one2 == "" ? "" : "blue"'>{{sanList.sansanwu_one2==""?'': sanList.sansanwu_one2}}</li>
                            	<li @click="sanList.sanzuo_sansanwu_one3 == '' ? '' : showzuo($event,sanList.sanzuo_sansanwu_one3 )" :class='sanList.sanzuo_sansanwu_one3 == "" ? "" : "blue"'>{{sanList.sansanwu_one3==""?'': sanList.sansanwu_one3}}</li>
                            	<li @click="sanList.sanzuo_sansanwu_one4 == '' ? '' : showzuo($event,sanList.sanzuo_sansanwu_one4 )" :class='sanList.sanzuo_sansanwu_one4 == "" ? "" : "blue"'>{{sanList.sansanwu_one4==""?'': sanList.sansanwu_one4}}</li>
                            	<li @click="sanList.sanzuo_sansanwu_one5 == '' ? '' : showzuo($event,sanList.sanzuo_sansanwu_one5 )" :class='sanList.sanzuo_sansanwu_one5 == "" ? "" : "blue"'>{{sanList.sansanwu_one5==""?'': sanList.sansanwu_one5}}</li>
                            	<li @click="sanList.sanzuo_sansanwu_one6 == '' ? '' : showzuo($event,sanList.sanzuo_sansanwu_one6 )" :class='sanList.sanzuo_sansanwu_one6 == "" ? "" : "blue"'>{{sanList.sansanwu_one6==""?'': sanList.sansanwu_one6}}</li>
                            	<li @click="sanList.sanzuo_sansanwu_one7 == '' ? '' : showzuo($event,sanList.sanzuo_sansanwu_one7 )" :class='sanList.sanzuo_sansanwu_one7 == "" ? "" : "blue"'>{{sanList.sansanwu_one7==""?'': sanList.sansanwu_one7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wc_one == '' ? '' : showzuo($event,sanList.sanzuo_wc_one)" :class='sanList.sanzuo_wc_one == "" ? "" : "blue"'>{{sanList.sanwc_one==""?'': sanList.sanwc_one}}</li>
                            	<li @click="sanList.sanzuo_wc_one2 == '' ? '' : showzuo($event,sanList.sanzuo_wc_one2)" :class='sanList.sanzuo_wc_one2 == "" ? "" : "blue"'>{{sanList.sanwc_one2==""?'': sanList.sanwc_one2}}</li>
                            	<li @click="sanList.sanzuo_wc_one3 == '' ? '' : showzuo($event,sanList.sanzuo_wc_one3)" :class='sanList.sanzuo_wc_one3 == "" ? "" : "blue"'>{{sanList.sanwc_one3==""?'': sanList.sanwc_one3}}</li>
                            	<li @click="sanList.sanzuo_wc_one4 == '' ? '' : showzuo($event,sanList.sanzuo_wc_one4)" :class='sanList.sanzuo_wc_one4 == "" ? "" : "blue"'>{{sanList.sanwc_one4==""?'': sanList.sanwc_one4}}</li>
                            	<li @click="sanList.sanzuo_wc_one5 == '' ? '' : showzuo($event,sanList.sanzuo_wc_one5)" :class='sanList.sanzuo_wc_one5 == "" ? "" : "blue"'>{{sanList.sanwc_one5==""?'': sanList.sanwc_one5}}</li>
                            	<li @click="sanList.sanzuo_wc_one6 == '' ? '' : showzuo($event,sanList.sanzuo_wc_one6)" :class='sanList.sanzuo_wc_one6 == "" ? "" : "blue"'>{{sanList.sanwc_one6==""?'': sanList.sanwc_one6}}</li>
                            	<li @click="sanList.sanzuo_wc_one7 == '' ? '' : showzuo($event,sanList.sanzuo_wc_one7)" :class='sanList.sanzuo_wc_one7 == "" ? "" : "blue"'>{{sanList.sanwc_one7==""?'': sanList.sanwc_one7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">

                    <div class="list-header">星期二</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.santwo_zuo == '' ? '' : showzuo($event,sanList.santwo_zuo)" :class='sanList.santwo_zuo == "" ? "" : "blue"'>{{sanList.santwo==""?'': sanList.santwo}}</li>
                            	<li @click="sanList.santwo_zuo2 == '' ? '' : showzuo($event,sanList.santwo_zuo2)" :class='sanList.santwo_zuo2 == "" ? "" : "blue"'>{{sanList.santwo2==""?'': sanList.santwo2}}</li>
                            	<li @click="sanList.santwo_zuo3 == '' ? '' : showzuo($event,sanList.santwo_zuo3)" :class='sanList.santwo_zuo3 == "" ? "" : "blue"'>{{sanList.santwo3==""?'': sanList.santwo3}}</li>
                            	<li @click="sanList.santwo_zuo4 == '' ? '' : showzuo($event,sanList.santwo_zuo4)" :class='sanList.santwo_zuo4 == "" ? "" : "blue"'>{{sanList.santwo4==""?'': sanList.santwo4}}</li>
                            	<li @click="sanList.santwo_zuo5 == '' ? '' : showzuo($event,sanList.santwo_zuo5)" :class='sanList.santwo_zuo5 == "" ? "" : "blue"'>{{sanList.santwo5==""?'': sanList.santwo5}}</li>
                            	<li @click="sanList.santwo_zuo6 == '' ? '' : showzuo($event,sanList.santwo_zuo6)" :class='sanList.santwo_zuo6 == "" ? "" : "blue"'>{{sanList.santwo6==""?'': sanList.santwo6}}</li>
                            	<li @click="sanList.santwo_zuo7 == '' ? '' : showzuo($event,sanList.santwo_zuo7)" :class='sanList.santwo_zuo7 == "" ? "" : "blue"'>{{sanList.santwo7==""?'': sanList.santwo7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_sanwu_two == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_two)" :class='sanList.sanzuo_sanwu_two == "" ? "" : "blue"'>{{sanList.sansanwu_two==""?'': sanList.sansanwu_two}}</li>
                            	<li @click="sanList.sanzuo_sanwu_two2 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_two2)" :class='sanList.sanzuo_sanwu_two2 == "" ? "" : "blue"'>{{sanList.sansanwu_two2==""?'': sanList.sansanwu_two2}}</li>
                            	<li @click="sanList.sanzuo_sanwu_two3 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_two3)" :class='sanList.sanzuo_sanwu_two3 == "" ? "" : "blue"'>{{sanList.sansanwu_two3==""?'': sanList.sansanwu_two3}}</li>
                            	<li @click="sanList.sanzuo_sanwu_two4 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_two4)" :class='sanList.sanzuo_sanwu_two4 == "" ? "" : "blue"'>{{sanList.sansanwu_two4==""?'': sanList.sansanwu_two4}}</li>
                            	<li @click="sanList.sanzuo_sanwu_two5 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_two5)" :class='sanList.sanzuo_sanwu_two5 == "" ? "" : "blue"'>{{sanList.sansanwu_two5==""?'': sanList.sansanwu_two5}}</li>
                            	<li @click="sanList.sanzuo_sanwu_two6 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_two6)" :class='sanList.sanzuo_sanwu_two6 == "" ? "" : "blue"'>{{sanList.sansanwu_two6==""?'': sanList.sansanwu_two6}}</li>
                            	<li @click="sanList.sanzuo_sanwu_two7 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_two7)" :class='sanList.sanzuo_sanwu_two7 == "" ? "" : "blue"'>{{sanList.sansanwu_two7==""?'': sanList.sansanwu_two7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wc_two  == '' ? '' : showzuo($event,sanList.sanzuo_wc_two )" :class='sanList.sanzuo_wc_two == "" ? "" : "blue"'>{{sanList.sanwc_two==""?'': sanList.sanwc_two}}</li>
                            	<li @click="sanList.sanzuo_wc_two2  == '' ? '' : showzuo($event,sanList.sanzuo_wc_two2 )" :class='sanList.sanzuo_wc_two2 == "" ? "" : "blue"'>{{sanList.sanwc_two2==""?'': sanList.sanwc_two2}}</li>
                            	<li @click="sanList.sanzuo_wc_two3  == '' ? '' : showzuo($event,sanList.sanzuo_wc_two3 )" :class='sanList.sanzuo_wc_two3 == "" ? "" : "blue"'>{{sanList.sanwc_two3==""?'': sanList.sanwc_two3}}</li>
                            	<li @click="sanList.sanzuo_wc_two4  == '' ? '' : showzuo($event,sanList.sanzuo_wc_two4 )" :class='sanList.sanzuo_wc_two4 == "" ? "" : "blue"'>{{sanList.sanwc_two4==""?'': sanList.sanwc_two4}}</li>
                            	<li @click="sanList.sanzuo_wc_two5  == '' ? '' : showzuo($event,sanList.sanzuo_wc_two5 )" :class='sanList.sanzuo_wc_two5 == "" ? "" : "blue"'>{{sanList.sanwc_two5==""?'': sanList.sanwc_two5}}</li>
                            	<li @click="sanList.sanzuo_wc_two6  == '' ? '' : showzuo($event,sanList.sanzuo_wc_two6 )" :class='sanList.sanzuo_wc_two6 == "" ? "" : "blue"'>{{sanList.sanwc_two6==""?'': sanList.sanwc_two6}}</li>
                            	<li @click="sanList.sanzuo_wc_two7 == '' ? '' : showzuo($event,sanList.sanzuo_wc_two7 )" :class='sanList.sanzuo_wc_two7 == "" ? "" : "blue"'>{{sanList.sanwc_two7==""?'': sanList.sanwc_two7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期三</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sansan_zuo == '' ? '' : showzuo($event,sanList.sansan_zuo )" :class='sanList.sansan_zuo== "" ? "" : "blue"'>{{sanList.sansan==""?'': sanList.sansan}}</li>
                            	<li @click="sanList.sansan_zuo2 == '' ? '' : showzuo($event,sanList.sansan_zuo2 )" :class='sanList.sansan_zuo2 == "" ? "" : "blue"'>{{sanList.sansan2==""?'': sanList.sansan2}}</li>
                            	<li @click="sanList.sansan_zuo3 == '' ? '' : showzuo($event,sanList.sansan_zuo3 )" :class='sanList.sansan_zuo3 == "" ? "" : "blue"'>{{sanList.sansan3==""?'': sanList.sansan3}}</li>
                            	<li @click="sanList.sansan_zuo4 == '' ? '' : showzuo($event,sanList.sansan_zuo4 )" :class='sanList.sansan_zuo4 == "" ? "" : "blue"'>{{sanList.sansan4==""?'': sanList.sansan4}}</li>
                            	<li @click="sanList.sansan_zuo5 == '' ? '' : showzuo($event,sanList.sansan_zuo5 )" :class='sanList.sansan_zuo5 == "" ? "" : "blue"'>{{sanList.sansan5==""?'': sanList.sansan5}}</li>
                            	<li @click="sanList.sansan_zuo6 == '' ? '' : showzuo($event,sanList.sansan_zuo6 )" :class='sanList.sansan_zuo6 == "" ? "" : "blue"'>{{sanList.sansan6==""?'': sanList.sansan6}}</li>
                            	<li @click="sanList.sansan_zuo7 == '' ? '' : showzuo($event,sanList.sansan_zuo7 )" :class='sanList.sansan_zuo7 == "" ? "" : "blue"'>{{sanList.sansan7==""?'': sanList.sansan7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_sanwu_san == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_san )" :class='sanList.sanzuo_sanwu_san == "" ? "" : "blue"'>{{sanList.sansanwu_san==""?'': sanList.sansanwu_san}}</li>
                            	<li @click="sanList.sanzuo_sanwu_san2 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_san2 )"  :class='sanList.sanzuo_sanwu_san2 == "" ? "" : "blue"'>{{sanList.sansanwu_san2==""?'': sanList.sansanwu_san2}}</li>
                            	<li @click="sanList.sanzuo_sanwu_san3 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_san3 )"  :class='sanList.sanzuo_sanwu_san3 == "" ? "" : "blue"'>{{sanList.sansanwu_san3==""?'': sanList.sansanwu_san3}}</li>
                            	<li @click="sanList.sanzuo_sanwu_san4 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_san4 )"  :class='sanList.sanzuo_sanwu_san4 == "" ? "" : "blue"'>{{sanList.sansanwu_san4==""?'': sanList.sansanwu_san4}}</li>
                            	<li @click="sanList.sanzuo_sanwu_san5 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_san5 )"  :class='sanList.sanzuo_sanwu_san5 == "" ? "" : "blue"'>{{sanList.sansanwu_san5==""?'': sanList.sansanwu_san5}}</li>
                            	<li @click="sanList.sanzuo_sanwu_san6 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_san6 )"  :class='sanList.sanzuo_sanwu_san6 == "" ? "" : "blue"'>{{sanList.sansanwu_san6==""?'': sanList.sansanwu_san6}}</li>
                            	<li @click="sanList.sanzuo_sanwu_san7 == '' ? '' : showzuo($event,sanList.sanzuo_sanwu_san7 )"  :class='sanList.sanzuo_sanwu_san7 == "" ? "" : "blue"'>{{sanList.sansanwu_san7==""?'': sanList.sansanwu_san7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wc_san== '' ? '' : showzuo($event,sanList.sanzuo_wc_san )"  :class='sanList.sanzuo_wc_san == "" ? "" : "blue"'>{{sanList.sanwc_san==""?'': sanList.sanwc_san}}</li>
                            	<li @click="sanList.sanzuo_wc_san2== '' ? '' : showzuo($event,sanList.sanzuo_wc_san2 )" :class='sanList.sanzuo_wc_san == "" ? "" : "blue"'>{{sanList.sanwc_san2==""?'': sanList.sanwc_san2}}</li>
                            	<li @click="sanList.sanzuo_wc_san3== '' ? '' : showzuo($event,sanList.sanzuo_wc_san3 )" :class='sanList.sanzuo_wc_san == "" ? "" : "blue"'>{{sanList.sanwc_san3==""?'': sanList.sanwc_san3}}</li>
                            	<li @click="sanList.sanzuo_wc_san4== '' ? '' : showzuo($event,sanList.sanzuo_wc_san4 )" :class='sanList.sanzuo_wc_san== "" ? "" : "blue"'>{{sanList.sanwc_san4==""?'': sanList.sanwc_san4}}</li>
                            	<li @click="sanList.sanzuo_wc_san5== '' ? '' : showzuo($event,sanList.sanzuo_wc_san5 )" :class='sanList.sanzuo_wc_san == "" ? "" : "blue"'>{{sanList.sanwc_san5==""?'': sanList.sanwc_san5}}</li>
                            	<li @click="sanList.sanzuo_wc_san6== '' ? '' : showzuo($event,sanList.sanzuo_wc_san6 )" :class='sanList.sanzuo_wc_san == "" ? "" : "blue"'>{{sanList.sanwc_san6==""?'': sanList.sanwc_san6}}</li>
                            	<li @click="sanList.sanzuo_wc_san7== '' ? '' : showzuo($event,sanList.sanzuo_wc_san7 )" :class='sanList.sanzuo_wc_san == "" ? "" : "blue"'>{{sanList.sanwc_san7==""?'': sanList.sanwc_san7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期四</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sansi_zuo== '' ? '' : showzuo($event,sanList.sansi_zuo )" :class='sanList.sansi_zuo == "" ? "" : "blue"'>{{sanList.sansi==""?'': sanList.sansi}}</li>
                            	<li @click="sanList.sansi_zuo2== '' ? '' : showzuo($event,sanList.sansi_zuo2 )" :class='sanList.sansi_zuo2 == "" ? "" : "blue"'>{{sanList.sansi2==""?'': sanList.sansi2}}</li>
                            	<li @click="sanList.sansi_zuo3== '' ? '' : showzuo($event,sanList.sansi_zuo3 )" :class='sanList.sansi_zuo3 == "" ? "" : "blue"'>{{sanList.sansi3==""?'': sanList.sansi3}}</li>
                            	<li @click="sanList.sansi_zuo4== '' ? '' : showzuo($event,sanList.sansi_zuo4 )" :class='sanList.sansi_zuo4 == "" ? "" : "blue"'>{{sanList.sansi4==""?'': sanList.sansi4}}</li>
                            	<li @click="sanList.sansi_zuo5== '' ? '' : showzuo($event,sanList.sansi_zuo5 )" :class='sanList.sansi_zuo5 == "" ? "" : "blue"'>{{sanList.sansi5==""?'': sanList.sansi5}}</li>
                            	<li @click="sanList.sansi_zuo6== '' ? '' : showzuo($event,sanList.sansi_zuo6 )" :class='sanList.sansi_zuo6 == "" ? "" : "blue"'>{{sanList.sansi6==""?'': sanList.sansi6}}</li>
                            	<li @click="sanList.sansi_zuo7== '' ? '' : showzuo($event,sanList.sansi_zuo7 )" :class='sanList.sansi_zuo7 == "" ? "" : "blue"'>{{sanList.sansi7==""?'': sanList.sansi7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_sanwu_si== '' ? '' : showzuo($event,sanList.sanzuo_sanwu_si )" :class='sanList.sanzuo_sanwu_si == "" ? "" : "blue"'>{{sanList.sansanwu_si==""?'': sanList.sansanwu_si}}</li>
                            	<li @click="sanList.sanzuo_sanwu_si2== '' ? '' : showzuo($event,sanList.sanzuo_sanwu_si2 )" :class='sanList.sanzuo_sanwu_si2 == "" ? "" : "blue"'>{{sanList.sansanwu_si2==""?'': sanList.sansanwu_si2}}</li>
                            	<li @click="sanList.sanzuo_sanwu_si3== '' ? '' : showzuo($event,sanList.sanzuo_sanwu_si3 )" :class='sanList.sanzuo_sanwu_si3 == "" ? "" : "blue"'>{{sanList.sansanwu_si3==""?'': sanList.sansanwu_si3}}</li>
                            	<li @click="sanList.sanzuo_sanwu_si4== '' ? '' : showzuo($event,sanList.sanzuo_sanwu_si4 )" :class='sanList.sanzuo_sanwu_si4 == "" ? "" : "blue"'>{{sanList.sansanwu_si4==""?'': sanList.sansanwu_si4}}</li>
                            	<li @click="sanList.sanzuo_sanwu_si5== '' ? '' : showzuo($event,sanList.sanzuo_sanwu_si5 )" :class='sanList.sanzuo_sanwu_si5 == "" ? "" : "blue"'>{{sanList.sansanwu_si5==""?'': sanList.sansanwu_si5}}</li>
                            	<li @click="sanList.sanzuo_sanwu_si6== '' ? '' : showzuo($event,sanList.sanzuo_sanwu_si6 )" :class='sanList.sanzuo_sanwu_si6 == "" ? "" : "blue"'>{{sanList.sansanwu_si6==""?'': sanList.sansanwu_si6}}</li>
                            	<li @click="sanList.sanzuo_sanwu_si7== '' ? '' : showzuo($event,sanList.sanzuo_sanwu_si7 )" :class='sanList.sanzuo_sanwu_si7 == "" ? "" : "blue"'>{{sanList.sansanwu_si7==""?'': sanList.sansanwu_si7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wc_si== '' ? '' : showzuo($event,sanList.sanzuo_wc_si )" :class='sanList.sanzuo_wc_si == "" ? "" : "blue"'>{{sanList.sanwc_si==""?'': sanList.sanwc_si}}</li>
                            	<li @click="sanList.sanzuo_wc_si2== '' ? '' : showzuo($event,sanList.sanzuo_wc_si2 )" :class='sanList.sanzuo_wc_si2 == "" ? "" : "blue"'>{{sanList.sanwc_si2==""?'': sanList.sanwc_si2}}</li>
                            	<li @click="sanList.sanzuo_wc_si3== '' ? '' : showzuo($event,sanList.sanzuo_wc_si3 )" :class='sanList.sanzuo_wc_si3 == "" ? "" : "blue"'>{{sanList.sanwc_si3==""?'': sanList.sanwc_si3}}</li>
                            	<li @click="sanList.sanzuo_wc_si4== '' ? '' : showzuo($event,sanList.sanzuo_wc_si4)" :class='sanList.sanzuo_wc_si4 == "" ? "" : "blue"'>{{sanList.sanwc_si4==""?'': sanList.sanwc_si4}}</li>
                            	<li @click="sanList.sanzuo_wc_si5== '' ? '' : showzuo($event,sanList.sanzuo_wc_si5 )" :class='sanList.sanzuo_wc_si5 == "" ? "" : "blue"'>{{sanList.sanwc_si5==""?'': sanList.sanwc_si5}}</li>
                            	<li @click="sanList.sanzuo_wc_si6== '' ? '' : showzuo($event,sanList.sanzuo_wc_si6 )" :class='sanList.sanzuo_wc_si6 == "" ? "" : "blue"'>{{sanList.sanwc_si6==""?'': sanList.sanwc_si6}}</li>
                            	<li @click="sanList.sanzuo_wc_si7== '' ? '' : showzuo($event,sanList.sanzuo_wc_si7 )" :class='sanList.sanzuo_wc_si7 == "" ? "" : "blue"'>{{sanList.sanwc_si7==""?'': sanList.sanwc_si7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期五</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanwu_zuo== '' ? '' : showzuo($event,sanList.sanwu_zuo )" :class='sanList.sanwu_zuo == "" ? "" : "blue"'>{{sanList.sanwu==""?'': sanList.sanwu}}</li>
                            	<li  @click="sanList.sanwu_zuo2== '' ? '' : showzuo($event,sanList.sanwu_zuo2 )" :class='sanList.sanwu_zuo2 == "" ? "" : "blue"'>{{sanList.sanwu2==""?'': sanList.sanwu2}}</li>
                            	<li @click="sanList.sanwu_zuo3== '' ? '' : showzuo($event,sanList.sanwu_zuo3 )" :class='sanList.sanwu_zuo3 == "" ? "" : "blue"'>{{sanList.sanwu3==""?'': sanList.sanwu3}}</li>
                            	<li @click="sanList.sanwu_zuo4== '' ? '' : showzuo($event,sanList.sanwu_zuo4 )" :class='sanList.sanwu_zuo4 == "" ? "" : "blue"'>{{sanList.sanwu4==""?'': sanList.sanwu4}}</li>
                            	<li @click="sanList.sanwu_zuo5== '' ? '' : showzuo($event,sanList.sanwu_zuo5 )" :class='sanList.sanwu_zuo5 == "" ? "" : "blue"'>{{sanList.sanwu5==""?'': sanList.sanwu5}}</li>
                            	<li @click="sanList.sanwu_zuo6== '' ? '' : showzuo($event,sanList.sanwu_zuo6 )" :class='sanList.sanwu_zuo6 == "" ? "" : "blue"'>{{sanList.sanwu6==""?'': sanList.sanwu6}}</li>
                            	<li @click="sanList.sanwu_zuo7== '' ? '' : showzuo($event,sanList.sanwu_zuo7)" :class='sanList.sanwu_zuo7 == "" ? "" : "blue"'>{{sanList.sanwu7==""?'': sanList.sanwu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wu_wu == '' ? '' : showzuo($event,sanList.sanzuo_wu_wu  )" :class='sanList.sanzuo_wu_wu == "" ? "" : "blue"'>{{sanList.sanwu_wu==""?'': sanList.sanzuo_wc_wu}}</li>
                            	<li @click="sanList.sanzuo_wu_wu2 == '' ? '' : showzuo($event,sanList.sanzuo_wu_wu2  )" :class='sanList.sanzuo_wu_wu2 == "" ? "" : "blue"'>{{sanList.sanwu_wu2==""?'': sanList.sanwu_wu2}}</li>
                            	<li @click="sanList.sanzuo_wu_wu3 == '' ? '' : showzuo($event,sanList.sanzuo_wu_wu3 )" :class='sanList.sanzuo_wu_wu3 == "" ? "" : "blue"'>{{sanList.sanwu_wu3==""?'': sanList.sanwu_wu3}}</li>
                            	<li @click="sanList.sanzuo_wu_wu4 == '' ? '' : showzuo($event,sanList.sanzuo_wu_wu4  )" :class='sanList.sanzuo_wu_wu4 == "" ? "" : "blue"'>{{sanList.sanwu_wu4==""?'': sanList.sanwu_wu4}}</li>
                            	<li @click="sanList.sanzuo_wu_wu5 == '' ? '' : showzuo($event,sanList.sanzuo_wu_wu5  )" :class='sanList.sanzuo_wu_wu5 == "" ? "" : "blue"'>{{sanList.sanwu_wu5==""?'': sanList.sanwu_wu5}}</li>
                            	<li @click="sanList.sanzuo_wu_wu6 == '' ? '' : showzuo($event,sanList.sanzuo_wu_wu6  )" :class='sanList.sanzuo_wu_wu6 == "" ? "" : "blue"'>{{sanList.sanwu_wu6==""?'': sanList.sanwu_wu6}}</li>
                            	<li @click="sanList.sanzuo_wu_wu7 == '' ? '' : showzuo($event,sanList.sanzuo_wu_wu7  )" :class='sanList.sanzuo_wu_wu7 == "" ? "" : "blue"'>{{sanList.sanwu_wu7==""?'': sanList.sanwu_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wc_wu  == '' ? '' : showzuo($event,sanList.sanzuo_wc_wu   )" :class='sanList.sanzuo_wc_wu == "" ? "" : "blue"'>{{sanList.sanwc_wu==""?'': sanList.sanwc_wu}}</li>
                            	<li @click="sanList.sanzuo_wc_wu2  == '' ? '' : showzuo($event,sanList.sanzuo_wc_wu2   )" :class='sanList.sanzuo_wc_wu2 == "" ? "" : "blue"'>{{sanList.sanwc_wu2==""?'':sanList.sanwc_wu2}}</li>
                            	<li @click="sanList.sanzuo_wc_wu3  == '' ? '' : showzuo($event,sanList.sanzuo_wc_wu3   )" :class='sanList.sanzuo_wc_wu3 == "" ? "" : "blue"'>{{sanList.sanwc_wu3==""?'': sanList.sanwc_wu3}}</li>
                            	<li @click="sanList.sanzuo_wc_wu4  == '' ? '' : showzuo($event,sanList.sanzuo_wc_wu4   )" :class='sanList.sanzuo_wc_wu4 == "" ? "" : "blue"'>{{sanList.sanwc_wu4==""?'': sanList.sanwc_wu4}}</li>
                            	<li @click="sanList.sanzuo_wc_wu5  == '' ? '' : showzuo($event,sanList.sanzuo_wc_wu5   )" :class='sanList.sanzuo_wc_wu5 == "" ? "" : "blue"'>{{sanList.sanwc_wu5==""?'': sanList.sanwc_wu5}}</li>
                            	<li @click="sanList.sanzuo_wc_wu6  == '' ? '' : showzuo($event,sanList.sanzuo_wc_wu6   )" :class='sanList.sanzuo_wc_wu6 == "" ? "" : "blue"'>{{sanList.sanwc_wu6==""?'': sanList.sanwc_wu6}}</li>
                            	<li @click="sanList.sanzuo_wc_wu7  == '' ? '' : showzuo($event,sanList.sanzuo_wc_wu7   )" :class='sanList.sanzuo_wc_wu7 == "" ? "" : "blue"'>{{sanList.sanwc_wu7==""?'': sanList.sanwc_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期六</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanliu_zuo  == '' ? '' : showzuo($event,sanList.sanliu_zuo  )" :class='sanList.sanliu_zuo == "" ? "" : "blue"'>{{sanList.sanliu==""?'': sanList.sanliu}}</li>
                            	<li @click="sanList.sanliu_zuo2  == '' ? '' : showzuo($event,sanList.sanliu_zuo2  )" :class='sanList.sanliu_zuo2 == "" ? "" : "blue"'>{{sanList.sanliu2==""?'': sanList.sanliu2}}</li>
                            	<li @click="sanList.sanliu_zuo3  == '' ? '' : showzuo($event,sanList.sanliu_zuo3  )" :class='sanList.sanliu_zuo3 == "" ? "" : "blue"'>{{sanList.sanliu3==""?'': sanList.sanliu3}}</li>
                            	<li @click="sanList.sanliu_zuo4  == '' ? '' : showzuo($event,sanList.sanliu_zuo4  )" :class='sanList.sanliu_zuo4 == "" ? "" : "blue"'>{{sanList.sanliu4==""?'': sanList.sanliu4}}</li>
                            	<li @click="sanList.sanliu_zuo5  == '' ? '' : showzuo($event,sanList.sanliu_zuo5  )" :class='sanList.sanliu_zuo5 == "" ? "" : "blue"'>{{sanList.sanliu5==""?'': sanList.sanliu5}}</li>
                            	<li @click="sanList.sanliu_zuo6  == '' ? '' : showzuo($event,sanList.sanliu_zuo6  )" :class='sanList.sanliu_zuo6 == "" ? "" : "blue"'>{{sanList.sanliu6==""?'': sanList.sanliu6}}</li>
                            	<li @click="sanList.sanliu_zuo7 == '' ? '' : showzuo($event,sanList.sanliu_zuo7  )" :class='sanList.sanliu_zuo7 == "" ? "" : "blue"'>{{sanList.sanliu7==""?'': sanList.sanliu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_liu_liu  == '' ? '' : showzuo($event,sanList.sanzuo_liu_liu )" :class='sanList.sanzuo_liu_liu == "" ? "" : "blue"'>{{sanList.sanliu_liu==""?'': sanList.sanliu_liu}}</li>
                            	<li @click="sanList.sanzuo_liu_liu2  == '' ? '' : showzuo($event,sanList.sanzuo_liu_liu2 )" :class='sanList.sanzuo_liu_liu2 == "" ? "" : "blue"'>{{sanList.sanliu_liu2==""?'': sanList.sanliu_liu2}}</li>
                            	<li @click="sanList.sanzuo_liu_liu3  == '' ? '' : showzuo($event,sanList.sanzuo_liu_liu3 )" :class='sanList.sanzuo_liu_liu3 == "" ? "" : "blue"'>{{sanList.sanliu_liu3==""?'': sanList.sanliu_liu3}}</li>
                            	<li @click="sanList.sanzuo_liu_liu4  == '' ? '' : showzuo($event,sanList.sanzuo_liu_liu4 )" :class='sanList.sanzuo_liu_liu4 == "" ? "" : "blue"'>{{sanList.sanliu_liu4==""?'': sanList.sanliu_liu4}}</li>
                            	<li @click="sanList.sanzuo_liu_liu5  == '' ? '' : showzuo($event,sanList.sanzuo_liu_liu5 )" :class='sanList.sanzuo_liu_liu5 == "" ? "" : "blue"'>{{sanList.sanliu_liu5==""?'': sanList.sanliu_liu5}}</li>
                            	<li @click="sanList.sanzuo_liu_liu6  == '' ? '' : showzuo($event,sanList.sanzuo_liu_liu6 )" :class='sanList.sanzuo_liu_liu6 == "" ? "" : "blue"'>{{sanList.sanliu_liu6==""?'': sanList.sanliu_liu6}}</li>
                            	<li @click="sanList.sanzuo_liu_liu7  == '' ? '' : showzuo($event,sanList.sanzuo_liu_liu7 )" :class='sanList.sanzuo_liu_liu7 == "" ? "" : "blue"'>{{sanList.sanliu_liu7==""?'': sanList.sanliu_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wc_liu  == '' ? '' : showzuo($event,sanList.sanzuo_wc_liu )" :class='sanList.sanzuo_wc_liu == "" ? "" : "blue"'>{{sanList.sanwc_liu==""?'': sanList.sanwc_liu}}</li>
                            	<li @click="sanList.sanzuo_wc_liu2  == '' ? '' : showzuo($event,sanList.sanzuo_wc_liu2 )" :class='sanList.sanzuo_wc_liu2 == "" ? "" : "blue"'>{{sanList.sanwc_liu2==""?'': sanList.sanwc_liu2}}</li>
                            	<li @click="sanList.sanzuo_wc_liu3  == '' ? '' : showzuo($event,sanList.sanzuo_wc_liu3 )" :class='sanList.sanzuo_wc_liu3 == "" ? "" : "blue"'>{{sanList.sanwc_liu3==""?'':sanList.sanwc_liu3}}</li>
                            	<li @click="sanList.sanzuo_wc_liu4  == '' ? '' : showzuo($event,sanList.sanzuo_wc_liu4 )" :class='sanList.sanzuo_wc_liu4 == "" ? "" : "blue"'>{{sanList.sanwc_liu4==""?'': sanList.sanwc_liu4}}</li>
                            	<li @click="sanList.sanzuo_wc_liu5  == '' ? '' : showzuo($event,sanList.sanzuo_wc_liu5 )" :class='sanList.sanzuo_wc_liu5 == "" ? "" : "blue"'>{{sanList.sanwc_liu5==""?'': sanList.sanwc_liu5}}</li>
                            	<li @click="sanList.sanzuo_wc_liu6  == '' ? '' : showzuo($event,sanList.sanzuo_wc_liu6 )" :class='sanList.sanzuo_wc_liu6 == "" ? "" : "blue"'>{{sanList.sanwc_liu6==""?'': sanList.sanwc_liu6}}</li>
                            	<li @click="sanList.sanzuo_wc_liu7  == '' ? '' : showzuo($event,sanList.sanzuo_wc_liu7 )" :class='sanList.sanzuo_wc_liu7 == "" ? "" : "blue"'>{{sanList.sanwc_liu7==""?'': sanList.sanwc_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期日</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanri_zuo  == '' ? '' : showzuo($event,sanList.sanri_zuo )" :class='sanList.sanri_zuo == "" ? "" : "blue"'>{{sanList.sanri==""?'': sanList.sanri}}</li>
                            	<li @click="sanList.sanri_zuo2  == '' ? '' : showzuo($event,sanList.sanri_zuo2 )" :class='sanList.sanri_zuo2 == "" ? "" : "blue"'>{{sanList.sanri2==""?'': sanList.sanri2}}</li>
                            	<li @click="sanList.sanri_zuo3  == '' ? '' : showzuo($event,sanList.sanri_zuo3 )" :class='sanList.sanri_zuo3 == "" ? "" : "blue"'>{{sanList.sanri3==""?'': sanList.sanri3}}</li>
                            	<li @click="sanList.sanri_zuo4  == '' ? '' : showzuo($event,sanList.sanri_zuo4 )" :class='sanList.sanri_zuo4 == "" ? "" : "blue"'>{{sanList.sanri4==""?'': sanList.sanri4}}</li>
                            	<li @click="sanList.sanri_zuo5  == '' ? '' : showzuo($event,sanList.sanri_zuo5 )" :class='sanList.sanri_zuo5 == "" ? "" : "blue"'>{{sanList.sanri5==""?'': sanList.sanri5}}</li>
                            	<li @click="sanList.sanri_zuo6  == '' ? '' : showzuo($event,sanList.sanri_zuo6 )" :class='sanList.sanri_zuo6 == "" ? "" : "blue"'>{{sanList.sanri6==""?'': sanList.sanri6}}</li>
                            	<li @click="sanList.sanri_zuo7  == '' ? '' : showzuo($event,sanList.sanri_zuo7 )" :class='sanList.sanri_zuo7 == "" ? "" : "blue"'>{{sanList.sanri7==""?'': sanList.sanri7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="sanList.sanzuo_wu_ri  == '' ? '' : showzuo($event,sanList.sanzuo_wu_ri)" :class='sanList.sanzuo_wu_ri == "" ? "" : "blue"'>{{sanList.sanwu_ri==""?'': sanList.sanwu_ri}}</li>
                            	<li @click="sanList.sanzuo_wu_ri2  == '' ? '' : showzuo($event,sanList.sanzuo_wu_ri2)" :class='sanList.sanzuo_wu_ri2 == "" ? "" : "blue"'>{{sanList.sanwu_ri2==""?'': sanList.sanwu_ri2}}</li>
                            	<li @click="sanList.sanzuo_wu_ri3  == '' ? '' : showzuo($event,sanList.sanzuo_wu_ri3)" :class='sanList.sanzuo_wu_ri3 == "" ? "" : "blue"'>{{sanList.sanwu_ri3==""?'': sanList.sanwu_ri3}}</li>
                            	<li @click="sanList.sanzuo_wu_ri4  == '' ? '' : showzuo($event,sanList.sanzuo_wu_ri4)" :class='sanList.sanzuo_wu_ri4 == "" ? "" : "blue"'>{{sanList.sanwu_ri4==""?'': sanList.sanwu_ri4}}</li>
                            	<li @click="sanList.sanzuo_wu_ri5  == '' ? '' : showzuo($event,sanList.sanzuo_wu_ri5)" :class='sanList.sanzuo_wu_ri5 == "" ? "" : "blue"'>{{sanList.sanwu_ri5==""?'': sanList.sanwu_ri5}}</li>
                            	<li @click="sanList.sanzuo_wu_ri6  == '' ? '' : showzuo($event,sanList.sanzuo_wu_ri6)" :class='sanList.sanzuo_wu_ri6 == "" ? "" : "blue"'>{{sanList.sanwu_ri6==""?'': sanList.sanwu_ri6}}</li>
                            	<li @click="sanList.sanzuo_wu_ri7  == '' ? '' : showzuo($event,sanList.sanzuo_wu_ri7)" :class='sanList.sanzuo_wu_ri7 == "" ? "" : "blue"'>{{sanList.sanwu_ri7==""?'': sanList.sanwu_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                           <ul>
                            	<li @click="sanList.sanzuo_wc_ri  == '' ? '' : showzuo($event,sanList.sanzuo_wc_ri)" :class='sanList.sanzuo_wc_ri == "" ? "" : "blue"'>{{sanList.sanwc_ri==""?'': sanList.sanwc_ri}}</li>
                            	<li @click="sanList.sanzuo_wc_ri2  == '' ? '' : showzuo($event,sanList.sanzuo_wc_ri2)"  :class='sanList.sanzuo_wc_ri2 == "" ? "" : "blue"'>{{sanList.sanwc_ri2==""?'': sanList.sanwc_ri2}}</li>
                            	<li @click="sanList.sanzuo_wc_ri3  == '' ? '' : showzuo($event,sanList.sanzuo_wc_ri3)"  :class='sanList.sanzuo_wc_ri3 == "" ? "" : "blue"'>{{sanList.sanwc_ri3==""?'': sanList.sanwc_ri3}}</li>
                            	<li @click="sanList.sanzuo_wc_ri4  == '' ? '' : showzuo($event,sanList.sanzuo_wc_ri4)"  :class='sanList.sanzuo_wc_ri4 == "" ? "" : "blue"'>{{sanList.sanwc_ri4==""?'': sanList.sanwc_ri4}}</li>
                            	<li @click="sanList.sanzuo_wc_ri5  == '' ? '' : showzuo($event,sanList.sanzuo_wc_ri5)"  :class='sanList.sanzuo_wc_ri5 == "" ? "" : "blue"'>{{sanList.sanwc_ri5==""?'': sanList.sanwc_ri5}}</li>
                            	<li @click="sanList.sanzuo_wc_ri6  == '' ? '' : showzuo($event,sanList.sanzuo_wc_ri6)"  :class='sanList.sanzuo_wc_ri6 == "" ? "" : "blue"'>{{sanList.sanwc_ri6==""?'': sanList.sanwc_ri6}}</li>
                            	<li @click="sanList.sanzuo_wc_ri7  == '' ? '' : showzuo($event,sanList.sanzuo_wc_ri7)"  :class='sanList.sanzuo_wc_ri7 == "" ? "" : "blue"'>{{sanList.sanwc_ri7==""?'': sanList.sanwc_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tip" style='margin-top: 40px;'>注意</div>
            </div>
        
        
        
        <!--第四周-->
        
        <div class="plan-lists" v-if='status=="si_status"'>
                <div class="list">
                    <div class="list-header">星期一</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <!--<div class="content">
                                <span class="blue" @click="blueBtn()">牛奶100ml</span>
                                <span>鸡蛋1个</span>
                            </div>-->
                            <ul>
                            	<li @click="siList.sione_zuo  == '' ? '' : showzuo($event,siList.sione_zuo)"  :class='siList.sione_zuo == "" ? "" : "blue"'>{{periodList.one==""?'': periodList.one}}</li>
                            	<li @click="siList.sione_zuo2  == '' ? '' : showzuo($event,siList.sione_zuo2)" :class='siList.sione_zuo2 == "" ? "" : "blue"'>{{periodList.one2==""?'': periodList.one2}}</li>
                            	<li @click="siList.sione_zuo3  == '' ? '' : showzuo($event,siList.sione_zuo3)" :class='siList.sione_zuo3 == "" ? "" : "blue"'>{{periodList.one3==""?'': periodList.one3}}</li>
                            	<li @click="siList.sione_zuo4  == '' ? '' : showzuo($event,siList.sione_zuo4)" :class='siList.sione_zuo4 == "" ? "" : "blue"'>{{periodList.one4==""?'': periodList.one4}}</li>
                            	<li @click="siList.sione_zuo5  == '' ? '' : showzuo($event,siList.sione_zuo5)" :class='siList.sione_zuo5 == "" ? "" : "blue"'>{{periodList.one5==""?'': periodList.one5}}</li>
                            	<li @click="siList.sione_zuo6  == '' ? '' : showzuo($event,siList.sione_zuo6)" :class='siList.sione_zuo6 == "" ? "" : "blue"'>{{periodList.one6==""?'': periodList.one6}}</li>
                            	<li @click="siList.sione_zuo7  == '' ? '' : showzuo($event,siList.sione_zuo7)" :class='siList.sione_zuo7 == "" ? "" : "blue"'>{{periodList.one7==""?'': periodList.one7}}</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wu_one  == '' ? '' : showzuo($event,siList.sizuo_wu_one)" :class='siList.sizuo_wu_one == "" ? "" : "blue"'>{{siList.siwu_one==""?'': siList.siwu_one}}</li>
                            	<li @click="siList.sizuo_wu_one2  == '' ? '' : showzuo($event,siList.sizuo_wu_one2)" :class='siList.sizuo_wu_one2 == "" ? "" : "blue"'>{{siList.siwu_one2==""?'': siList.siwu_one2}}</li>
                            	<li @click="siList.sizuo_wu_one3  == '' ? '' : showzuo($event,siList.sizuo_wu_one3)" :class='siList.sizuo_wu_one3 == "" ? "" : "blue"'>{{siList.siwu_one3==""?'': siList.siwu_one3}}</li>
                            	<li @click="siList.sizuo_wu_one4  == '' ? '' : showzuo($event,siList.sizuo_wu_one4)" :class='siList.sizuo_wu_one4 == "" ? "" : "blue"'>{{siList.siwu_one4==""?'': siList.siwu_one4}}</li>
                            	<li @click="siList.sizuo_wu_one5  == '' ? '' : showzuo($event,siList.sizuo_wu_one5)" :class='siList.sizuo_wu_one5 == "" ? "" : "blue"'>{{siList.siwu_one5==""?'': siList.siwu_one5}}</li>
                            	<li @click="siList.sizuo_wu_one6  == '' ? '' : showzuo($event,siList.sizuo_wu_one6)" :class='siList.sizuo_wu_one6 == "" ? "" : "blue"'>{{siList.siwu_one6==""?'': siList.siwu_one6}}</li>
                            	<li @click="siList.sizuo_wu_one7  == '' ? '' : showzuo($event,siList.sizuo_wu_one7)" :class='siList.sizuo_wu_one7 == "" ? "" : "blue"'>{{siList.siwu_one7==""?'': siList.siwu_one7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wc_one  == '' ? '' : showzuo($event,siList.sizuo_wc_one)" :class='siList.sizuo_wc_one == "" ? "" : "blue"'>{{siList.siwc_one==""?'': siList.siwc_one}}</li>
                            	<li @click="siList.sizuo_wc_one2  == '' ? '' : showzuo($event,siList.sizuo_wc_one2)" :class='siList.sizuo_wc_one2 == "" ? "" : "blue"'>{{siList.siwc_one2==""?'': siList.siwc_one2}}</li>
                            	<li @click="siList.sizuo_wc_one3  == '' ? '' : showzuo($event,siList.sizuo_wc_one3)" :class='siList.sizuo_wc_one3 == "" ? "" : "blue"'>{{siList.siwc_one3==""?'': siList.siwc_one3}}</li>
                            	<li @click="siList.sizuo_wc_one4  == '' ? '' : showzuo($event,siList.sizuo_wc_one4)" :class='siList.sizuo_wc_one4 == "" ? "" : "blue"'>{{siList.siwc_one4==""?'': siList.siwc_one4}}</li>
                            	<li @click="siList.sizuo_wc_one5  == '' ? '' : showzuo($event,siList.sizuo_wc_one5)" :class='siList.sizuo_wc_one5 == "" ? "" : "blue"'>{{siList.siwc_one5==""?'': siList.siwc_one5}}</li>
                            	<li @click="siList.sizuo_wc_one6  == '' ? '' : showzuo($event,siList.sizuo_wc_one6)" :class='siList.sizuo_wc_one6 == "" ? "" : "blue"'>{{siList.siwc_one6==""?'': siList.siwc_one6}}</li>
                            	<li @click="siList.sizuo_wc_one7  == '' ? '' : showzuo($event,siList.sizuo_wc_one7)" :class='siList.sizuo_wc_one7 == "" ? "" : "blue"'>{{siList.siwc_one7==""?'': siList.siwc_one7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">

                    <div class="list-header">星期二</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sitwo_zuo   == '' ? '' : showzuo($event,siList.sitwo_zuo )" :class='siList.sitwo_zuo == "" ? "" : "blue"'>{{siList.sitwo==""?'': siList.sitwo}}</li>
                            	<li @click="siList.sitwo_zuo2   == '' ? '' : showzuo($event,siList.sitwo_zuo2 )" :class='siList.sitwo_zuo2 == "" ? "" : "blue"'>{{siList.sitwo2==""?'': siList.sitwo2}}</li>
                            	<li @click="siList.sitwo_zuo3   == '' ? '' : showzuo($event,siList.sitwo_zuo3 )" :class='siList.sitwo_zuo3 == "" ? "" : "blue"'>{{siList.sitwo3==""?'': siList.sitwo3}}</li>
                            	<li @click="siList.sitwo_zuo4   == '' ? '' : showzuo($event,siList.sitwo_zuo4 )" :class='siList.sitwo_zuo4 == "" ? "" : "blue"'>{{siList.sitwo4==""?'': siList.sitwo4}}</li>
                            	<li @click="siList.sitwo_zuo5   == '' ? '' : showzuo($event,siList.sitwo_zuo5 )" :class='siList.sitwo_zuo5 == "" ? "" : "blue"'>{{siList.sitwo5==""?'': siList.sitwo5}}</li>
                            	<li @click="siList.sitwo_zuo6   == '' ? '' : showzuo($event,siList.sitwo_zuo6 )" :class='siList.sitwo_zuo6 == "" ? "" : "blue"'>{{siList.sitwo6==""?'': siList.sitwo6}}</li>
                            	<li @click="siList.sitwo_zuo7   == '' ? '' : showzuo($event,siList.sitwo_zuo7 )" :class='siList.sitwo_zuo7 == "" ? "" : "blue"'>{{siList.sitwo7==""?'': siList.sitwo7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wu_two   == '' ? '' : showzuo($event,siList.sizuo_wu_two )" :class='siList.sizuo_wu_two == "" ? "" : "blue"'>{{siList.siwu_two==""?'': siList.siwu_two}}</li>
                            	<li @click="siList.sizuo_wu_two2   == '' ? '' : showzuo($event,siList.sizuo_wu_two2 )" :class='siList.sizuo_wu_two2 == "" ? "" : "blue"'>{{siList.siwu_two2==""?'': siList.siwu_two2}}</li>
                            	<li @click="siList.sizuo_wu_two3   == '' ? '' : showzuo($event,siList.sizuo_wu_two3 )" :class='siList.sizuo_wu_two3 == "" ? "" : "blue"'>{{siList.siwu_two3==""?'': siList.siwu_two3}}</li>
                            	<li @click="siList.sizuo_wu_two4   == '' ? '' : showzuo($event,siList.sizuo_wu_two4 )" :class='siList.sizuo_wu_two4 == "" ? "" : "blue"'>{{siList.siwu_two4==""?'': siList.siwu_two4}}</li>
                            	<li @click="siList.sizuo_wu_two5   == '' ? '' : showzuo($event,siList.sizuo_wu_two5 )" :class='siList.sizuo_wu_two5 == "" ? "" : "blue"'>{{siList.siwu_two5==""?'': siList.siwu_two5}}</li>
                            	<li @click="siList.sizuo_wu_two6  == '' ? '' : showzuo($event,siList.sizuo_wu_two6 )" :class='siList.sizuo_wu_two6 == "" ? "" : "blue"'>{{siList.siwu_two6==""?'': siList.siwu_two6}}</li>
                            	<li @click="siList.sizuo_wu_two7   == '' ? '' : showzuo($event,siList.sizuo_wu_two7 )" :class='siList.sizuo_wu_two7 == "" ? "" : "blue"'>{{siList.siwu_two7==""?'': siList.siwu_two7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wc_two   == '' ? '' : showzuo($event,siList.sizuo_wc_two)" :class='siList.sizuo_wc_two == "" ? "" : "blue"'>{{siList.siwc_two==""?'': siList.siwc_two}}</li>
                            	<li @click="siList.sizuo_wc_two2   == '' ? '' : showzuo($event,siList.sizuo_wc_two2)" :class='siList.sizuo_wc_two2 == "" ? "" : "blue"'>{{siList.siwc_two2==""?'': siList.siwc_two2}}</li>
                            	<li @click="siList.sizuo_wc_two3   == '' ? '' : showzuo($event,siList.sizuo_wc_two3)" :class='siList.sizuo_wc_two3 == "" ? "" : "blue"'>{{siList.siwc_two3==""?'': siList.siwc_two3}}</li>
                            	<li @click="siList.sizuo_wc_two4   == '' ? '' : showzuo($event,siList.sizuo_wc_two4)" :class='siList.sizuo_wc_two4 == "" ? "" : "blue"'>{{siList.siwc_two4==""?'': siList.siwc_two4}}</li>
                            	<li @click="siList.sizuo_wc_two5   == '' ? '' : showzuo($event,siList.sizuo_wc_two5)" :class='siList.sizuo_wc_two5 == "" ? "" : "blue"'>{{siList.siwc_two5==""?'': siList.siwc_two5}}</li>
                            	<li @click="siList.sizuo_wc_two6   == '' ? '' : showzuo($event,siList.sizuo_wc_two6)" :class='siList.sizuo_wc_two6 == "" ? "" : "blue"'>{{siList.siwc_two6==""?'': siList.siwc_two6}}</li>
                            	<li @click="siList.sizuo_wc_two7  == '' ? '' : showzuo($event,siList.sizuo_wc_two7)" :class='siList.sizuo_wc_two7 == "" ? "" : "blue"'>{{siList.siwc_two7==""?'': siList.siwc_two7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期三</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sisan_zuo  == '' ? '' : showzuo($event,siList.sisan_zuo)" :class='siList.sisan_zuo== "" ? "" : "blue"'>{{siList.sisan==""?'': siList.sisan}}</li>
                            	<li @click="siList.sisan_zuo2  == '' ? '' : showzuo($event,siList.sisan_zuo2)" :class='siList.sisan_zuo2 == "" ? "" : "blue"'>{{siList.sisan2==""?'': siList.sisan2}}</li>
                            	<li @click="siList.sisan_zuo3  == '' ? '' : showzuo($event,siList.sisan_zuo3)" :class='siList.sisan_zuo3 == "" ? "" : "blue"'>{{siList.sisan3==""?'': siList.sisan3}}</li>
                            	<li @click="siList.sisan_zuo4  == '' ? '' : showzuo($event,siList.sisan_zuo4)" :class='siList.sisan_zuo4 == "" ? "" : "blue"'>{{siList.sisan4==""?'': siList.sisan4}}</li>
                            	<li @click="siList.sisan_zuo5  == '' ? '' : showzuo($event,siList.sisan_zuo5)" :class='siList.sisan_zuo5 == "" ? "" : "blue"'>{{siList.sisan5==""?'': siList.sisan5}}</li>
                            	<li @click="siList.sisan_zuo6  == '' ? '' : showzuo($event,siList.sisan_zuo6)" :class='siList.sisan_zuo6 == "" ? "" : "blue"'>{{siList.sisan6==""?'': siList.sisan6}}</li>
                            	<li @click="siList.sisan_zuo7  == '' ? '' : showzuo($event,siList.sisan_zuo7)" :class='siList.sisan_zuo7 == "" ? "" : "blue"'>{{siList.sisan7==""?'': siList.sisan7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wu_san  == '' ? '' : showzuo($event,siList.sizuo_wu_san)" :class='siList.sizuo_wu_san == "" ? "" : "blue"'>{{siList.siwu_san==""?'': siList.siwu_san}}</li>
                            	<li @click="siList.sizuo_wu_san2  == '' ? '' : showzuo($event,siList.sizuo_wu_san2)" :class='siList.sizuo_wu_san2 == "" ? "" : "blue"'>{{siList.siwu_san2==""?'': siList.siwu_san2}}</li>
                            	<li @click="siList.sizuo_wu_san3  == '' ? '' : showzuo($event,siList.sizuo_wu_san3)" :class='siList.sizuo_wu_san3 == "" ? "" : "blue"'>{{siList.siwu_san3==""?'': siList.siwu_san3}}</li>
                            	<li @click="siList.sizuo_wu_san4  == '' ? '' : showzuo($event,siList.sizuo_wu_san4)" :class='siList.sizuo_wu_san4 == "" ? "" : "blue"'>{{siList.siwu_san4==""?'': siList.siwu_san4}}</li>
                            	<li @click="siList.sizuo_wu_san5  == '' ? '' : showzuo($event,siList.sizuo_wu_san5)" :class='siList.sizuo_wu_san5 == "" ? "" : "blue"'>{{siList.siwu_san5==""?'': siList.siwu_san5}}</li>
                            	<li @click="siList.sizuo_wu_san6  == '' ? '' : showzuo($event,siList.sizuo_wu_san6)" :class='siList.sizuo_wu_san6 == "" ? "" : "blue"'>{{siList.siwu_san6==""?'': siList.siwu_san6}}</li>
                            	<li @click="siList.sizuo_wu_san7  == '' ? '' : showzuo($event,siList.sizuo_wu_san7)" :class='siList.sizuo_wu_san7 == "" ? "" : "blue"'>{{siList.siwu_san7==""?'': siList.siwu_san7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wc_san  == '' ? '' : showzuo($event,siList.sizuo_wc_san)" :class='siList.sizuo_wc_san == "" ? "" : "blue"'>{{siList.siwc_san==""?'': siList.siwc_san}}</li>
                            	<li @click="siList.sizuo_wc_san2  == '' ? '' : showzuo($event,siList.sizuo_wc_san2)" :class='siList.sizuo_wc_san == "" ? "" : "blue"'>{{siList.siwc_san2==""?'': siList.siwc_san2}}</li>
                            	<li @click="siList.sizuo_wc_san3  == '' ? '' : showzuo($event,siList.sizuo_wc_san3)" :class='siList.sizuo_wc_san == "" ? "" : "blue"'>{{siList.siwc_san3==""?'': siList.siwc_san3}}</li>
                            	<li @click="siList.sizuo_wc_san4  == '' ? '' : showzuo($event,siList.sizuo_wc_san4)" :class='siList.sizuo_wc_san== "" ? "" : "blue"'>{{siList.siwc_san4==""?'': siList.siwc_san4}}</li>
                            	<li @click="siList.sizuo_wc_san5  == '' ? '' : showzuo($event,siList.sizuo_wc_san5)" :class='siList.sizuo_wc_san == "" ? "" : "blue"'>{{siList.siwc_san5==""?'': siList.siwc_san5}}</li>
                            	<li @click="siList.sizuo_wc_san6  == '' ? '' : showzuo($event,siList.sizuo_wc_san6)" :class='siList.sizuo_wc_san == "" ? "" : "blue"'>{{siList.siwc_san6==""?'': siList.siwc_san6}}</li>
                            	<li @click="siList.sizuo_wc_san7  == '' ? '' : showzuo($event,siList.sizuo_wc_san7)" :class='siList.sizuo_wc_san == "" ? "" : "blue"'>{{siList.siwc_san7==""?'': siList.siwc_san7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期四</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sisi_zuo == '' ? '' : showzuo($event,siList.sisi_zuo)" :class='siList.sisi_zuo == "" ? "" : "blue"'>{{siList.sisi==""?'': siList.sisi}}</li>
                            	<li @click="siList.sisi_zuo2 == '' ? '' : showzuo($event,siList.sisi_zuo2)" :class='siList.sisi_zuo2 == "" ? "" : "blue"'>{{siList.sisi2==""?'': siList.sisi2}}</li>
                            	<li @click="siList.sisi_zuo3 == '' ? '' : showzuo($event,siList.sisi_zuo3)" :class='siList.sisi_zuo3 == "" ? "" : "blue"'>{{siList.sisi3==""?'': siList.sisi3}}</li>
                            	<li @click="siList.sisi_zuo4 == '' ? '' : showzuo($event,siList.sisi_zuo4)" :class='siList.sisi_zuo4 == "" ? "" : "blue"'>{{siList.sisi4==""?'': siList.sisi4}}</li>
                            	<li @click="siList.sisi_zuo5 == '' ? '' : showzuo($event,siList.sisi_zuo5)" :class='siList.sisi_zuo5 == "" ? "" : "blue"'>{{siList.sisi5==""?'': siList.sisi5}}</li>
                            	<li @click="siList.sisi_zuo6 == '' ? '' : showzuo($event,siList.sisi_zuo6)" :class='siList.sisi_zuo6 == "" ? "" : "blue"'>{{siList.sisi6==""?'': siList.sisi6}}</li>
                            	<li @click="siList.sisi_zuo7 == '' ? '' : showzuo($event,siList.sisi_zuo7)" :class='siList.sisi_zuo7 == "" ? "" : "blue"'>{{siList.sisi7==""?'': siList.sisi7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wu_si == '' ? '' : showzuo($event,siList.sizuo_wu_si)" :class='siList.sizuo_wu_si == "" ? "" : "blue"'>{{siList.siwu_si==""?'': siList.siwu_si}}</li>
                            	<li @click="siList.sizuo_wu_si2 == '' ? '' : showzuo($event,siList.sizuo_wu_si2)" :class='siList.sizuo_wu_si2 == "" ? "" : "blue"'>{{siList.siwu_si2==""?'': siList.siwu_si2}}</li>
                            	<li @click="siList.sizuo_wu_si3 == '' ? '' : showzuo($event,siList.sizuo_wu_si3)" :class='siList.sizuo_wu_si3 == "" ? "" : "blue"'>{{siList.siwu_si3==""?'': siList.siwu_si3}}</li>
                            	<li @click="siList.sizuo_wu_si4 == '' ? '' : showzuo($event,siList.sizuo_wu_si4)" :class='siList.sizuo_wu_si4 == "" ? "" : "blue"'>{{siList.siwu_si4==""?'': siList.siwu_si4}}</li>
                            	<li @click="siList.sizuo_wu_si5 == '' ? '' : showzuo($event,siList.sizuo_wu_si5)" :class='siList.sizuo_wu_si5 == "" ? "" : "blue"'>{{siList.siwu_si5==""?'': siList.siwu_si5}}</li>
                            	<li @click="siList.sizuo_wu_si6 == '' ? '' : showzuo($event,siList.sizuo_wu_si6)" :class='siList.sizuo_wu_si6 == "" ? "" : "blue"'>{{siList.siwu_si6==""?'': siList.siwu_si6}}</li>
                            	<li @click="siList.sizuo_wu_si7 == '' ? '' : showzuo($event,siList.sizuo_wu_si7)" :class='siList.sizuo_wu_si7 == "" ? "" : "blue"'>{{siList.siwu_si7==""?'': siList.siwu_si7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wc_si == '' ? '' : showzuo($event,siList.sizuo_wc_si)" :class='siList.sizuo_wc_si == "" ? "" : "blue"'>{{siList.siwc_si==""?'': siList.siwc_si}}</li>
                            	<li @click="siList.sizuo_wc_si2 == '' ? '' : showzuo($event,siList.sizuo_wc_si2)" :class='siList.sizuo_wc_si2 == "" ? "" : "blue"'>{{siList.siwc_si2==""?'': siList.siwc_si2}}</li>
                            	<li @click="siList.sizuo_wc_si3 == '' ? '' : showzuo($event,siList.sizuo_wc_si3)" :class='siList.sizuo_wc_si3 == "" ? "" : "blue"'>{{siList.siwc_si3==""?'': siList.siwc_si3}}</li>
                            	<li @click="siList.sizuo_wc_si4 == '' ? '' : showzuo($event,siList.sizuo_wc_si4)" :class='siList.sizuo_wc_si4 == "" ? "" : "blue"'>{{siList.siwc_si4==""?'': siList.siwc_si4}}</li>
                            	<li @click="siList.sizuo_wc_si5 == '' ? '' : showzuo($event,siList.sizuo_wc_si5)" :class='siList.sizuo_wc_si5 == "" ? "" : "blue"'>{{siList.siwc_si5==""?'': siList.siwc_si5}}</li>
                            	<li @click="siList.sizuo_wc_si6 == '' ? '' : showzuo($event,siList.sizuo_wc_si6)" :class='siList.sizuo_wc_si6 == "" ? "" : "blue"'>{{siList.siwc_si6==""?'': siList.siwc_si6}}</li>
                            	<li @click="siList.sizuo_wc_si7 == '' ? '' : showzuo($event,siList.sizuo_wc_si7)" :class='siList.sizuo_wc_si7 == "" ? "" : "blue"'>{{siList.siwc_si7==""?'': siList.siwc_si7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期五</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.siwu_zuo == '' ? '' : showzuo($event,siList.siwu_zuo)" :class='siList.siwu_zuo == "" ? "" : "blue"'>{{siList.siwu==""?'': siList.siwu}}</li>
                            	<li @click="siList.siwu_zuo2 == '' ? '' : showzuo($event,siList.siwu_zuo2)"  :class='siList.siwu_zuo2 == "" ? "" : "blue"'>{{siList.siwu2==""?'': siList.siwu2}}</li>
                            	<li @click="siList.siwu_zuo3 == '' ? '' : showzuo($event,siList.siwu_zuo3)"  :class='siList.siwu_zuo3 == "" ? "" : "blue"'>{{siList.siwu3==""?'': siList.siwu3}}</li>
                            	<li @click="siList.siwu_zuo4 == '' ? '' : showzuo($event,siList.siwu_zuo4)"  :class='siList.siwu_zuo4 == "" ? "" : "blue"'>{{siList.siwu4==""?'': siList.siwu4}}</li>
                            	<li @click="siList.siwu_zuo5 == '' ? '' : showzuo($event,siList.siwu_zuo5)"  :class='siList.siwu_zuo5 == "" ? "" : "blue"'>{{siList.siwu5==""?'': siList.siwu5}}</li>
                            	<li @click="siList.siwu_zuo6 == '' ? '' : showzuo($event,siList.siwu_zuo6)"  :class='siList.siwu_zuo6 == "" ? "" : "blue"'>{{siList.siwu6==""?'': siList.siwu6}}</li>
                            	<li @click="siList.siwu_zuo7 == '' ? '' : showzuo($event,siList.siwu_zuo7)"  :class='siList.siwu_zuo7 == "" ? "" : "blue"'>{{siList.siwu7==""?'': siList.siwu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wu_wu == '' ? '' : showzuo($event,siList.sizuo_wu_wu)"  :class='siList.sizuo_wu_wu == "" ? "" : "blue"'>{{siList.siwu_wu==""?'': siList.siwu_wu}}</li>
                            	<li @click="siList.sizuo_wu_wu2 == '' ? '' : showzuo($event,siList.sizuo_wu_wu2)"  :class='siList.sizuo_wu_wu2 == "" ? "" : "blue"'>{{siList.siwu_wu2==""?'': siList.siwu_wu2}}</li>
                            	<li @click="siList.sizuo_wu_wu3 == '' ? '' : showzuo($event,siList.sizuo_wu_wu3)"  :class='siList.sizuo_wu_wu3 == "" ? "" : "blue"'>{{siList.siwu_wu3==""?'': siList.siwu_wu3}}</li>
                            	<li @click="siList.sizuo_wu_wu4 == '' ? '' : showzuo($event,siList.sizuo_wu_wu4)"  :class='siList.sizuo_wu_wu4 == "" ? "" : "blue"'>{{siList.siwu_wu4==""?'': siList.siwu_wu4}}</li>
                            	<li @click="siList.sizuo_wu_wu5 == '' ? '' : showzuo($event,siList.sizuo_wu_wu5)"  :class='siList.sizuo_wu_wu5 == "" ? "" : "blue"'>{{siList.siwu_wu5==""?'': siList.siwu_wu5}}</li>
                            	<li @click="siList.sizuo_wu_wu6 == '' ? '' : showzuo($event,siList.sizuo_wu_wu6)"  :class='siList.sizuo_wu_wu6 == "" ? "" : "blue"'>{{siList.siwu_wu6==""?'': siList.siwu_wu6}}</li>
                            	<li @click="siList.sizuo_wu_wu7 == '' ? '' : showzuo($event,siList.sizuo_wu_wu7)"  :class='siList.sizuo_wu_wu7 == "" ? "" : "blue"'>{{siList.siwu_wu7==""?'': siList.siwu_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wc_wu == '' ? '' : showzuo($event,siList.sizuo_wc_wu)"  :class='siList.sizuo_wc_wu == "" ? "" : "blue"'>{{siList.siwc_wu==""?'': siList.siwc_wu}}</li>
                            	<li @click="siList.sizuo_wc_wu2 == '' ? '' : showzuo($event,siList.sizuo_wc_wu2)" :class='siList.sizuo_wc_wu2 == "" ? "" : "blue"'>{{siList.siwc_wu2==""?'':siList.siwc_wu2}}</li>
                            	<li @click="siList.sizuo_wc_wu3 == '' ? '' : showzuo($event,siList.sizuo_wc_wu3)" :class='siList.sizuo_wc_wu3 == "" ? "" : "blue"'>{{siList.siwc_wu3==""?'': siList.siwc_wu3}}</li>
                            	<li @click="siList.sizuo_wc_wu4 == '' ? '' : showzuo($event,siList.sizuo_wc_wu4)" :class='siList.sizuo_wc_wu4 == "" ? "" : "blue"'>{{siList.siwc_wu4==""?'': siList.siwc_wu4}}</li>
                            	<li @click="siList.sizuo_wc_wu5 == '' ? '' : showzuo($event,siList.sizuo_wc_wu5)" :class='siList.sizuo_wc_wu5 == "" ? "" : "blue"'>{{siList.siwc_wu5==""?'': siList.siwc_wu5}}</li>
                            	<li @click="siList.sizuo_wc_wu6 == '' ? '' : showzuo($event,siList.sizuo_wc_wu6)" :class='siList.sizuo_wc_wu6 == "" ? "" : "blue"'>{{siList.siwc_wu6==""?'': siList.siwc_wu6}}</li>
                            	<li @click="siList.sizuo_wc_wu7 == '' ? '' : showzuo($event,siList.sizuo_wc_wu7)" :class='siList.sizuo_wc_wu7 == "" ? "" : "blue"'>{{siList.siwc_wu7==""?'': siList.siwc_wu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期六</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.siliu_zuo == '' ? '' : showzuo($event,siList.siliu_zuo)" :class='siList.siliu_zuo == "" ? "" : "blue"'>{{siList.siliu==""?'': siList.siliu}}</li>
                            	<li @click="siList.siliu_zuo2 == '' ? '' : showzuo($event,siList.siliu_zuo2)" :class='siList.siliu_zuo2 == "" ? "" : "blue"'>{{siList.siliu2==""?'': siList.siliu2}}</li>
                            	<li @click="siList.siliu_zuo3 == '' ? '' : showzuo($event,siList.siliu_zuo3)" :class='siList.siliu_zuo3 == "" ? "" : "blue"'>{{siList.siliu3==""?'': siList.siliu3}}</li>
                            	<li @click="siList.siliu_zuo4 == '' ? '' : showzuo($event,siList.siliu_zuo4)" :class='siList.siliu_zuo4 == "" ? "" : "blue"'>{{siList.siliu4==""?'': siList.siliu4}}</li>
                            	<li @click="siList.siliu_zuo5 == '' ? '' : showzuo($event,siList.siliu_zuo5)" :class='siList.siliu_zuo5 == "" ? "" : "blue"'>{{siList.siliu5==""?'': siList.siliu5}}</li>
                            	<li @click="siList.siliu_zuo6 == '' ? '' : showzuo($event,siList.siliu_zuo6)" :class='siList.siliu_zuo6 == "" ? "" : "blue"'>{{siList.siliu6==""?'': siList.siliu6}}</li>
                            	<li @click="siList.siliu_zuo7 == '' ? '' : showzuo($event,siList.siliu_zuo7)" :class='siList.siliu_zuo7 == "" ? "" : "blue"'>{{siList.siliu7==""?'': siList.siliu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_liu_liu == '' ? '' : showzuo($event,siList.sizuo_liu_liu)" :class='siList.sizuo_liu_liu == "" ? "" : "blue"'>{{siList.siliu_liu==""?'': siList.siliu_liu}}</li>
                            	<li @click="siList.sizuo_liu_liu2 == '' ? '' : showzuo($event,siList.sizuo_liu_liu2)" :class='siList.sizuo_liu_liu2 == "" ? "" : "blue"'>{{siList.siliu_liu2==""?'': siList.siliu_liu2}}</li>
                            	<li @click="siList.sizuo_liu_liu3 == '' ? '' : showzuo($event,siList.sizuo_liu_liu3)" :class='siList.sizuo_liu_liu3 == "" ? "" : "blue"'>{{siList.siliu_liu3==""?'': siList.siliu_liu3}}</li>
                            	<li @click="siList.sizuo_liu_liu4 == '' ? '' : showzuo($event,siList.sizuo_liu_liu4)" :class='siList.sizuo_liu_liu4 == "" ? "" : "blue"'>{{siList.siliu_liu4==""?'': siList.siliu_liu4}}</li>
                            	<li @click="siList.sizuo_liu_liu5 == '' ? '' : showzuo($event,siList.sizuo_liu_liu5)" :class='siList.sizuo_liu_liu5 == "" ? "" : "blue"'>{{siList.siliu_liu5==""?'': siList.siliu_liu5}}</li>
                            	<li @click="siList.sizuo_liu_liu6 == '' ? '' : showzuo($event,siList.sizuo_liu_liu6)" :class='siList.sizuo_liu_liu6 == "" ? "" : "blue"'>{{siList.siliu_liu6==""?'': siList.siliu_liu6}}</li>
                            	<li @click="siList.sizuo_liu_liu7 == '' ? '' : showzuo($event,siList.sizuo_liu_liu7)" :class='siList.sizuo_liu_liu7 == "" ? "" : "blue"'>{{siList.siliu_liu7==""?'': siList.siliu_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_wc_liu == '' ? '' : showzuo($event,siList.sizuo_wc_liu)" :class='siList.sizuo_wc_liu == "" ? "" : "blue"'>{{siList.siwc_liu==""?'': siList.siwc_liu}}</li>
                            	<li @click="siList.sizuo_wc_liu2 == '' ? '' : showzuo($event,siList.sizuo_wc_liu2)" :class='siList.sizuo_wc_liu2 == "" ? "" : "blue"'>{{siList.siwc_liu2==""?'': siList.siwc_liu2}}</li>
                            	<li @click="siList.sizuo_wc_liu3 == '' ? '' : showzuo($event,siList.sizuo_wc_liu3)" :class='siList.sizuo_wc_liu3 == "" ? "" : "blue"'>{{siList.siwc_liu3==""?'':siList.siwc_liu3}}</li>
                            	<li @click="siList.sizuo_wc_liu4 == '' ? '' : showzuo($event,siList.sizuo_wc_liu4)" :class='siList.sizuo_wc_liu4 == "" ? "" : "blue"'>{{siList.siwc_liu4==""?'': siList.siwc_liu4}}</li>
                            	<li @click="siList.sizuo_wc_liu5 == '' ? '' : showzuo($event,siList.sizuo_wc_liu5)" :class='siList.sizuo_wc_liu5 == "" ? "" : "blue"'>{{siList.siwc_liu5==""?'': siList.siwc_liu5}}</li>
                            	<li @click="siList.sizuo_wc_liu6 == '' ? '' : showzuo($event,siList.sizuo_wc_liu6)" :class='siList.sizuo_wc_liu6 == "" ? "" : "blue"'>{{siList.siwc_liu6==""?'': siList.siwc_liu6}}</li>
                            	<li @click="siList.sizuo_wc_liu7 == '' ? '' : showzuo($event,siList.sizuo_wc_liu7)" :class='siList.sizuo_wc_liu7 == "" ? "" : "blue"'>{{siList.siwc_liu7==""?'': siList.siwc_liu7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-header">星期日</div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">早餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.siri_zuo== '' ? '' : showzuo($event,siList.siri_zuo)" :class='siList.siri_zuo == "" ? "" : "blue"'>{{siList.siri_zuo==""?'': siList.siri_zuo}}</li>
                            	<li @click="siList.siri_zuo2== '' ? '' : showzuo($event,siList.siri_zuo2)" :class='siList.siri_zuo2 == "" ? "" : "blue"'>{{siList.siri_zuo2==""?'': siList.siri_zuo2}}</li>
                            	<li @click="siList.siri_zuo3== '' ? '' : showzuo($event,siList.siri_zuo3)" :class='siList.siri_zuo3 == "" ? "" : "blue"'>{{siList.siri_zuo3==""?'': siList.siri_zuo3}}</li>
                            	<li @click="siList.siri_zuo4== '' ? '' : showzuo($event,siList.siri_zuo4)" :class='siList.siri_zuo4 == "" ? "" : "blue"'>{{siList.siri_zuo4==""?'': siList.siri_zuo4}}</li>
                            	<li @click="siList.siri_zuo5== '' ? '' : showzuo($event,siList.siri_zuo5)" :class='siList.siri_zuo5 == "" ? "" : "blue"'>{{siList.siri_zuo5==""?'': siList.siri_zuo5}}</li>
                            	<li @click="siList.siri_zuo6== '' ? '' : showzuo($event,siList.siri_zuo6)" :class='siList.siri_zuo6 == "" ? "" : "blue"'>{{siList.siri_zuo6==""?'': siList.siri_zuo6}}</li>
                            	<li @click="siList.siri_zuo7== '' ? '' : showzuo($event,siList.siri_zuo7)" :class='siList.siri_zuo7 == "" ? "" : "blue"'>{{siList.siri_zuo7==""?'': siList.siri_zuo7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">午餐</div>
                        <div class="breakfast-content">
                            <ul>
                            	<li @click="siList.sizuo_ri_ri== '' ? '' : showzuo($event,siList.sizuo_ri_ri)" :class='siList.sizuo_ri_ri == "" ? "" : "blue"'>{{siList.siri_ri==""?'': siList.siri_ri}}</li>
                            	<li @click="siList.sizuo_ri_ri2== '' ? '' : showzuo($event,siList.sizuo_ri_ri2)" :class='siList.sizuo_ri_ri2 == "" ? "" : "blue"'>{{siList.siri_ri2==""?'': siList.siri_ri2}}</li>
                            	<li @click="siList.sizuo_ri_ri3== '' ? '' : showzuo($event,siList.sizuo_ri_ri3)" :class='siList.sizuo_ri_ri3 == "" ? "" : "blue"'>{{siList.siri_ri3==""?'': siList.siri_ri3}}</li>
                            	<li @click="siList.sizuo_ri_ri4== '' ? '' : showzuo($event,siList.sizuo_ri_ri4)" :class='siList.sizuo_ri_ri4 == "" ? "" : "blue"'>{{siList.siri_ri4==""?'': siList.siri_ri4}}</li>
                            	<li @click="siList.sizuo_ri_ri5== '' ? '' : showzuo($event,siList.sizuo_ri_ri5)" :class='siList.sizuo_ri_ri5 == "" ? "" : "blue"'>{{siList.siri_ri5==""?'': siList.siri_ri5}}</li>
                            	<li @click="siList.sizuo_ri_ri6== '' ? '' : showzuo($event,siList.sizuo_ri_ri6)" :class='siList.sizuo_ri_ri6 == "" ? "" : "blue"'>{{siList.siri_ri6==""?'': siList.siri_ri6}}</li>
                            	<li @click="siList.sizuo_ri_ri7== '' ? '' : showzuo($event,siList.sizuo_ri_ri7)" :class='siList.sizuo_ri_ri7 == "" ? "" : "blue"'>{{siList.siri_ri7==""?'': siList.siri_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-breakfast">
                        <div class="breakfast-name">晚餐</div>
                        <div class="breakfast-content">
                           <ul>
                            	<li @click="siList.siri_ri== '' ? '' : showzuo($event,siList.siri_ri)" :class='siList.siri_ri == "" ? "" : "blue"'>{{siList.siwc_ri==""?'': siList.siwc_ri}}</li>
                            	<li @click="siList.siri_ri2== '' ? '' : showzuo($event,siList.siri_ri2)" :class='siList.siri_ri2 == "" ? "" : "blue"'>{{siList.siwc_ri2==""?'': siList.siwc_ri2}}</li>
                            	<li @click="siList.siri_ri3== '' ? '' : showzuo($event,siList.siri_ri3)" :class='siList.siri_ri3 == "" ? "" : "blue"'>{{siList.siwc_ri3==""?'': siList.siwc_ri3}}</li>
                            	<li @click="siList.siri_ri4== '' ? '' : showzuo($event,siList.siri_ri4)" :class='siList.siri_ri4 == "" ? "" : "blue"'>{{siList.siwc_ri4==""?'': siList.siwc_ri4}}</li>
                            	<li @click="siList.siri_ri5== '' ? '' : showzuo($event,siList.siri_ri5)" :class='siList.siri_ri5 == "" ? "" : "blue"'>{{siList.siwc_ri5==""?'': siList.siwc_ri5}}</li>
                            	<li @click="siList.siri_ri6== '' ? '' : showzuo($event,siList.siri_ri6)" :class='siList.siri_ri6 == "" ? "" : "blue"'>{{siList.siwc_ri6==""?'': siList.siwc_ri6}}</li>
                            	<li @click="siList.siri_ri7== '' ? '' : showzuo($event,siList.siri_ri7)" :class='siList.siri_ri7 == "" ? "" : "blue"'>{{siList.siwc_ri7==""?'': siList.siwc_ri7}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
         
        
        
        
        
            <!-- 加餐 -->
            <div class="snacks">
                <div class="snacks-logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="snacks-content">
                    <div class="content-title">加餐</div>
                    <div class="content-box">
                        <div class="content-box-top">
                            <div class="content-top-left">水果</div>
                            <div class="content-top-right">
                                <span>{{snacksList.add}}</span>
                                
                            </div>
                        </div>
                        <div class="content-box-top">
                            <div class="content-top-left">坚果</div>
                            <div class="content-top-right">
                                <span>{{snacksList.add2}}</span>
                               
                            </div>
                        </div>
                    </div>
                    <div class="tip">注意<span style="padding-left: 20px;color:#000000"> {{snacksList.add3}}</span></div>
                </div>
            </div>

            <!-- 计划 -->
            <div class="project-box">
                <div class="project-logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="project-title">减肥计划食谱方案</div>
                <div class="project-tip">
                    <span>膳食计划</span>
                    <span>可替换项</span>
                    <span>备注</span>
                </div>
                <div class="project-content">
                    <div class="content-box">
                        <div class="content-box-left">早餐</div>
                        <div class="content-box-right">
                            <div class="right-top">
                                <span>{{schemeList.p}}</span>
                                <span>{{schemeList.p2}}</span>
                                <span>{{schemeList.p3}}</span>
                                
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.p4}}</span>
                                <span>{{schemeList.p5}}</span>
                                <span>{{schemeList.p6}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.p7}}</span>
                                <span>{{schemeList.p8}}</span>
                                <span>{{schemeList.p9}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.p10}}</span>
                                <span>{{schemeList.p11}}</span>
                                <span>{{schemeList.p12}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.p13}}</span>
                                <span>{{schemeList.p14}}</span>
                                <span>{{schemeList.p15}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.p16}}</span>
                                <span>{{schemeList.p17}}</span>
                                <span>{{schemeList.p18}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.p19}}</span>
                                <span>{{schemeList.p20}}</span>
                                <span>{{schemeList.p21}}</span>
                            </div>
                            <div class="right-tip">
                                注<span>{{schemeList.ptext==""?'':schemeList.ptext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left">午餐</div>
                        <div class="content-box-right">
                            <div class="right-top">
                                <span>{{schemeList.w}}</span>
                                <span>{{schemeList.w2}}</span>
                                <span>{{schemeList.w3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.w4}}</span>
                                <span>{{schemeList.w5}}</span>
                                <span>{{schemeList.w6}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.w7}}</span>
                                <span>{{schemeList.w8}}</span>
                                <span>{{schemeList.w9}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.w10}}</span>
                                <span>{{schemeList.w11}}</span>
                                <span>{{schemeList.w12}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.w13}}</span>
                                <span>{{schemeList.w14}}</span>
                                <span>{{schemeList.w15}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.w16}}</span>
                                <span>{{schemeList.w17}}</span>
                                <span>{{schemeList.w18}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.w19}}</span>
                                <span>{{schemeList.w20}}</span>
                                <span>{{schemeList.w21}}</span>
                            </div>
                            <div class="right-tip">
                                注
                            </div>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left">晚餐</div>
                        <div class="content-box-right">
                            <div class="right-top">
                                <span>{{schemeList.a}}</span>
                                <span>{{schemeList.a2}}</span>
                                <span>{{schemeList.a3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a4}}</span>
                                <span>{{schemeList.a5}}</span>
                                <span>{{schemeList.a6}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a7}}</span>
                                <span>{{schemeList.a8}}</span>
                                <span>{{schemeList.a9}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a10}}</span>
                                <span>{{schemeList.a11}}</span>
                                <span>{{schemeList.a12}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a13}}</span>
                                <span>{{schemeList.a14}}</span>
                                <span>{{schemeList.a15}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a16}}</span>
                                <span>{{schemeList.a17}}</span>
                                <span>{{schemeList.a18}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a19}}</span>
                                <span>{{schemeList.a20}}</span>
                                <span>{{schemeList.a21}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a}}</span>
                                <span>{{schemeList.a2}}</span>
                                <span>{{schemeList.a3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{schemeList.a4}}</span>
                                <span>{{schemeList.a5}}</span>
                                <span>{{schemeList.a6}}</span>
                            </div>
                            <div class="right-tip">
                                注<span>&nbsp;&nbsp;&nbsp;&nbsp;{{schemeList.wtext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="sleep-box">
                        <div class="sleep-box-left">睡前</div>
                        <div class="sleep-box-right">
                             {{schemeList.sleepbefore}}
                        </div>
                    </div>
                    
                </div>
                
                <div class="tip"></div>
            </div>

            <!-- 外卖 -->
            <div class="project-box">
                <div class="project-logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="project-title">外卖应酬饭堂食谱方案</div>
                <div class="project-content">
                    <div class="content-box" style="height:1.2rem">
                        <div class="content-box-left forbid-left">最高限制级</div>
                        <div class="content-box-right forbid-right">
                                {{takeOut.wmai}}
                        </div>
                    </div>
                <div class="content-box" style="height:1.2rem">
                        <div class="content-box-left forbid-left">第二限制级</div>
                        <div class="content-box-right forbid-right">
                                {{takeOut.wmai2}}
                        </div>
                    </div>
                    <div class="content-box" style="height:1.2rem">
                        <div class="content-box-left forbid-left">适量吃</div>
                        <div class="content-box-right forbid-right">
                                {{takeOut.wmai3}}
                        </div>
                    </div>
                <div class="content-box" style="height:1.2rem">
                        <div class="content-box-left forbid-left">推荐吃</div>
                        <div class="content-box-right forbid-right">
                               {{takeOut.wmai4}}
                        </div>
                    </div>
                    
                </div>
                
                <div style="display: none;" class="tip"></div>
            </div>

            <!-- 全日食材 -->
            <div class="project-box">
                <div class="project-logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="project-title">全日食材分类及说明</div>
                <div class="project-content">
                    <div class="content-box" style="height: auto;">
                        <div class="content-box-left forbid-left" style="height: auto;">谷薯类</div>
                        <div class="content-box-right forbid-right">
                            <span>{{allDay.all}}</span>
                            <span style="height: auto;">{{allDay.all_say}}</span>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left forbid-left" style="height: auto;">水果类</div>
                        <div class="content-box-right forbid-right">
                            <span>{{allDay.all2}}</span>
                            <span style="height: auto;">{{allDay.all2_say}}</span>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left forbid-left" style="height: auto;">牛奶类</div>
                        <div class="content-box-right forbid-right">
                            <span>{{allDay.all3}}</span>
                            <span style="height: auto;"> {{allDay.all3_say}}</span>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left forbid-left" style="height: auto;">蔬菜类</div>
                        <div class="content-box-right forbid-right">
                            <span>{{allDay.all4}}</span>
                            <span style="height: auto;"> {{allDay.all4_say}}</span>
                        </div>
                    </div>
                    <div class="content-box" >
                        <div class="content-box-left forbid-left" style="height: auto;">鱼肉类</div>
                        <div class="content-box-right forbid-right">
                            <span>{{allDay.all5}}</span>
                            <span style="height: auto;">{{allDay.all5_say}}</span>
                        </div>
                    </div>
	                <div class="content-box" >
	                        <div class="content-box-left forbid-left" style="height: auto;">蛋类</div>
	                        <div class="content-box-right forbid-right">
	                            <span>{{allDay.all6}}</span>
	                            <span style="height: auto;">{{allDay.all6_say}}</span>
	                        </div>
	                    </div>
                    <div class="content-box" >
                        <div class="content-box-left forbid-left" style="height: auto;">豆类及坚果类</div>
                        <div class="content-box-right forbid-right">
                            <span>{{allDay.all7}}</span>
                            <span style="height: auto;">{{allDay.all7_say}}</span>
                        </div>
                    </div>
                    <div class="content-box" >
                        <div class="content-box-left forbid-left" style="height: auto;">蒸调油</div>
                        <div class="content-box-right forbid-right">
                            <span>{{allDay.all8}}</span>
                            <span style="height: auto;">{{allDay.all8_say}}</span>
                        </div>
                    </div>
                </div>
                
                <div class="tip"></div>
            </div>

            <div class="notes">
                <div class="notes-title">注意事项</div>
                <div style="font-size: 14px;padding: 0 15px;text-align: left;"> {{attentions}}</div>
            </div>
        </div>



        <div v-else class="tan" ref="box" @click="tan($event)">
            <div class="tan-content">
            123123123
            </div>
        </div>

       <!--弹出框-->
       
        <el-dialog
		  
		  :visible.sync="dialogVisible"
		  width="80%"
		  >
		  <div style="font-size: 16px;font-weight: bold;text-align: left;padding-bottom: 10px;">{{title}}</div>
		  <div style="text-align: left;">制作方法:</div>
		  <div style="text-align: left;">{{way}}</div>
		  
		</el-dialog>

    </div>
</template>
<script>
import header from "./header.vue";
export default {
  components: {
    top: header
  },
  data() {
    return {
      header: "计划详情",
      isPupop: true,
      uname:'',
      title:"",
      periodList: [],  //周期计划
	  snacksList: [],   //加餐
	  schemeList: [],  //方案
	  takeOut: [],  //外卖
	  allDay: [],  //全天
	  attentions: '',   //注意事项
	  siList: '', //第四周
	  sanList: '',  //第三周
	  twoList: '', //第二周
	  spname: '',
	  status:'',
	  way:'',
      title:'',
      tip:'',
      dialogVisible:false
    };
  },
    created(){
    	this.getPlanDetailsInfo()
    	
    },
  methods: {
  	showzuo:function(ev,way){
  		console.log(ev)
  		console.log(way)
  		this.way=way;
  		this.title=ev.target.innerText;
  		this.dialogVisible=true;
  	},
    tan: function(event) {
      var el1 = event.currentTarget;
      var el2 = event.target;
      if (el1 == el2) {
        this.$refs.box.style.display = "none";
      }
    },
    getPlanDetailsInfo(){
    	
    	let _this=this;
    	let id=_this.$route.query.id;
    	let status=_this.$route.query.status;
    	_this.status=status;
    	_this.$axios({
    		method:'POST',
    		url:_this.$host+'/index.php/Home/Myplan/myplandetail',
    		params:{
		    	user_id:sessionStorage.getItem('user_id'),
		    	id:id,
		    	status:status
    			
    		}
    	}).then((res)=>{
    		console.log(res)
    		_this.title=res.data.data.title; //计划名称
            _this.periodList=res.data.data.web;  //周期   //第一周
            _this.twoList=res.data.data.twoweb;  //第二周
            _this.sanList=res.data.data.sanweb;  //第三周
            _this.siList=res.data.data.siweb;  //第四周
            _this.snacksList=res.data.data.add_can;   //加餐
            _this.takeOut=res.data.data.wmai;  //外卖
            _this.allDay=res.data.data.all;  //全日
            _this.attentions=res.data.data.shix;   //注意事项
            _this.schemeList=res.data.data.plan;  //计划
            _this.uname=res.data.data.username;  //用户名称
    	})
    },
    popupClick(e){
    	alert(111)
    	console.log(e)
    }
    
  }
};
</script>
<style scoped>
.detail-header {
  width: 100%;
  height: 2.5rem;
  background: #fff;
  position: relative;
}
.detail-header .detail-logo {
  position: absolute;
  width: 3.4rem;
  height: 1.2rem;
  top: 0.4rem;
  left: 50%;
  transform: translateX(-50%);
}
.detail-header .detail-logo img {
  width: 3.4rem;
  height: 1.2rem;
}
.detail-header .detail-set {
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: 0;
  right: 0.3rem;
}
.detail-header .detail-set img {
  width: 0.8rem;
  height: 0.8rem;
}
.detail-info {
  height: 0.5rem;
  line-height: 0.5rem;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0.3rem;
}
.detail-info div:nth-child(1) {
  display: inline-block;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  text-align: left;
}
.detail-info div:nth-child(2) {
  font-size: 0.3rem;
  margin: auto;
}

/* 计划列表 */
.plan-lists {
  width: 100vw;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.list {
  width: 6.3rem;
  height: 5rem;
  border-right: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  display: inline-block;
  margin-right: 0.3rem;
}
.list .list-header {
  height: 0.68rem;
  width: 100%;
  background-color: #bdebf7;
  line-height: 0.68rem;
}
/*早餐*/
.list-breakfast {
  display: flex;
  width: 100%;
  height: c;
  border-bottom: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  
}
.plan-lists::-webkit-scrollbar {
  display: none;
}
.list-breakfast .breakfast-name {
  width: 22%;
  height: 2.08rem;
  border-right: 1px solid #f2f2f2;
  line-height: 2.08rem;
  font-size: 0.26rem;
}
.list-breakfast .breakfast-content {
  width: 78%;
  height:2.08rem;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.24rem;
}
.list-breakfast .breakfast-content .content {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 0.38rem;
  font-size: 0.24rem;
}
#tip2{
	margin-top: 42px;
}
.blue {
  color: #5acfec;
}
.tip {
  height: 0.94rem;
  /* width: 100%; */
  line-height: 0.94rem;
  font-size: 0.26rem;
  color: #2384e9;
  display: flex;
  padding-left: 0.3rem;
}

/*加餐*/
.snacks {
  background-color: #fff;
  width: 100%;
  margin-bottom: 0.2rem;
}
.snacks .snacks-logo {
  width: 3.4rem;
  height: 1.2rem;
  margin: auto;
  padding: 0.2rem 0;
}
.snacks .snacks-logo img {
  width: 3.4rem;
  height: 1.2rem;
}
.snacks .snacks-content {
  width: 100%;
  /* height: 5.5rem; */
}
.snacks .snacks-content .content-title {
  width: 100%;
  background-color: #bdebf7;
  height: 0.68rem;
  font-size: 0.26rem;
  text-align: center;
  line-height: 0.68rem;
}
.snacks .snacks-content .content-box {
  width: 100%;
}
.snacks .snacks-content .content-box .content-box-top {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
}
.content-box-top .content-top-left {
  width: 22%;
  padding-top: 0.2rem;
  text-align: center;
  border-right: 1px solid #f2f2f2;
  font-size: 0.26rem;
}
.content-box-top .content-top-right {
  font-size: 0.24rem;
  width: 50%;
  padding: 0.2rem;
  padding-left: 0.4rem;
}
.content-box-top .content-top-right span {
  display: block;
  font-size: 0.24rem;
  text-align: left;
  line-height: 0.4rem;
}

/*计划*/
.project-box {
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.project-box .project-logo {
  width: 3.4rem;
  height: 1.2rem;
  margin: auto;
  padding: 0.2rem 0;
}
.project-box .project-logo img {
  width: 3.4rem;
  height: 1.2rem;
}
.project-box .project-title {
  font-size: 0.3rem;
  width: 100%;
  height: 0.68rem;
  background-color: #bdebf7;
  line-height: 0.68rem;
}
.project-box .project-tip {
  width: 80%;
  height: 1rem;
  line-height: 1rem;
  margin-left: 20%;
}
.project-box .project-tip span {
  display: inline-block;
  width: 31.7%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.26rem;
}
.project-box .project-content {
  width: 100%;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
}
.project-box .project-content .content-box {
  width: 100%;
  height: auto;
  
  display: flex;
}
.project-box .project-content .content-box .content-box-left {
  font-size: 0.26rem;
  width: 20%;
  height: auto;
  padding: 15px 0;
  
  border-right: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}
.project-box .project-content .content-box .content-box-right {
  font-size: 0.26rem;
  width: 80%;
 
  border-top: 1px solid #f2f2f2;
  box-sizing: border-box;
}
.project-box .project-content .content-box:nth-child(1) .content-box-right {
  border-top: none;
}
.project-content .content-box .content-box-right .right-top {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  border-bottom: 1px solid #f2f2f2;
}
.project-content .content-box .content-box-right .right-top span {
  display: inline-block;
  width: 31.7%;
  height: 0.7rem;
  line-height: 0.7rem;
  border-right: 1px solid #f2f2f2;
}
.project-content .content-box .content-box-right .right-top span:last-child {
  border-right: none;
}
.right-tip {
  text-align: left;
  padding-left: 0.3rem;
  line-height: 0.64rem;
  font-size: 0.26rem;
}
/* .right-tip:nth-child(3){
    border-bottom: 1px solid #f2f2f2;
} */

.sleep-box {
  width: 100%;
  height: 0.7rem;
  display: flex;
  font-size: 0.26rem;
  line-height: 0.7rem;
}
.sleep-box .sleep-box-left {
  width: 20%;
  text-align: center;
  border-right: 1px solid #f2f2f2;
  box-sizing: border-box;
}
.sleep-box .sleep-box-right {
  width: 80%;
  border-top: 1px solid #f2f2f2;
}

.project-box .project-content .content-box .forbid-left {
  height: auto;
  
}
.project-box .project-content .content-box .forbid-right {
  width: 80%;
 
  text-align: left;
  padding-left: 0.2rem;
  display: flex;
}
.forbid-right span {
  width: 50%;
  display: inline-block;
  height: 1.2rem;
}
.forbid-right span:first-child {
  border-right: 1px solid #f2f2f2;
  height: auto;
}
.forbid-right span:last-child {
  padding-left: 0.2rem;
}

/*注意事项*/
.notes {
  width: 100%;
  height: 3rem;
  background-color: #fff;
}
.notes .notes-title {
  font-size: 0.26rem;
  color: #2384e9;
  padding: 0.3rem 0 0 0.3rem;
  text-align: left;
}

/*弹窗*/
.tan {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999999;
}
.tan-content {
  width: 5.4rem;
  padding: 0.7rem 0.3rem;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.breakfast-content ul{
	display: flex;
	flex-wrap: wrap;
	padding: 10px 0;
	width: 100%;
}
.breakfast-content ul li{
	width: 50%;
	padding: 1px 0;
	text-align: center;
}
</style>


