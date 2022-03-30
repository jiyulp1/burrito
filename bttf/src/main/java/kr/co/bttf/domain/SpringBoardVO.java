package kr.co.bttf.domain;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SpringBoardVO {
		
		private int post_id;
		private String post_subject;
		private String post_contents;
		private int user_index;
		private String user_nickname;
		private int avaliability_category_id;
		private String post_rec;
		private int post_vcount;
		private String post_regdate;
		private int board_category_id;
		
}
