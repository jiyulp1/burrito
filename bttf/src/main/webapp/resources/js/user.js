   const sendit = function() {
   const joinForm = document.getElementById('joinForm');
   const user_email = document.joinForm.user_email;
   const user_pw = document.joinForm.user_pw;
   const user_pw_re = document.joinForm.user_pw_re;
   const user_name = document.joinForm.user_name;
   const user_nickname = document.joinForm.user_nickname;
   const user_phone = document.joinForm.user_phone;
   const emailcheck = document.getElementById('emailcheck');
   
   // 이메일 공백 체크
   if (user_email.value == '') {
      alert("이메일을 입력해주세요.");
      user_email.focus();
      event.preventDefault();
      return false;
   }
   
   // 이메일 정규식
   const ck_user_email = document.getElementById("user_email");
   const expuser_emailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/;
   if (!expuser_emailText.test(ck_user_email.value)) {
      alert("이메일을 형식에 맞게 입력하세요.");      
      ck_user_email.focus();
      event.preventDefault();
      return false;
   }
   
   if(user_email.value != '' && emailcheck.value == "N"){
      alert("이메일 중복확인 버튼을 눌러주세요.");
      user_email.focus();
      event.preventDefault();
      return false;
	}

 	
   // 비밀번호 공백 체크
   if (user_pw.value == '') {
      alert("비밀번호를 입력해주세요");
      user_pw.focus();
      event.preventDefault();
      return false;
   }
      
   // 비밀번호 정규식
   const ck_user_pw = document.getElementById('user_pw');
   const expuser_pwText = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
   if (!expuser_pwText.test(ck_user_pw.value)) {
      alert("비밀번호는 8자이상 15자이하 숫자+영문+특수문자 조합으로 생성가능합니다.");
      ck_user_pw.focus();
      event.preventDefault();
      return false;
   }

   
   // 비밀번호재확인 공백 체크
   if (user_pw_re.value == '') {
      alert("비밀번호 재확인을 입력해주세요.");
      user_pw_re.focus();
      event.preventDefault();
      return false;
   }
   
   // 비밀번호 일치여부 확인
   if (user_pw.value != user_pw_re.value) {
      $('#user_pw_re').blur(function() {
         alert("비밀번호와 일치하게 입력해주세요.")
      });
      user_pw_re.focus();
      event.preventDefault();
      return false;
   }
   
   // 이름 공백 체크
   if (user_name.value == '') {
      alert("이름을 입력해주세요.");
      user_name.focus();
      event.preventDefault();
      return false;
   }
   
   // 한글(이름) 정규식
   const ck_user_name = document.getElementById('user_name');
   const expuser_nameText = /[가-힣]+$/;
   if (!expuser_nameText.test(ck_user_name.value)) {
      alert("이름은 한글만 입력가능 합니다.");
      ck_user_name.focus();
      event.preventDefault();
      return false;
   }
   
   // 닉네임 공백 체크
   if (user_nickname.value == '') {
      alert("닉네임을 입력해주세요.");
      user_nickname.focus();
      event.preventDefault();
      return false;
   }
   
   // 닉네임 정규식
   const ck_user_nickname = document.getElementById('user_nickname');
   const expuser_nicknameText = /^([0-9]|[a-z]|[A-Z]|[가-힣]){2,8}$/;
   if (!expuser_nicknameText.test(ck_user_nickname.value)) {
      alert("닉네임은 2자이상 8자이하 한글,영문,숫자로만 가능합니다.");
      ck_user_nickname.focus();
      event.preventDefault();
      return false;
   }
   
   if(user_nickname.value != '' && nickcheck.value == "N"){
      alert("닉네임 중복확인 버튼을 눌러주세요.");
      user_nickname.focus();
      event.preventDefault();
      return false;
	}
   

   // 전화번호 공백 체크
   if (user_phone.value == '') {
      alert("휴대폰번호를 입력해주세요.");
      user_phone.focus();
      event.preventDefault();
      return false;
   }
   
   //전화번호 정규식
   const ck_user_phone = document.getElementById("user_phone");
   const expuser_phoneText = /^\d{3}-\d{3,4}-\d{4}$/;
   if (!expuser_phoneText.test(ck_user_phone.value)) {
      alert("전화번호를 형식에 맞게 입력하세요.");
      ck_user_phone.focus();
      event.preventDefault();
      return false;
   }
   
   
   document.joinForm.submit();
}	
