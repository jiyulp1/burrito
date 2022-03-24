package kr.co.bttf.domain;

import lombok.Getter;
import lombok.Setter;

public class MemberVO {
	
	@Getter @Setter
	private int user_index;
	@Getter @Setter
	private String user_email;
	@Getter @Setter
	private String user_pw;
	@Getter @Setter
	private String user_name;
	@Getter @Setter
	private String user_nickname;
	@Getter @Setter
	private String user_phone;
	@Getter @Setter
	private String main_language;
	@Getter @Setter
	private int avaliability_category_id;
	@Getter @Setter
	private String user_regdate;
	@Getter @Setter
	private String authority_name;
	@Getter @Setter
	private int authority_code;
	
}
