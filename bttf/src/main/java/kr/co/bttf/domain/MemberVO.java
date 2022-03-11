package kr.co.bttf.domain;

public class MemberVO {
   private int user_index;
   private String user_email;
   private String user_pw;
   private String user_name;
   private String user_nickname;
   private String user_phone;
   private String main_language;
   private int user_avaliable;
   private int user_reported;
   private String user_regdate;
   private String authority_name;
   private int authority_code;

   public int getUser_index() {
      return user_index;
   }

   public void setUser_index(int user_index) {
      this.user_index = user_index;
   }

   public String getUser_pw() {
      return user_pw;
   }

   public void setUser_pw(String user_pw) {
      this.user_pw = user_pw;
   }

   public String getUser_name() {
      return user_name;
   }

   public void setUser_name(String user_name) {
      this.user_name = user_name;
   }

   public String getUser_nickname() {
		return user_nickname;
	}

	public void setUser_nickname(String user_nickname) {
		this.user_nickname = user_nickname;
	}
   
   public String getUser_phone() {
      return user_phone;
   }

   public void setUser_phone(String user_phone) {
      this.user_phone = user_phone;
   }

   public String getUser_email() {
      return user_email;
   }

   public void setUser_email(String user_email) {
      this.user_email = user_email;
   }

   public String getMain_language() {
      return main_language;
   }

   public void setMain_language(String main_language) {
      this.main_language = main_language;
   }

   public int getUser_avaliable() {
      return user_avaliable;
   }

   public void setUser_avaliable(int user_avaliable) {
      this.user_avaliable = user_avaliable;
   }

   public int getUser_reported() {
      return user_reported;
   }

   public void setUser_reported(int user_reported) {
      this.user_reported = user_reported;
   }

   public String getUser_regdate() {
      return user_regdate;
   }

   public void setUser_regdate(String user_regdate) {
      this.user_regdate = user_regdate;
   }

   public String getAuthority_name() {
      return authority_name;
   }

   public void setAuthority_name(String authority_name) {
      this.authority_name = authority_name;
   }

   public int getAuthority_code() {
      return authority_code;
   }

   public void setAuthority_code(int authority_code) {
      this.authority_code = authority_code;
   }

}
