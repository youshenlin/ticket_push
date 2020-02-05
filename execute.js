const rotateEvent = () => {
    document.body.style.transform = 'rotate(180deg)';
  };
  const reset = () => {
    document.body.style.transform = '';
  }

var checkTag = (tagname,name) => {
    var s = document.getElementsByTagName(tagname);
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            return "check";
        }
    }
  }
  var clickbtn = (name,classname) => {
    var s = $(classname);
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            s[i].click();
        }
    }
  }
// 檢查是哪一個付款方式
var checkpayment_kktix = (name) => {
    var s = document.getElementsByClassName('radio ng-binding');
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            document.getElementsByClassName("ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required")[i].click();
        }
    }
  }
//radio ng-binding
//alert('location.host: '+location.host); 查domain
  var checkClass = (name,classname) => {
    var s = document.getElementsByClassName(classname);
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            return "check";
        }
    }
  }



  var clickForClass = (classname,index) => {
    if(a = document.getElementsByClassName(classname)[index]){
        a.click();
    }
  }
  var checkClassName  = (classname) => {
    if(document.getElementsByClassName(classname).length > 0){
        return 'check';
    }
  }
  var clickForChildClass = (classname,index,child) => {
    if(a = document.getElementsByClassName(classname)[(index-1)].childNodes[child]){
        a.click();
    }
  }

  function checkTime(timeA){
    　var NowDate=new Date();
    　var h=NowDate.getHours();
    　var m=NowDate.getMinutes();
    　var s=NowDate.getSeconds();　
    　var x = h+':'+m+':'+s;
    if( x === timeA){
        window.location.reload();
    }
        console.log(x);
    }
    function checkTimeFortoryun(timeA,choose){
        　var NowDate=new Date();
        　var h=NowDate.getHours();
        　var m=NowDate.getMinutes();
        　var s=NowDate.getSeconds();　
        　var x = h+':'+m+':'+s;
        if( x === timeA){
            clickForClass('btn btn-default btn-lg',0);
            setInterval(function(){ clickForClass('btn btn-next',choose); },500);
            //btn btn-next
        }
            console.log(x);
        }

//select option 改
    function jsSelectItemByValue(objSelect, objItemText) {                  
        for (var i = 0; i < objSelect.options.length; i++) {        
            if (objSelect.options[i].text == objItemText) {        
                objSelect.options[i].selected = true;   
                break;       
            }        
        } 
   } 

   var clickenter = () => {
        //按下enter 送出   
        setTimeout(function() { $('input[name="captcha_answer"]').focus() }, 300);
        $("*[name='captcha_answer']").keydown(function(event){
            if( event.which == 13 ) {
                clickForClass('btn btn-primary btn-lg ng-isolate-scope',0);
                setTimeout(function() { $('input[name="captcha_answer"]').focus() }, 300);
            }
        });
   }


//ibon 搶票
var ibonTicket = (inputData) => {
    var ticket = inputData.ticket;
        var ticketNumber = inputData.ticketNumber;
        var idNumber = inputData.idNumber;
        var creditNumber = inputData.creditNumber;
        var creditYear = inputData.creditYear;
        var creditMonth = inputData.creditMonth;
        var creditCheck = inputData.creditCheck;
        var ticketDate = inputData.ticketDate;
        var ticketPayment = inputData.ticketPayment;
        if(document.getElementsByClassName('btn b03').length > 0){
            clickForChildClass('btn b03',ticketDate,1);
        }
    
    if(checkSpan("電 腦 配 位") === "check"){
        for (i = (ticket-1);i < 20; i++) {
            clickForClass('main',i);
        }
    }
    if(checkSpan("請輸入購買張數") === "check"){
        var selectTicket =  document.getElementById("ctl00_ContentPlaceHolder1_DataGrid_ctl02_AMOUNT_DDL");
        jsSelectItemByValue(selectTicket,ticketNumber);
        $('#ctl00_ContentPlaceHolder1_CHK').focus();
        $("#ctl00_ContentPlaceHolder1_CHK").keydown(function(event){
            if( event.which == 13 ) {
                $("#ctl00_ContentPlaceHolder1_AddShopingCart").click();
            }
        });
    }
    if(checkSpan("我已詳細閱讀且同意") === "check"){
        $('#ctl00_ContentPlaceHolder1_INPUT_SHOPPER_PHONE_MOBILE').val(idNumber);
        $('#agreen').click();
        $('#ctl00_ContentPlaceHolder1_NEXT_BTN').click();

    }
    if(checkSpan("發票：") === "check"){
        $('#ctl00_ContentPlaceHolder1_NEXT_BTN').click();
    }
    if(location.host == 'sslpayment.uwccb.com.tw')
    {
        var month = document.getElementById("ctl00_ContentPlaceHolder1_strMM");
        var year = document.getElementById("ctl00_ContentPlaceHolder1_strYY");
        $('#ctl00_ContentPlaceHolder1_strCardNo').val(creditNumber);
        jsSelectItemByValue(month,creditMonth);
        jsSelectItemByValue(year,"20"+creditYear);
        $('#check_num').val(creditCheck);
        clickbtn("確定",".btn");
    }
}


