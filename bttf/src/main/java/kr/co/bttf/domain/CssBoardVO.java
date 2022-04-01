package kr.co.bttf.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CssBoardVO extends BoardVO {
	
	private int post_id;
	private String post_subject;
	private String post_contents;
	private int user_index;
	private String user_nickname;
	private int avaliability_category_id;
	private String post_rec;
	private int post_vcount;
	private Date post_regdate;
	private int board_category_id;
	
}
