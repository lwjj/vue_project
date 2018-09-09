<template>
    <div class="plan-detail">
        <div v-if="isPupop">
            <top :text="header"></top>

            <div class="detail-header">
                <div class="detail-logo">
                    <img class="logo" src="../assets/images/logo.png" alt="">    
                </div>
                <!-- <div class="detail-set">
                    <img src="../assets/images/custom_not.png" alt="">
                </div> -->
                <div class="detail-info">
                    <div>月经食谱</div>
                </div>
            </div>

            <div class="plan-lists">
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
                <div class="tip">注意   <span style="padding-left: 20px;color:#000000">{{tip}}</span></div>
            </div>
        

            <!-- 计划 -->
            <div class="project-box">
                <div class="project-logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="project-title">感冒食谱</div>
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
                                <span  @click="periodList.one_zuo == '' ? '' : showzuo($event,periodList.one_zuo)">{{cold.p}}</span>
                                <span>{{cold.p2}}</span>
                                <span>{{cold.p3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{cold.p4}}</span>
                                <span>{{cold.p5}}</span>
                                <span>{{cold.p6}}</span>
                            </div>
                            <div class="right-tip">
                                注<span>	&nbsp;	&nbsp;	&nbsp;{{cold.ptext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left">午餐</div>
                        <div class="content-box-right">
                            <div class="right-top">
                                <span >{{cold.w}}</span>
                                <span>{{cold.w2}}</span>
                                <span>{{cold.w3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{cold.w4}}</span>
                                <span>{{cold.w5}}</span>
                                <span>{{cold.w6}}</span>
                            </div>
                            <div class="right-tip">
                                注 <span>	&nbsp;	&nbsp;	&nbsp;{{cold.wtext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left">晚餐</div>
                        <div class="content-box-right">
                            <div class="right-top">
                                <span>{{cold.a1}}</span>
                                <span>{{cold.a2}}</span>
                                <span>{{cold.a3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{cold.a4}}</span>
                                <span>{{cold.a5}}</span>
                                <span>{{cold.a6}}</span>
                            </div>
                            <div class="right-tip">
                                注<span>	&nbsp;	&nbsp;	&nbsp;{{cold.atext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="sleep-box">
                        <div class="sleep-box-left">睡前</div>
                        <div class="sleep-box-right">
                            {{cold.sleepbefore}}
                        </div>
                    </div>
                    
                </div>
                
                <div class="tip"></div>
            </div>

<div class="project-box">
                <div class="project-logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="project-title">酒后食谱</div>
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
                                <span>{{drink.jp}}</span>
                                <span>{{drink.jp2}}</span>
                                <span>{{drink.jp3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{drink.jp4}}</span>
                                <span>{{drink.jp5}}</span>
                                <span>{{drink.jp6}}</span>
                            </div>
                            <div class="right-tip">
                                注 <span>	&nbsp;	&nbsp;	&nbsp;{{drink.jptext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left">午餐</div>
                        <div class="content-box-right">
                            <div class="right-top">
                                <span>{{drink.jw}}</span>
                                <span>{{drink.jw2}}</span>
                                <span>{{drink.jw3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{drink.jw4}}</span>
                                <span>{{drink.jw5}}</span>
                                <span>{{drink.jw6}}</span>
                            </div>
                            <div class="right-tip">
                                注 <span>	&nbsp;	&nbsp;	&nbsp;{{drink.jwtext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="content-box">
                        <div class="content-box-left">晚餐</div>
                        <div class="content-box-right">
                            <div class="right-top">
                                <span>{{drink.ja}}</span>
                                <span>{{drink.ja2}}</span>
                                <span>{{drink.ja3}}</span>
                            </div>
                            <div class="right-top">
                                <span>{{drink.ja4}}</span>
                                <span>{{drink.ja5}}</span>
                                <span>{{drink.ja6}}</span>
                            </div>
                            <div class="right-tip">
                                注 <span>	&nbsp;	&nbsp;	&nbsp;{{drink.jatext}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="sleep-box">
                        <div class="sleep-box-left">睡前</div>
                        <div class="sleep-box-right">
                           {{drink.jsleepbefore}}
                        </div>
                    </div>
                    
                </div>
                
                <div class="tip"></div>
            </div>
          

        

            <div class="notes">
                <div class="notes-title">注意事项</div>
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
    top: header,

  },
  data() {
    return {
      header: "工具箱",
      isPupop: true,
      dialogVisible: false,     
      periodList: [],  //周一到周五数据
      drink: [],  //酒后
      cold: [],  //感冒
      tip: '',  //注意,
      way:'',
      title:''
    };
  },
  created(){
  	this.getHoldInfo()
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
    getHoldInfo(){
       let _this=this;
       _this.$axios(_this.$host+'/index.php/Home/Myplan/hold').then((res)=>{
       	    console.log(res)
       	    _this.periodList=res.data.data.web,
            _this.drink= res.data.data.smok,   //酒后
            _this.cold=JSON.parse(res.data.data.cold),   //感冒 
            _this.tip=res.data.data.zhuyi  //注意
       })
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
  /* display: flex; */
  position: absolute;
  bottom: 0.2rem;
  font-size: .3rem;
}
/* .detail-info div:nth-child(1) {
  display: inline-block;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  text-align: left;
}
.detail-info div:nth-child(2) {
  font-size: 0.3rem;
  margin: auto;
} */

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
  height:auto;
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
}
.plan-lists::-webkit-scrollbar {
  display: none;
}
.list-breakfast .breakfast-name {
  width: 22%;
 
  border-right: 1px solid #f2f2f2;
  line-height: 1.46rem;
  font-size: 0.26rem;
}
.list-breakfast .breakfast-content {
  width: 78%;
  height: auto;
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
  padding-top: 0.5rem;
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
  height: 2.1rem;
  display: flex;
}
.project-box .project-content .content-box .content-box-left {
  font-size: 0.26rem;
  width: 20%;
  height: 2.1rem;
  line-height: 2.1rem;
  border-right: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}
.project-box .project-content .content-box .content-box-right {
  font-size: 0.26rem;
  width: 80%;
  height: 2.1rem;
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
  height: 1.2rem;
  line-height: 1.2rem;
}
.project-box .project-content .content-box .forbid-right {
  width: 80%;
  line-height: 1.2rem;
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


