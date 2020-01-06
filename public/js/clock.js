class Clock {
  constructor(language) {
    this.language = language;
    this.date = new Date();
    this.m = this.date.getMonth();
    this.d = this.date.getDate();
    this.w = this.date.getDay();
    this.h = this.date.getHours();
    this.min = this.date.getMinutes();
    this.sec = this.date.getSeconds();

    this.mDeg = this.m * 30;
    this.dDeg = (this.d - 1) * 11.61;
    this.wDeg = this.w * 51.43;
    this.hDeg = this.h * 15;
    this.minDeg = this.min * -6;
    this.secDeg = this.sec * -6;

    this.monthArr = Object.values(document.getElementsByClassName("month"));
    this.dateArr = Object.values(document.getElementsByClassName("d"));
    this.weekArr = Object.values(document.getElementsByClassName("w"));
    this.hourArr = Object.values(document.getElementsByClassName("h"));
    this.minArr = Object.values(document.getElementsByClassName("m"));
    this.secArr = Object.values(document.getElementsByClassName("s"));
  }
  draw() {
    this.monthArr.forEach(element => {
      let deg = this.monthArr.indexOf(element) * -30 + this.mDeg;
      element.style.transform = `rotate(${deg}deg)`;
      if (deg === 0) {
        element.style.color = "white";
        element.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
      } else {
        element.style.color = "rgba(255, 255, 255, 0.4)";
        element.style.textShadow = "none";
      }
    });

    this.dateArr.forEach(element => {
      let deg = this.dateArr.indexOf(element) * -11.61 + this.dDeg;
      element.style.transform = `rotate(${deg}deg)`;
      if (deg === 0) {
        element.style.color = "white";
        element.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
      } else {
        element.style.color = "rgba(255, 255, 255, 0.4)";
        element.style.textShadow = "none";
      }
    });

    this.weekArr.forEach(element => {
      let deg = this.weekArr.indexOf(element) * -51.43 + this.wDeg;
      element.style.transform = `rotate(${deg}deg)`;
      if (deg === 0) {
        element.style.color = "white";
        element.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
      } else {
        element.style.color = "rgba(255, 255, 255, 0.4)";
        element.style.textShadow = "none";
      }
    });

    this.hourArr.forEach(element => {
      let deg = this.hourArr.indexOf(element) * -15 + this.hDeg;
      element.style.transform = `rotate(${deg}deg)`;
      if (deg === 0) {
        element.style.color = "white";
        element.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
      } else {
        element.style.color = "rgba(255, 255, 255, 0.4)";
        element.style.textShadow = "none";
      }
    });

    this.minArr.forEach(element => {
      let deg = this.minArr.indexOf(element) * -6 + this.minDeg;
      element.style.transform = `rotate(${deg}deg)`;
      if (deg === 0) {
        element.style.color = "white";
        element.style.textShadow = "rgba(255, 255, 255, 1) 0px 0px 10px ";
      } else {
        element.style.color = "rgba(255, 255, 255, 0.4)";
        element.style.textShadow = "none";
      }
    });

    this.secArr.forEach(element => {
      let deg = this.secArr.indexOf(element) * -6 + this.secDeg;
      element.style.transform = `rotate(${deg}deg)`;
      if (deg === 0) {
        element.style.color = "white";
        element.style.textShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
      } else {
        element.style.color = "rgba(255, 255, 255, 0.4)";
        element.style.textShadow = "none";
      }
    });
  }

  update() {
    this.date = new Date();
    this.m = this.date.getMonth();
    this.d = this.date.getDate();
    this.w = this.date.getDay();
    this.h = this.date.getHours();
    this.min = this.date.getMinutes();
    this.sec = this.date.getSeconds();

    this.mDeg = this.m * 30;
    this.dDeg = (this.d - 1) * 11.61;
    this.wDeg = this.w * 51.43;
    this.hDeg = this.h * 15;
    this.minDeg = this.min * 6;
    this.secDeg = this.sec * 6;
  }
}
const language = [
  `<div class="container language">
<button type="button" class="btn btn-language">KO</button>
</div>
<div class="container" id="month">
<div class="month month0">일월</div>
<div class="month month1">이월</div>
<div class="month month2">삼월</div>
<div class="month month3">사월</div>
<div class="month month4">오월</div>
<div class="month month5">유월</div>
<div class="month month6">칠월</div>
<div class="month month7">팔월</div>
<div class="month month8">구월</div>
<div class="month month9">시월</div>
<div class="month month10">십일월</div>
<div class="month month11">십이월</div>
</div>
<div class="container" id="date">
<div class="d d1">일일</div>
<div class="d d2">이일</div>
<div class="d d3">삼일</div>
<div class="d d4">사일</div>
<div class="d d5">오일</div>
<div class="d d6">유일</div>
<div class="d d7">칠일</div>
<div class="d d8">팔일</div>
<div class="d d9">구일</div>
<div class="d d10">시일</div>
<div class="d d11">십일일</div>
<div class="d d12">십이일</div>
<div class="d d13">십삼일</div>
<div class="d d14">십사일</div>
<div class="d d15">십오일</div>
<div class="d d16">십육일</div>
<div class="d d17">십칠일</div>
<div class="d d18">십팔일</div>
<div class="d d19">십구일</div>
<div class="d d20">이십일</div>
<div class="d d21">이십일일</div>
<div class="d d22">이십이일</div>
<div class="d d23">이십삼일</div>
<div class="d d24">이십사일</div>
<div class="d d25">이십오일</div>
<div class="d d26">이십육일</div>
<div class="d d27">이십칠일</div>
<div class="d d28">이십팔일</div>
<div class="d d29">이십구일</div>
<div class="d d30">삼십일</div>
<div class="d d31">삼십일일</div>
</div>
<div class="container" id="week">
<div class="w week0">일요일</div>
<div class="w week1">월요일</div>
<div class="w week2">화요일</div>
<div class="w week3">수요일</div>
<div class="w week4">목요일</div>
<div class="w week5">금요일</div>
<div class="w week6">토요일</div>
</div>
<div class="container" id="hour">
<div class="h h0">영시</div>
<div class="h h1">한시</div>
<div class="h h2">두시</div>
<div class="h h3">세시</div>
<div class="h h4">네시</div>
<div class="h h5">다섯시</div>
<div class="h h6">여섯시</div>
<div class="h h7">일곱시</div>
<div class="h h8">여덟시</div>
<div class="h h9">아홉시</div>
<div class="h h10">열시</div>
<div class="h h11">열한시</div>
<div class="h h12">열두시</div>
<div class="h h13">열세시</div>
<div class="h h14">열네시</div>
<div class="h h15">열다섯시</div>
<div class="h h16">열여섯시</div>
<div class="h h17">열일곱시</div>
<div class="h h18">열여덟시</div>
<div class="h h19">열아홉시</div>
<div class="h h20">스물시</div>
<div class="h h21">스물한시</div>
<div class="h h22">스물두시</div>
<div class="h h23">스물세시</div>
</div>
<div class="container" id="min">
<div class="m m0">영분</div>
<div class="m m1">일분</div>
<div class="m m2">이분</div>
<div class="m m3">삼분</div>
<div class="m m4">사분</div>
<div class="m m5">오분</div>
<div class="m m6">육분</div>
<div class="m m7">칠분</div>
<div class="m m8">팔분</div>
<div class="m m9">구분</div>
<div class="m m10">십분</div>
<div class="m m11">십일분</div>
<div class="m m12">십이분</div>
<div class="m m13">십삼분</div>
<div class="m m14">십사분</div>
<div class="m m15">십오분</div>
<div class="m m16">십육분</div>
<div class="m m17">십칠분</div>
<div class="m m18">십팔분</div>
<div class="m m19">십구분</div>
<div class="m m20">이십분</div>
<div class="m m21">이십일분</div>
<div class="m m22">이십이분</div>
<div class="m m23">이십삼분</div>
<div class="m m24">이십사분</div>
<div class="m m25">이십오분</div>
<div class="m m26">이십육분</div>
<div class="m m27">이십칠분</div>
<div class="m m28">이십팔분</div>
<div class="m m29">이십구분</div>
<div class="m m30">삼십분</div>
<div class="m m31">삼십일분</div>
<div class="m m32">삼십이분</div>
<div class="m m33">삼십삼분</div>
<div class="m m34">삼십사분</div>
<div class="m m35">삼십오분</div>
<div class="m m36">삼십육분</div>
<div class="m m37">삽십칠분</div>
<div class="m m38">삽십팔분</div>
<div class="m m39">삽십구분</div>
<div class="m m40">사십분</div>
<div class="m m41">사십일분</div>
<div class="m m42">사십이분</div>
<div class="m m43">사십삼분</div>
<div class="m m44">사십사분</div>
<div class="m m45">사십오분</div>
<div class="m m46">사십육분</div>
<div class="m m47">사십칠분</div>
<div class="m m48">사십팔분</div>
<div class="m m49">사십구분</div>
<div class="m m50">오십분</div>
<div class="m m51">오십일분</div>
<div class="m m52">오십이분</div>
<div class="m m53">오십삼분</div>
<div class="m m54">오십사분</div>
<div class="m m55">오십오분</div>
<div class="m m56">오십육분</div>
<div class="m m57">오십칠분</div>
<div class="m m58">오십팔분</div>
<div class="m m59">오십구분</div>
</div>
<div class="container" id="sec">
<div class="s s0">영초</div>
<div class="s s1">일초</div>
<div class="s s2">이초</div>
<div class="s s3">삼초</div>
<div class="s s4">사초</div>
<div class="s s5">오초</div>
<div class="s s6">육초</div>
<div class="s s7">칠초</div>
<div class="s s8">팔초</div>
<div class="s s9">구초</div>
<div class="s s10">십초</div>
<div class="s s11">십일초</div>
<div class="s s12">십이초</div>
<div class="s s13">십삼초</div>
<div class="s s14">십사초</div>
<div class="s s15">십오초</div>
<div class="s s16">십육초</div>
<div class="s s17">십칠초</div>
<div class="s s18">십팔초</div>
<div class="s s19">십구초</div>
<div class="s s20">이십초</div>
<div class="s s21">이십일초</div>
<div class="s s22">이십이초</div>
<div class="s s23">이십삼초</div>
<div class="s s24">이십사초</div>
<div class="s s25">이십오초</div>
<div class="s s26">이십육초</div>
<div class="s s27">이십칠초</div>
<div class="s s28">이십팔초</div>
<div class="s s29">이십구초</div>
<div class="s s30">삼십초</div>
<div class="s s31">삼십일초</div>
<div class="s s32">삼십이초</div>
<div class="s s33">삼십삼초</div>
<div class="s s34">삼십사초</div>
<div class="s s35">삼십오초</div>
<div class="s s36">삼십육초</div>
<div class="s s37">삼십칠초</div>
<div class="s s38">삼십팔초</div>
<div class="s s39">삼십구초</div>
<div class="s s40">사십초</div>
<div class="s s41">사십일초</div>
<div class="s s42">사십이초</div>
<div class="s s43">사십삼초</div>
<div class="s s44">사십사초</div>
<div class="s s45">사십오초</div>
<div class="s s46">사십육초</div>
<div class="s s47">사십칠초</div>
<div class="s s48">사십팔초</div>
<div class="s s49">사십구초</div>
<div class="s s50">오십초</div>
<div class="s s51">오십일초</div>
<div class="s s52">오십이초</div>
<div class="s s53">오십삼초</div>
<div class="s s54">오십사초</div>
<div class="s s55">오십오초</div>
<div class="s s56">오십육초</div>
<div class="s s57">오십칠초</div>
<div class="s s58">오십팔초</div>
<div class="s s59">오십구초</div>
</div>


`,
  `<div class="container language">
<button type="button" class="btn btn-language">EN</button>
</div>
<div class="container" id="month">
<div class="month month0">Jan</div>
<div class="month month1">Feb</div>
<div class="month month2">Mar</div>
<div class="month month3">Apr</div>
<div class="month month4">May</div>
<div class="month month5">Jun</div>
<div class="month month6">Jul</div>
<div class="month month7">Aug</div>
<div class="month month8">Sep</div>
<div class="month month9">Oct</div>
<div class="month month10">Nov</div>
<div class="month month11">Dec</div>
</div>
<div class="container" id="date">
<div class="d d1">1st</div>
<div class="d d2">2nd</div>
<div class="d d3">3rd</div>
<div class="d d4">4th</div>
<div class="d d5">5th</div>
<div class="d d6">6th</div>
<div class="d d7">7th</div>
<div class="d d8">8th</div>
<div class="d d9">9th</div>
<div class="d d10">10th</div>
<div class="d d11">11th</div>
<div class="d d12">12th</div>
<div class="d d13">13th</div>
<div class="d d14">14th</div>
<div class="d d15">15th</div>
<div class="d d16">16th</div>
<div class="d d17">17th</div>
<div class="d d18">18th</div>
<div class="d d19">19th</div>
<div class="d d20">20th</div>
<div class="d d21">21th</div>
<div class="d d22">22th</div>
<div class="d d23">23th</div>
<div class="d d24">24th</div>
<div class="d d25">25th</div>
<div class="d d26">26th</div>
<div class="d d27">27th</div>
<div class="d d28">28th</div>
<div class="d d29">29th</div>
<div class="d d30">30th</div>
<div class="d d31">31th</div>
</div>
<div class="container" id="week">
<div class="w week0">Sun</div>
<div class="w week1">Mon</div>
<div class="w week2">Tue</div>
<div class="w week3">Wed</div>
<div class="w week4">Thu</div>
<div class="w week5">Fri</div>
<div class="w week6">Sat</div>
</div>
<div class="container" id="hour">
<div class="h h0">0 O'CL</div>
<div class="h h1">1 O'CL</div>
<div class="h h2">2 O'CL</div>
<div class="h h3">3 O'CL</div>
<div class="h h4">4 O'CL</div>
<div class="h h5">5 O'CL</div>
<div class="h h6">6 O'CL</div>
<div class="h h7">7 O'CL</div>
<div class="h h8">8 O'CL</div>
<div class="h h9">9 O'CL</div>
<div class="h h10">10 O'CL</div>
<div class="h h11">11 O'CL</div>
<div class="h h12">12 O'CL</div>
<div class="h h13">13 O'CL</div>
<div class="h h14">14 O'CL</div>
<div class="h h15">15 O'CL</div>
<div class="h h16">16 O'CL</div>
<div class="h h17">17 O'CL</div>
<div class="h h18">18 O'CL</div>
<div class="h h19">19 O'CL</div>
<div class="h h20">20 O'CL</div>
<div class="h h21">21 O'CL</div>
<div class="h h22">22 O'CL</div>
<div class="h h23">23 O'CL</div>
</div>
<div class="container" id="min">
<div class="m m0">0 MIN</div>
<div class="m m1">1 MIN</div>
<div class="m m2">2 MIN</div>
<div class="m m3">3 MIN</div>
<div class="m m4">4 MIN</div>
<div class="m m5">5 MIN</div>
<div class="m m6">6 MIN</div>
<div class="m m7">7 MIN</div>
<div class="m m8">8 MIN</div>
<div class="m m9">9 MIN</div>
<div class="m m10">10 MIN</div>
<div class="m m11">11 MIN</div>
<div class="m m12">12 MIN</div>
<div class="m m13">13 MIN</div>
<div class="m m14">14 MIN</div>
<div class="m m15">15 MIN</div>
<div class="m m16">16 MIN</div>
<div class="m m17">17 MIN</div>
<div class="m m18">18 MIN</div>
<div class="m m19">19 MIN</div>
<div class="m m20">20 MIN</div>
<div class="m m21">21 MIN</div>
<div class="m m22">22 MIN</div>
<div class="m m23">23 MIN</div>
<div class="m m24">24 MIN</div>
<div class="m m25">25 MIN</div>
<div class="m m26">26 MIN</div>
<div class="m m27">27 MIN</div>
<div class="m m28">28 MIN</div>
<div class="m m29">29 MIN</div>
<div class="m m30">30 MIN</div>
<div class="m m31">31 MIN</div>
<div class="m m32">32 MIN</div>
<div class="m m33">33 MIN</div>
<div class="m m34">34 MIN</div>
<div class="m m35">35 MIN</div>
<div class="m m36">36 MIN</div>
<div class="m m37">37 MIN</div>
<div class="m m38">38 MIN</div>
<div class="m m39">39 MIN</div>
<div class="m m40">40 MIN</div>
<div class="m m41">41 MIN</div>
<div class="m m42">42 MIN</div>
<div class="m m43">43 MIN</div>
<div class="m m44">44 MIN</div>
<div class="m m45">45 MIN</div>
<div class="m m46">46 MIN</div>
<div class="m m47">47 MIN</div>
<div class="m m48">48 MIN</div>
<div class="m m49">49 MIN</div>
<div class="m m50">50 MIN</div>
<div class="m m51">51 MIN</div>
<div class="m m52">52 MIN</div>
<div class="m m53">53 MIN</div>
<div class="m m54">54 MIN</div>
<div class="m m55">55 MIN</div>
<div class="m m56">56 MIN</div>
<div class="m m57">57 MIN</div>
<div class="m m58">58 MIN</div>
<div class="m m59">59 MIN</div>
</div>
<div class="container" id="sec">
<div class="s s0">0 SEC</div>
<div class="s s1">1 SEC</div>
<div class="s s2">2 SEC</div>
<div class="s s3">3 SEC</div>
<div class="s s4">4 SEC</div>
<div class="s s5">5 SEC</div>
<div class="s s6">6 SEC</div>
<div class="s s7">7 SEC</div>
<div class="s s8">8 SEC</div>
<div class="s s9">9 SEC</div>
<div class="s s10">10 SEC</div>
<div class="s s11">11 SEC</div>
<div class="s s12">12 SEC</div>
<div class="s s13">13 SEC</div>
<div class="s s14">14 SEC</div>
<div class="s s15">15 SEC</div>
<div class="s s16">16 SEC</div>
<div class="s s17">17 SEC</div>
<div class="s s18">18 SEC</div>
<div class="s s19">19 SEC</div>
<div class="s s20">20 SEC</div>
<div class="s s21">21 SEC</div>
<div class="s s22">22 SEC</div>
<div class="s s23">23 SEC</div>
<div class="s s24">24 SEC</div>
<div class="s s25">25 SEC</div>
<div class="s s26">26 SEC</div>
<div class="s s27">27 SEC</div>
<div class="s s28">28 SEC</div>
<div class="s s29">29 SEC</div>
<div class="s s30">30 SEC</div>
<div class="s s31">31 SEC</div>
<div class="s s32">32 SEC</div>
<div class="s s33">33 SEC</div>
<div class="s s34">34 SEC</div>
<div class="s s35">35 SEC</div>
<div class="s s36">36 SEC</div>
<div class="s s37">37 SEC</div>
<div class="s s38">38 SEC</div>
<div class="s s39">39 SEC</div>
<div class="s s40">40 SEC</div>
<div class="s s41">41 SEC</div>
<div class="s s42">42 SEC</div>
<div class="s s43">43 SEC</div>
<div class="s s44">44 SEC</div>
<div class="s s45">45 SEC</div>
<div class="s s46">46 SEC</div>
<div class="s s47">47 SEC</div>
<div class="s s48">48 SEC</div>
<div class="s s49">49 SEC</div>
<div class="s s50">50 SEC</div>
<div class="s s51">51 SEC</div>
<div class="s s52">52 SEC</div>
<div class="s s53">53 SEC</div>
<div class="s s54">54 SEC</div>
<div class="s s55">55 SEC</div>
<div class="s s56">56 SEC</div>
<div class="s s57">57 SEC</div>
<div class="s s58">58 SEC</div>
<div class="s s59">59 SEC</div>
</div>
`,
  `<div class="container language">
<button type="button" class="btn btn-language">CH</button>
</div>
<div class="container" id="month">
<div class="month month0">一月</div>
<div class="month month1">二月</div>
<div class="month month2">三月</div>
<div class="month month3">四月</div>
<div class="month month4">五月</div>
<div class="month month5">六月</div>
<div class="month month6">七月</div>
<div class="month month7">八月</div>
<div class="month month8">九月</div>
<div class="month month9">十月</div>
<div class="month month10">十一月</div>
<div class="month month11">十二月</div>
</div>
<div class="container" id="date">
<div class="d d1">一号</div>
<div class="d d2">二号</div>
<div class="d d3">三号</div>
<div class="d d4">四号</div>
<div class="d d5">五号</div>
<div class="d d6">六号</div>
<div class="d d7">七号</div>
<div class="d d8">八号</div>
<div class="d d9">九号</div>
<div class="d d10">十号</div>
<div class="d d11">十一号</div>
<div class="d d12">十二号</div>
<div class="d d13">十三号</div>
<div class="d d14">十四号</div>
<div class="d d15">十五号</div>
<div class="d d16">十六号</div>
<div class="d d17">十七号</div>
<div class="d d18">十八号</div>
<div class="d d19">十九号</div>
<div class="d d20">二十号</div>
<div class="d d21">二十一号</div>
<div class="d d22">二十二号</div>
<div class="d d23">二十三号</div>
<div class="d d24">二十四号</div>
<div class="d d25">二十五号</div>
<div class="d d26">二十六号</div>
<div class="d d27">二十七号</div>
<div class="d d28">二十八号</div>
<div class="d d29">二十九号</div>
<div class="d d30">三十号</div>
<div class="d d31">三十一号</div>
</div>
<div class="container" id="week">
<div class="w week0">周日</div>
<div class="w week1">周一</div>
<div class="w week2">周二</div>
<div class="w week3">周三</div>
<div class="w week4">周四</div>
<div class="w week5">周五</div>
<div class="w week6">周六</div>
</div>
<div class="container" id="hour">
<div class="h h0">零点</div>
<div class="h h1">一点</div>
<div class="h h2">二点</div>
<div class="h h3">三点</div>
<div class="h h4">四点</div>
<div class="h h5">五点</div>
<div class="h h6">六点</div>
<div class="h h7">七点</div>
<div class="h h8">八点</div>
<div class="h h9">九点</div>
<div class="h h10">十点</div>
<div class="h h11">十一点</div>
<div class="h h12">十二点</div>
<div class="h h13">十三点</div>
<div class="h h14">十四点</div>
<div class="h h15">十五点</div>
<div class="h h16">十六点</div>
<div class="h h17">十七点</div>
<div class="h h18">十八点</div>
<div class="h h19">十九点</div>
<div class="h h20">二十点</div>
<div class="h h21">二十一点</div>
<div class="h h22">二十二点</div>
<div class="h h23">二十三点</div>
</div>
<div class="container" id="min">
<div class="m m0">零分</div>
<div class="m m1">一分</div>
<div class="m m2">二分</div>
<div class="m m3">三分</div>
<div class="m m4">四分</div>
<div class="m m5">五分</div>
<div class="m m6">六分</div>
<div class="m m7">七分</div>
<div class="m m8">八分</div>
<div class="m m9">九分</div>
<div class="m m10">十分</div>
<div class="m m11">十一分</div>
<div class="m m12">十二分</div>
<div class="m m13">十三分</div>
<div class="m m14">十四分</div>
<div class="m m15">十五分</div>
<div class="m m16">十六分</div>
<div class="m m17">十七分</div>
<div class="m m18">十八分</div>
<div class="m m19">十九分</div>
<div class="m m20">二十分</div>
<div class="m m21">二十一分</div>
<div class="m m22">二十二分</div>
<div class="m m23">二十三分</div>
<div class="m m24">二十四分</div>
<div class="m m25">二十五分</div>
<div class="m m26">二十六分</div>
<div class="m m27">二十七分</div>
<div class="m m28">二十八分</div>
<div class="m m29">二十九分</div>
<div class="m m30">三十分</div>
<div class="m m31">三十一分</div>
<div class="m m32">三十二分</div>
<div class="m m33">三十三分</div>
<div class="m m34">三十四分</div>
<div class="m m35">三十五分</div>
<div class="m m36">三十六分</div>
<div class="m m37">三十七分</div>
<div class="m m38">三十八分</div>
<div class="m m39">三十九分</div>
<div class="m m40">四十分</div>
<div class="m m41">四十一分</div>
<div class="m m42">四十二分</div>
<div class="m m43">四十三分</div>
<div class="m m44">四十四分</div>
<div class="m m45">四十五分</div>
<div class="m m46">四十六分</div>
<div class="m m47">四十七分</div>
<div class="m m48">四十八分</div>
<div class="m m49">四十九分</div>
<div class="m m50">五十分</div>
<div class="m m51">五十一分</div>
<div class="m m52">五十二分</div>
<div class="m m53">五十三分</div>
<div class="m m54">五十四分</div>
<div class="m m55">五十五分</div>
<div class="m m56">五十六分</div>
<div class="m m57">五十七分</div>
<div class="m m58">五十八分</div>
<div class="m m59">五十九分</div>
</div>
<div class="container" id="sec">
<div class="s s0">零秒</div>
<div class="s s1">一秒</div>
<div class="s s2">二秒</div>
<div class="s s3">三秒</div>
<div class="s s4">四秒</div>
<div class="s s5">五秒</div>
<div class="s s6">六秒</div>
<div class="s s7">七秒</div>
<div class="s s8">八秒</div>
<div class="s s9">九秒</div>
<div class="s s10">十秒</div>
<div class="s s11">十一秒</div>
<div class="s s12">十二秒</div>
<div class="s s13">十三秒</div>
<div class="s s14">十四秒</div>
<div class="s s15">十五秒</div>
<div class="s s16">十六秒</div>
<div class="s s17">十七秒</div>
<div class="s s18">十八秒</div>
<div class="s s19">十九秒</div>
<div class="s s20">二十秒</div>
<div class="s s21">二十一秒</div>
<div class="s s22">二十二秒</div>
<div class="s s23">二十三秒</div>
<div class="s s24">二十四秒</div>
<div class="s s25">二十五秒</div>
<div class="s s26">二十六秒</div>
<div class="s s27">二十七秒</div>
<div class="s s28">二十八秒</div>
<div class="s s29">二十九秒</div>
<div class="s s30">三十秒</div>
<div class="s s31">三十一秒</div>
<div class="s s32">三十二秒</div>
<div class="s s33">三十三秒</div>
<div class="s s34">三十四秒</div>
<div class="s s35">三十五秒</div>
<div class="s s36">三十六秒</div>
<div class="s s37">三十七秒</div>
<div class="s s38">三十八秒</div>
<div class="s s39">三十九秒</div>
<div class="s s40">四十秒</div>
<div class="s s41">四十一秒</div>
<div class="s s42">四十二秒</div>
<div class="s s43">四十三秒</div>
<div class="s s44">四十四秒</div>
<div class="s s45">四十五秒</div>
<div class="s s46">四十六秒</div>
<div class="s s47">四十七秒</div>
<div class="s s48">四十八秒</div>
<div class="s s49">四十九秒</div>
<div class="s s50">五十秒</div>
<div class="s s51">五十一秒</div>
<div class="s s52">五十二秒</div>
<div class="s s53">五十三秒</div>
<div class="s s54">五十四秒</div>
<div class="s s55">五十五秒</div>
<div class="s s56">五十六秒</div>
<div class="s s57">五十七秒</div>
<div class="s s58">五十八秒</div>
<div class="s s59">五十九秒</div>
</div>`
];
let clock = new Clock(language);
function changeLanguage() {
  var i = 0;
  document.querySelector(".canvas-3d").addEventListener("click", () => {
    document.querySelector(".contact-right").innerHTML = language[i];
    i++;
    if (i === 3) {
      i = 0;
    }
    clock = new Clock(language);
  });
}
function ani() {
  clock.draw();
  clock.update();
  setTimeout(ani, 1000);
}

changeLanguage();
ani();
