const sendit = function() {
   const joinForm = document.getElementById('joinForm');
   const user_id = document.joinForm.user_id;
   const user_pw = document.joinForm.user_pw;
   const user_pw_re = document.joinForm.user_pw_re;
   const user_name = document.joinForm.user_name;
   const user_phone = document.joinForm.user_phone;
   const user_email = document.joinForm.user_email;

   // 공백 조건 확인
   if (user_id.value == '') {
      alert("아이디를 입력해주세요");
      user_id.focus();
      return false;
   }

   if (user_pw.value == '') {
      alert("비밀번호를 입력해주세요");
      user_id.focus();
      return false;
   }
   
   if (user_pw_re.value == '') {
      alert("비밀번호 재확인을 입력해주세요.");
      user_id.focus();
      return false;
   }

   if (user_name.value == '') {
      alert("이름을 입력해주세요.");
      user_id.focus();
      return false;
   }
   
   if (user_phone.value == '') {
      alert("휴대폰번호를 입력해주세요.");
      user_id.focus();
      return false;
   }
   
   if (user_email.value == '') {
      alert("이메일을 입력해주세요.");
      user_id.focus();
      return false;
   }
   
   
   
    
    
   
   
   // 아이디 문자 길이 확인
   if (user_id.value.length < 5 || user_id.value.length > 12) {
      alert("아이디를 5글자이상 12글자 이하로 입력해주세요.");
      user_id.focus();
      return false;
   }

   // 아이디 정규식
   const ck_user_id = document.getElementById('user_id');
   const expuser_idText = /^(?=.*[a-zA-Z])(?=.*[0-9])$/;
   if (!expuser_idText.test(ck_user_id.value)) {
      alert("아이디형식에 맞게 입력해주세요.");
      ck_user_id.focus();
      return false;
   }
   
   
   // 비밀번호 문자 길이 확인
   if (user_pw.value.length < 7 || user_pw.value.length > 16) {
      alert("아이디를 7글자이상 16글자 이하로 입력해주세요.");
      user_pw.focus();
      return false;
   }

   // 비밀번호 일치여부 확인
   if (user_pw.value != user_pw_re.value) {
      $('#user_pw_re').blur(function() {
         alert("비밀번호와 일치하게 입력해주세요.")
      });
      user_pw_re.focus();
      return false;
   }

   //비밀번호 정규식
   const ck_user_pw = document.getElementById('user_pw');
   const expuser_pwText = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-])$/;
   if (!expuser_pwText.test(ck_user_pw.value)) {
      alert("비밀번호는 숫자+영문+특수문자 포함 16글자를 입력해주세요.")
      ck_user_pw.focus();
      return false;
   }

   //한글 정규식
   const ck_user_name = document.getElementById('user_name');
   const expuser_nameText = /[가-힣]+$/;
   if (!expuser_nameText.test(ck_user_name.value)) {
      alert("이름은 한글만 입력가능 합니다.");
      ck_user_name.focus();
      return false;
   }

   //전화번호 정규식
   const ck_user_phone = document.getElementById("user_phone");
   const expuser_phoneText = /^\d{3}-\d{3,4}-\d{4}$/;
   if (!expuser_phoneText.test(ck_user_phone.value)) {
      alert("전화번호를 형식에 맞게 입력하세요.");
      ck_user_phone.focus()
      return false;
   }

   //이메일 정규식
   const ck_user_email = document.getElementById("user_email");
   const expuser_emailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/
   if (!expuser_emailText.test(ck_user_email.value)) {
      alert("이메일을 형식에 맞게 입력하세요.");      
      ck_user_email.focus();
      return false;
   }

   return true;
}