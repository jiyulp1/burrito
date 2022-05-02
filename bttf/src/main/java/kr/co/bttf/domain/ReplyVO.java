package kr.co.bttf.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ReplyVO {
	private int reply_id;
	private int post_id;
	private String reply_contents;
	private String user_nickname;
	private Date reply_regdate;
	private Date reply_regdate_modified;
	private int avaliability_category_id;
	private int board_category_id;
}
