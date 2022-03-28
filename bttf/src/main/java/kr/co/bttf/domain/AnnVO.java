package kr.co.bttf.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AnnVO {
	
	private int post_id;
	private String post_subject;
	private String post_contents;
	private String user_nickname;
	private int post_vcount;
	private Date post_regdate;
	private String post_available;

}
