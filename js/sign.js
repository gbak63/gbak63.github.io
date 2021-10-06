window.onload = function(){
document.memberFrm.onsubmit = function(){
    
    var userId = document.getElementById("id");
    var pwd = document.getElementById("pwd1");
    var pwdCheck = document.getElementById("pwd2");
    var userName = document.getElementById("userName");
    var tel1 = document.getElementById("phone");
 
    //1.아이디검사
    //첫글자는 반드시 영소문자로 이루어지고, 
    //숫자가 하나이상 포함되어야함.
    //아이디의 길이는 4~12글자사이
    if(userId.value == '' || userId.value == null){
        alert('아이디는 필수 항목입니다.');
        return false;
    }else if(!/^[a-z]/.test(userId.value)){
        alert('아이디의 첫 글자는 영소문자로 시작해야 합니다.');
        return false;
    }else if(!/\d/.test(userId.value)){
        alert('아이디는 숫자가 하나 이상 포함되어야 합니다.');
        return false;
    }else if(!/.{4,12}/.test(userId.value)){
        alert('아이디의 길이는 4~12글자 사이여야 합니다..');
        return false;
    }
    var regExp1 = /^[a-z][a-z\d]{3,11}$/;
    var regExp2 = /[0-9]/;
    
        
    var regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\*!&]/];
 
    for(let i = 0; i < regExpArr.length; i++){
        // console.log(pwdCheck);

        if(!regExpTest(regExpArr[i], pwd, "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.")){
            return false;
        }
    }
    
    //비밀번호일치여부
    if(!isEqualPwd()){
        return false;
    }
 
    //3.이름검사
    //한글2글자 이상만 허용. [가-힣] 으로 해도되긴 하지만 자음만(ㄱㄴㄷㄹ)있으면 필터링이 안됨
    var regExp3 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
    if(!regExpTest(regExp3,userName,"한글2글자이상 입력하세요."))
        return false;
    
    //6. 전화번호 검사
    // 전화번호 앞자리는 010, 두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
    if (!regExpTest(/^.{10,11}$/, tel1, "번호 10~11자리를 입력하세요"))
            return false;
                    
    // console.log($(bday).val());
    // console.log($('input:radio[name=gender]:checked').val());

    function User(id, pwd, name, tel, bday, gender){
        this.id = id;
        this.pwd = pwd;
        this.name = name;
        this.tel = tel;
        this.bday = bday;
        this.gender = gender;
    }
    // console.log(userId.value);
    let newUser = new User(userId.value, pwd.value, userName.value, tel1.value, $(bday).val(), $('input:radio[name=gender]:checked').val());
    // console.log(newUser);


    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    document.memberFrm.reset();
    newPage();

    return true;

    
    function regExpTest(regExp, el, msg){
       //  console.log('펑션`')
       if(regExp.test(el.value)){
           
           return true;
       }else{
           //적합한 문자열이 아닌 경우
           
           alert(msg);
           el.value="";
           el.focus();
           return false;
       }
       
    }
    function isEqualPwd(){
       if( pwd.value == pwdCheck.value){
           return true;
       }
       else{
           alert("비밀번호가 일치하지 않습니다.");
           pwd.select();
           return false;
       }
   }
   function newPage()  {
    window.location.href = 'signin.html'
  }
 }

};
