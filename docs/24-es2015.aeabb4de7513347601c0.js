(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{C3Jh:function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModule",function(){return _});var c=e("ofXK"),a=e("tyNb"),i=e("fXoL");const o=function(t){return{height:t}};let r=(()=>{let t=class{constructor(t,n){this.ngZone=t,this.router=n,window.onresize=t=>{this.ngZone.run(()=>{this.innerHeight=window.innerHeight+"px"})},this.getScreenHeight()}getScreenHeight(){this.innerHeight=window.innerHeight+"px"}ngOnInit(){this.router.navigateByUrl("/dashboard/employee")}onResize(t){this.innerHeight=t.target.innerHeight+"px"}};return t.\u0275fac=function(n){return new(n||t)(i.Ub(i.G),i.Ub(a.c))},t.\u0275cmp=i.Ob({type:t,selectors:[["app-dashboard"]],decls:2,vars:3,consts:[[1,"page-wrapper",3,"ngStyle","resized"]],template:function(t,n){1&t&&(i.ac(0,"div",0),i.hc("resized",function(t){return n.onResize(t)}),i.Vb(1,"router-outlet"),i.Zb()),2&t&&i.pc("ngStyle",i.tc(1,o,n.innerHeight))},directives:[c.n,a.g],styles:[""]}),t})();var s=e("rmPI"),d=e("tk/3");let b=(()=>{class t{constructor(t){this.http=t}getTotalEmployees(){return this.http.get(`${s.a}/api/v1/adminDashboard/getTotalEmployee`)}getTotalEmployeesPresentToday(){return this.http.get(`${s.a}/api/v1/adminDashboard/getPresentEmployeeToday`)}getTotalEmployeesJoinedThisMonth(){return this.http.get(`${s.a}/api/v1/adminDashboard/totalEmployeesJoinedLastMonth`)}}return t.\u0275fac=function(n){return new(n||t)(i.ec(d.c))},t.\u0275prov=i.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),l=(()=>{class t{constructor(t){this._dashboardService=t}ngOnInit(){this._countTotalEmployees(),this._getTotalEmployeesPresentToday(),this._getEmployeesJoinedThisMonth()}_countTotalEmployees(){this._dashboardService.getTotalEmployees().subscribe(t=>{this.empTotal=t})}_getTotalEmployeesPresentToday(){this._dashboardService.getTotalEmployeesPresentToday().subscribe(t=>{this.empPresent=t})}_getEmployeesJoinedThisMonth(){this._dashboardService.getTotalEmployeesJoinedThisMonth().subscribe(t=>{this.empThisMonth=t})}}return t.\u0275fac=function(n){return new(n||t)(i.Ub(b))},t.\u0275cmp=i.Ob({type:t,selectors:[["app-admin-dashboard"]],decls:119,vars:4,consts:[[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"col-md-6","col-sm-6","col-lg-6","col-xl-3"],[1,"card","dash-widget"],[1,"card-body"],[1,"dash-widget-icon"],[1,"fa","fa-cubes"],[1,"dash-widget-info"],[1,"fa","fa-usd"],[1,"fa","fa-diamond"],[1,"fa","fa-user"],[1,"col-md-12"],[1,"card-group","m-b-30"],[1,"card"],[1,"d-flex","justify-content-between","mb-3"],[1,"d-block"],[1,"text-success"],[1,"mb-3"],[1,"progress","mb-2",2,"height","5px"],["role","progressbar","aria-valuenow","40","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-primary",2,"width","70%"],[1,"mb-0"],[1,"text-muted"],[1,"text-danger"]],template:function(t,n){1&t&&(i.ac(0,"div",0),i.ac(1,"div",1),i.ac(2,"div",2),i.ac(3,"div",3),i.ac(4,"h3",4),i.Lc(5,"Welcome Admin!"),i.Zb(),i.ac(6,"ul",5),i.ac(7,"li",6),i.Lc(8,"Dashboard"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(9,"div",2),i.ac(10,"div",7),i.ac(11,"div",8),i.ac(12,"div",9),i.ac(13,"span",10),i.Vb(14,"i",11),i.Zb(),i.ac(15,"div",12),i.ac(16,"h3"),i.Lc(17),i.Zb(),i.ac(18,"span"),i.Lc(19,"Total Employees"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(20,"div",7),i.ac(21,"div",8),i.ac(22,"div",9),i.ac(23,"span",10),i.Vb(24,"i",13),i.Zb(),i.ac(25,"div",12),i.ac(26,"h3"),i.Lc(27),i.Zb(),i.ac(28,"span"),i.Lc(29,"New Employees"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(30,"div",7),i.ac(31,"div",8),i.ac(32,"div",9),i.ac(33,"span",10),i.Vb(34,"i",14),i.Zb(),i.ac(35,"div",12),i.ac(36,"h3"),i.Lc(37),i.Zb(),i.ac(38,"span"),i.Lc(39,"Total Present Today"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(40,"div",7),i.ac(41,"div",8),i.ac(42,"div",9),i.ac(43,"span",10),i.Vb(44,"i",15),i.Zb(),i.ac(45,"div",12),i.ac(46,"h3"),i.Lc(47),i.Zb(),i.ac(48,"span"),i.Lc(49,"Total Absent Today"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(50,"div",2),i.ac(51,"div",16),i.ac(52,"div",17),i.ac(53,"div",18),i.ac(54,"div",9),i.ac(55,"div",19),i.ac(56,"div"),i.ac(57,"span",20),i.Lc(58,"New Employees"),i.Zb(),i.Zb(),i.ac(59,"div"),i.ac(60,"span",21),i.Lc(61,"+10%"),i.Zb(),i.Zb(),i.Zb(),i.ac(62,"h3",22),i.Lc(63,"10"),i.Zb(),i.ac(64,"div",23),i.Vb(65,"div",24),i.Zb(),i.ac(66,"p",25),i.Lc(67,"Overall Employees 218"),i.Zb(),i.Zb(),i.Zb(),i.ac(68,"div",18),i.ac(69,"div",9),i.ac(70,"div",19),i.ac(71,"div"),i.ac(72,"span",20),i.Lc(73,"Earnings"),i.Zb(),i.Zb(),i.ac(74,"div"),i.ac(75,"span",21),i.Lc(76,"+12.5%"),i.Zb(),i.Zb(),i.Zb(),i.ac(77,"h3",22),i.Lc(78,"$1,42,300"),i.Zb(),i.ac(79,"div",23),i.Vb(80,"div",24),i.Zb(),i.ac(81,"p",25),i.Lc(82,"Previous Month "),i.ac(83,"span",26),i.Lc(84,"$1,15,852"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(85,"div",18),i.ac(86,"div",9),i.ac(87,"div",19),i.ac(88,"div"),i.ac(89,"span",20),i.Lc(90,"Expenses"),i.Zb(),i.Zb(),i.ac(91,"div"),i.ac(92,"span",27),i.Lc(93,"-2.8%"),i.Zb(),i.Zb(),i.Zb(),i.ac(94,"h3",22),i.Lc(95,"$8,500"),i.Zb(),i.ac(96,"div",23),i.Vb(97,"div",24),i.Zb(),i.ac(98,"p",25),i.Lc(99,"Previous Month "),i.ac(100,"span",26),i.Lc(101,"$7,500"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(102,"div",18),i.ac(103,"div",9),i.ac(104,"div",19),i.ac(105,"div"),i.ac(106,"span",20),i.Lc(107,"Profit"),i.Zb(),i.Zb(),i.ac(108,"div"),i.ac(109,"span",27),i.Lc(110,"-75%"),i.Zb(),i.Zb(),i.Zb(),i.ac(111,"h3",22),i.Lc(112,"$1,12,000"),i.Zb(),i.ac(113,"div",23),i.Vb(114,"div",24),i.Zb(),i.ac(115,"p",25),i.Lc(116,"Previous Month "),i.ac(117,"span",26),i.Lc(118,"$1,42,000"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb()),2&t&&(i.Ib(17),i.Mc(n.empTotal.totalEmp),i.Ib(10),i.Mc(n.empThisMonth.lastMonthJoinedEmployees),i.Ib(10),i.Mc(n.empPresent.presentEmployee),i.Ib(10),i.Mc(n.empTotal.totalEmp-n.empPresent.presentEmployee))},styles:[".content[_ngcontent-%COMP%]{padding:30px}"]}),t})();var g=e("d//k");let m=(()=>{class t{constructor(t){this.http=t}getLastSevenDaysAttn(){return this.http.get(`${s.a}/attnProc/lastSevenDaysAttn`)}}return t.\u0275fac=function(n){return new(n||t)(i.ec(d.c))},t.\u0275prov=i.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h=["hrHand"],p=["minHand"],u=["secHand"];function v(t,n){if(1&t&&(i.ac(0,"td",45),i.Lc(1),i.Zb()),2&t){const t=i.jc().$implicit;i.Ib(1),i.Nc(" ",t.attnDayStsFinalType," ")}}function Z(t,n){if(1&t&&(i.ac(0,"td",46),i.Lc(1),i.Zb()),2&t){const t=i.jc().$implicit;i.Ib(1),i.Nc(" ",t.attnDayStsFinalType," ")}}function f(t,n){if(1&t&&(i.ac(0,"td",47),i.Lc(1),i.Zb()),2&t){const t=i.jc().$implicit;i.Ib(1),i.Nc(" ",t.attnDayStsFinalType," ")}}function y(t,n){if(1&t&&(i.ac(0,"td",48),i.Lc(1),i.Zb()),2&t){const t=i.jc().$implicit;i.Ib(1),i.Nc(" ",t.attnDayStsFinalType," ")}}function M(t,n){if(1&t&&(i.ac(0,"td",48),i.Lc(1),i.Zb()),2&t){const t=i.jc().$implicit;i.Ib(1),i.Nc(" ",t.attnDayStsFinalType," ")}}function P(t,n){if(1&t&&(i.ac(0,"tr",40),i.ac(1,"td"),i.Lc(2),i.kc(3,"date"),i.Zb(),i.ac(4,"td"),i.Lc(5),i.Zb(),i.ac(6,"td"),i.Lc(7),i.Zb(),i.Jc(8,v,2,1,"td",41),i.Jc(9,Z,2,1,"td",42),i.Jc(10,f,2,1,"td",43),i.Jc(11,y,2,1,"td",44),i.Jc(12,M,2,1,"td",44),i.Zb()),2&t){const t=n.$implicit;i.Ib(2),i.Mc(i.lc(3,8,t.createDate)),i.Ib(3),i.Mc(t.inTime),i.Ib(2),i.Mc(t.outTime),i.Ib(1),i.pc("ngIf",1==t.isColor),i.Ib(1),i.pc("ngIf",2==t.isColor),i.Ib(1),i.pc("ngIf",null==t.isColor),i.Ib(1),i.pc("ngIf",4==t.isColor),i.Ib(1),i.pc("ngIf",3==t.isColor)}}const C=[{path:"",component:r,children:[{path:"admin",component:l},{path:"employee",component:(()=>{class t{constructor(t,n){this.empDeshbrd=t,this.login=n,this.daysArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.monthArray=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.date=new Date}ngOnInit(){setInterval(()=>{const t=new Date;this.updateClock(t)},1e3),this.day=this.daysArray[this.date.getDay()],this.dateCount=this.date.getDate(),this.month=this.monthArray[this.date.getMonth()],this.year=this.date.getFullYear(),this.lastSevenDaysAttn(),this.lodeLoginUser()}updateClock(t){this.secHand.nativeElement.style.transform="rotate("+6*t.getSeconds()+"deg)",this.minHand.nativeElement.style.transform="rotate("+6*t.getMinutes()+"deg)",this.hrHand.nativeElement.style.transform="rotate("+(30*t.getHours()+.5*t.getMinutes())+"deg)";const n=t.getHours();this.ampm=n>=12?"PM":"AM",this.hour=n%12,this.hour=this.hour?this.hour:12,this.hour=this.hour<10?"0"+this.hour:this.hour;const e=t.getMinutes();this.minute=e<10?"0"+e:e.toString();const c=t.getSeconds();this.second=c<10?"0"+c:c.toString()}lastSevenDaysAttn(){this.empDeshbrd.getLastSevenDaysAttn().subscribe(t=>{this.last7DaysAttn=t,console.log(this.last7DaysAttn)})}lodeLoginUser(){this.user=this.login.getUser(),this.profileImageUrl=s.a+this.user.pic_}}return t.\u0275fac=function(n){return new(n||t)(i.Ub(m),i.Ub(g.a))},t.\u0275cmp=i.Ob({type:t,selectors:[["app-employee-dashboard"]],viewQuery:function(t,n){if(1&t&&(i.Rc(h,1),i.Rc(p,1),i.Rc(u,1)),2&t){let t;i.yc(t=i.ic())&&(n.hrHand=t.first),i.yc(t=i.ic())&&(n.minHand=t.first),i.yc(t=i.ic())&&(n.secHand=t.first)}},decls:99,vars:14,consts:[[1,"content","container-fluid"],[1,"row"],[1,"col-md-12"],[1,"welcome-box"],[1,"welcome-img"],["onerror","this.src='assets/img/profiles/avatar-5.jpg'","alt","",1,"img-design",3,"src"],[1,"welcome-det"],[1,"dayTitle"],[1,"col-lg-8","col-md-8"],[1,"dash-section"],[1,"dash-sec-title"],[1,"col-lg-4","col-md-4"],[1,"dash-sidebar"],[1,"card"],[1,"card-body"],[1,"center-clock"],[1,"clock"],[1,"num","num1"],[1,"num","num2"],[1,"num","num3"],[1,"num","num4"],[1,"num","num5"],[1,"num","num6"],[1,"num","num7"],[1,"num","num8"],[1,"num","num9"],[1,"num","num10"],[1,"num","num11"],[1,"num","num12"],[1,"hr-hand"],["hrHand",""],[1,"min-hand"],["minHand",""],[1,"sec-hand"],["secHand",""],[1,"digitalClock"],[1,"digitalTime"],[1,"table","table-sm"],["scope","col"],["style","font-size: 12px;",4,"ngFor","ngForOf"],[2,"font-size","12px"],["style","color: green;",4,"ngIf"],["style","color: #5c592d;",4,"ngIf"],["style","color: rgb(228, 19, 36);",4,"ngIf"],["style","color: rgb(251, 182, 54);",4,"ngIf"],[2,"color","green"],[2,"color","#5c592d"],[2,"color","rgb(228, 19, 36)"],[2,"color","rgb(251, 182, 54)"]],template:function(t,n){1&t&&(i.ac(0,"div",0),i.ac(1,"div",1),i.ac(2,"div",2),i.ac(3,"div",3),i.ac(4,"div",4),i.Vb(5,"img",5),i.Zb(),i.ac(6,"div",6),i.ac(7,"div"),i.ac(8,"h3"),i.Lc(9),i.Zb(),i.Zb(),i.ac(10,"div",7),i.Lc(11),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(12,"div",1),i.ac(13,"div",8),i.ac(14,"section",9),i.ac(15,"h1",10),i.Lc(16,"Notifications"),i.Zb(),i.Zb(),i.Zb(),i.ac(17,"div",11),i.ac(18,"div",12),i.ac(19,"section"),i.ac(20,"div",13),i.ac(21,"div",14),i.ac(22,"div",15),i.ac(23,"div",1),i.ac(24,"div",2),i.ac(25,"div",16),i.ac(26,"div",17),i.ac(27,"div"),i.Lc(28,"1"),i.Zb(),i.Zb(),i.ac(29,"div",18),i.ac(30,"div"),i.Lc(31,"2"),i.Zb(),i.Zb(),i.ac(32,"div",19),i.ac(33,"div"),i.Lc(34,"3"),i.Zb(),i.Zb(),i.ac(35,"div",20),i.ac(36,"div"),i.Lc(37,"4"),i.Zb(),i.Zb(),i.ac(38,"div",21),i.ac(39,"div"),i.Lc(40,"5"),i.Zb(),i.Zb(),i.ac(41,"div",22),i.ac(42,"div"),i.Lc(43,"6"),i.Zb(),i.Zb(),i.ac(44,"div",23),i.ac(45,"div"),i.Lc(46,"7"),i.Zb(),i.Zb(),i.ac(47,"div",24),i.ac(48,"div"),i.Lc(49,"8"),i.Zb(),i.Zb(),i.ac(50,"div",25),i.ac(51,"div"),i.Lc(52,"9"),i.Zb(),i.Zb(),i.ac(53,"div",26),i.ac(54,"div"),i.Lc(55,"10"),i.Zb(),i.Zb(),i.ac(56,"div",27),i.ac(57,"div"),i.Lc(58,"11"),i.Zb(),i.Zb(),i.ac(59,"div",28),i.ac(60,"div"),i.Lc(61,"12"),i.Zb(),i.Zb(),i.Vb(62,"div",29,30),i.Vb(64,"div",31,32),i.Vb(66,"div",33,34),i.Zb(),i.Zb(),i.ac(68,"div",2),i.ac(69,"div",15),i.ac(70,"div",35),i.ac(71,"div",36),i.ac(72,"div"),i.Lc(73),i.Zb(),i.ac(74,"div"),i.Lc(75),i.Zb(),i.ac(76,"div"),i.Lc(77),i.Zb(),i.ac(78,"div"),i.Lc(79),i.Zb(),i.Lc(80),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(81,"section"),i.ac(82,"h3"),i.Lc(83,"My Last 7 Days Attendance"),i.Zb(),i.ac(84,"div",13),i.ac(85,"div",14),i.ac(86,"table",37),i.ac(87,"thead"),i.ac(88,"tr"),i.ac(89,"th",38),i.Lc(90,"Date"),i.Zb(),i.ac(91,"th",38),i.Lc(92,"In "),i.Zb(),i.ac(93,"th",38),i.Lc(94,"Out "),i.Zb(),i.ac(95,"th",38),i.Lc(96,"Status"),i.Zb(),i.Zb(),i.Zb(),i.ac(97,"tbody"),i.Jc(98,P,13,10,"tr",39),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.Zb()),2&t&&(i.Ib(5),i.pc("src",n.profileImageUrl,i.Fc),i.Ib(4),i.Nc("Welcome, ",n.user.firstName,""),i.Ib(2),i.Qc(" ",n.day,", ",n.dateCount," ",n.month," ",n.year," "),i.Ib(62),i.Nc("",n.hour," : \xa0"),i.Ib(2),i.Nc("",n.minute," : \xa0"),i.Ib(2),i.Nc("",n.second," \xa0"),i.Ib(2),i.Mc(n.ampm),i.Ib(1),i.Pc(" \xa0\xa0 | \xa0\xa0",n.dateCount," ",n.month," ",n.year," "),i.Ib(18),i.pc("ngForOf",n.last7DaysAttn))},directives:[c.l,c.m],pipes:[c.e],styles:['.content[_ngcontent-%COMP%]{padding:30px}.clock[_ngcontent-%COMP%]{position:relative;width:170px;height:170px;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:50%;border:3px solid #9f9d9d;box-shadow:inset 0 0 30px rgba(0,0,0,.1),0 20px 20px rgba(0,0,0,.2),0 0 0 4px #fff;margin-left:auto;margin-right:auto}.clock[_ngcontent-%COMP%]:before{content:"";position:absolute;width:10px;height:10px;background:#848484;border:2px solid #fff;z-index:100000;border-radius:50%}.sec-hand[_ngcontent-%COMP%]{width:1px;height:50%;background:#ff6767;top:10%;left:50%}.min-hand[_ngcontent-%COMP%], .sec-hand[_ngcontent-%COMP%]{transform-origin:50% 80%;position:absolute;border-radius:100% 100% 0 0}.min-hand[_ngcontent-%COMP%]{width:3px;height:40%;background:#d6d6d6;top:18%;left:calc(50% - 1px)}.hr-hand[_ngcontent-%COMP%]{width:5px;height:25%;background:#848484;transform-origin:50% 80%;top:30%;left:calc(50% + -2px);border-radius:100% 100% 0 0}.hr-hand[_ngcontent-%COMP%], .num[_ngcontent-%COMP%]{position:absolute}.num[_ngcontent-%COMP%]{height:100%;left:calc(50% - .5em)}.num[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:1em;line-height:2em;color:#858383;text-align:center;vertical-align:middle}.num1[_ngcontent-%COMP%]{transform:rotate(30deg)}.num1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-30deg)}.num2[_ngcontent-%COMP%]{transform:rotate(60deg)}.num2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-60deg)}.num3[_ngcontent-%COMP%]{transform:rotate(90deg)}.num3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-90deg)}.num4[_ngcontent-%COMP%]{transform:rotate(120deg)}.num4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-120deg)}.num5[_ngcontent-%COMP%]{transform:rotate(150deg)}.num5[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-150deg)}.num6[_ngcontent-%COMP%]{transform:rotate(180deg)}.num6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-180deg)}.num7[_ngcontent-%COMP%]{transform:rotate(210deg)}.num7[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-210deg)}.num8[_ngcontent-%COMP%]{transform:rotate(240deg)}.num8[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-240deg)}.num9[_ngcontent-%COMP%]{transform:rotate(270deg)}.num9[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-270deg)}.num10[_ngcontent-%COMP%]{transform:rotate(300deg)}.num10[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-300deg)}.num11[_ngcontent-%COMP%]{transform:rotate(330deg)}.num11[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-330deg)}.num12[_ngcontent-%COMP%]{transform:rotate(1turn)}.num12[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:rotate(-1turn)}[_nghost-%COMP%]{justify-items:center}.digitalClock[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;align-items:center;height:auto;width:auto}.digitalClock[_ngcontent-%COMP%]{margin-top:40px;position:relative;flex-direction:column;justify-content:center;background-color:#fdfdfd;border:3px solid #9f9d9d;border-radius:5px;box-shadow:inset 0 0 15px 0 20px 20px #000 rgba(0,0,0,.4);color:#484646;text-transform:uppercase}.digitalTime[_ngcontent-%COMP%]{display:flex}.dayTitle[_ngcontent-%COMP%]{font-size:16px}.img-design[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%}.center-clock[_ngcontent-%COMP%]{justify-content:center;align-items:left}']}),t})()}]}];let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Sb({type:t}),t.\u0275inj=i.Rb({imports:[[a.f.forChild(C)],a.f]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Sb({type:t}),t.\u0275inj=i.Rb({}),t})(),_=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Sb({type:t}),t.\u0275inj=i.Rb({imports:[[c.c,L,O]]}),t})()}}]);