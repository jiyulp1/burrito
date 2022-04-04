package kr.co.bttf.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class OracleReplyVO {

	private int reply_id;
	private int reply_depth;
	private int bundle_id;
	private String reply_contents;
	private String user_nickname;
	private Date reply_regdate;
	private Date reply_regdate_modified;
	private int post_id;
	private int avaliability_category_id;
	
}
