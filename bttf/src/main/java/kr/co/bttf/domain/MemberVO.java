package kr.co.bttf.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class MemberVO {
	
	private int user_index;
	private String user_email;
	private String user_pw;
	private String user_name;
	private String user_nickname;
	private String user_phone;
	private String main_language;
	private int avaliability_category_id;
	private Date user_regdate;
	private String authority_name;
	private int authority_code;
	
}
