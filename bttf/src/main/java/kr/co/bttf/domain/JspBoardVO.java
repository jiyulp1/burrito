package kr.co.bttf.domain;

import lombok.Getter;
import lombok.Setter;

public class JspBoardVO {
	@Getter @Setter
	private int post_id;
	@Getter @Setter
	private String post_subject;
	@Getter @Setter
	private String post_contents;
	@Getter @Setter
	private int user_index;
	@Getter @Setter
	private String user_nickname;
	@Getter @Setter
	private int avaliability_category_id;
	@Getter @Setter
	private String post_rec;
	@Getter @Setter
	private int post_vcount;
	@Getter @Setter
	private String post_regdate;
	@Getter @Setter
	private int category_id;
	
}
