package kr.co.bttf.domain;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

public class OracleReplyVO {

	/*
	 	reply_id					INT(10) AUTO_INCREMENT PRIMARY KEY,
		reply_contents				VARCHAR(1000) NOT NULL,
		user_nickname				VARCHAR(100),
		reply_regdate				DATETIME default current_timestamp,
		post_id						INT(10) NOT NULL,
						CONSTRAINT rep_oracle FOREIGN KEY(post_id) REFERENCES oracle(post_id) ON DELETE CASCADE
	 */

	@Getter @Setter
	private int reply_id;
	@Getter @Setter
	private String reply_contents;
	@Getter @Setter
	private String user_nickname;
	@Getter @Setter
	private Date reply_regdate;
	@Getter @Setter
	private int post_id;
	
}
