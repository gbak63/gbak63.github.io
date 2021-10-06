window.onload = function(){

    //sign-in js
    
    
    $(loginBtn).click(e => {
        const $id = $("#in-id");
        const $pwd = $("#in-pwd");
        const userArr = JSON.parse(localStorage.getItem("users"));
        // console.log(userArr);

        let flag = false;

        for(let i = 0; i < userArr.length; i++) {
            if($id.val() == userArr[i]["id"]) {
                flag = true;
                if($pwd.val() == userArr[i]["pwd"]) {
                    alert("로그인 성공!");
                    $id.val("");
                    $pwd.val("");
                    break;
                } else {
                    alert("비밀번호가 일치하지 않습니다.");
                    $pwd.select();
                    break;
                }
            } else {
                // alert("미등록된 아이디입니다.");
                $id.select();
                // break;
            }
        }

        if(!flag) {
            alert("미등록 아이디입니다.");
        }
    });
};