var toryunTicket = (inputData) => {
    var ticket = inputData.ticket;
        var ticketNumber = inputData.ticketNumber;
        var idNumber = inputData.idNumber;
        var creditNumber = inputData.creditNumber;
        var creditYear = inputData.creditYear;
        var creditMonth = inputData.creditMonth;
        var creditCheck = inputData.creditCheck;
        var ticketDate = inputData.ticketDate;
        var ticketPayment = inputData.ticketPayment;

        if(checkHtwo("請選擇選位方式") === "check"){
            clickForChildClass('select_form_b',ticket,0);
        }

        if(checkTh("數量選擇") === "check"){
            var selectTicket =  document.getElementsByClassName("mobile-select")[0];
            jsSelectItemByValue(selectTicket,ticketNumber);
            $("label").click();
            $('#TicketForm_verifyCode').focus();
            $("#TicketForm_verifyCode").keydown(function(event){
            if( event.which == 13 ) {
                $("#ticketPriceSubmit").click();
            }
        });
        }
        if(checkTag('h4',"配送方式") === "check"){
            //目前都選擇atm轉帳
            $('#PaymentForm_payment_id_54').parent('label').click();
            
            setTimeout(function(){$("#submitButton").click();}, 500);
        }
        

        
    }


var kktixPush = () => {
    if(document.getElementsByClassName("btn-default plus").length > 0){
        alert(123);
    }
}

var ibonPush = () => {
    var s = document.getElementsByClassName("deadline");
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText != '已售完') {
            alert(i);
            //0就是第一個
        }
    }
}

var toryunPush = () => {
    //tr gridc fcTxt
//document.getElementsByClassName('gridc fcTxt')[0].childNodes[1].innerText //2020/02/22 (六) 19:30
//document.getElementsByClassName('gridc fcTxt')[0].childNodes[2].innerText  //吳青峰《太空備忘記2020》巡迴演唱會"
//document.getElementsByClassName('gridc fcTxt')[0].childNodes[4].innerText != 已售完


    clickForClass('btn btn-default btn-lg',0);
    setTimeout(function(){
        var s = document.getElementsByClassName("gridc fcTxt");
        for (i = 0;i < s.length; i++) {
            if ((s[i].childNodes[4].innerText != '已售完') && (s[i].childNodes[4].innerText != '選購一空')) {
                alert(s[i].childNodes[1].innerText);
                //0就是第一個
            }
        }
    }, 1500);
}

var getChrome = (checkFun) => {
    chrome.storage.local.get("checktest", items=>{
        if(items.checktest){
        var startCheck = items.checktest.startCheck;
        console.log(startCheck);
            if(startCheck == '0' && checkFun == 'start' && domainName == 'kktix.com'){
                setTimeout(function(){kktixPush();}, 1000);
                setTimeout(function(){window.location.reload();}, 30000);
            }else if(startCheck == '0' && checkFun == 'start' && domainName == 'ticket.ibon.com.tw'){
                setTimeout(function(){ibonPush();}, 1000);
                setTimeout(function(){window.location.reload();}, 30000);
            }else if(startCheck == '0' && checkFun == 'start' && domainName == 'tixcraft.com'){
                setTimeout(function(){toryunPush();}, 1000);
                setTimeout(function(){window.location.reload();}, 30000);
            }
        }
    });
}
var domainName = location.host;
  getChrome('start');


  const onMessage = async (message) => {
    switch (message.action) {
      case 'ROTATE':
        getChrome('time');
            break;
    
    case 'test':
        var openUrl= "http://localhost/line_notify/index2.php?mg="+"測試看看";
        var xhr = new XMLHttpRequest();
        xhr.open('GET',openUrl,true);
        xhr.send();
        break;

      case 'Save':
            window.location.reload();
        break;
      default:
        break;
    }
  }
  
  chrome.runtime.onMessage.addListener(onMessage);