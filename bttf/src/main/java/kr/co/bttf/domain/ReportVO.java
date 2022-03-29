package kr.co.bttf.domain;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter @Setter
public class ReportVO {
	
//	create table report_user(
//			report_index				INT(10) AUTO_INCREMENT PRIMARY KEY,
//			user_index					INT(10) NOT NULL,
//									CONSTRAINT report_user_user_all FOREIGN KEY(user_index) REFERENCES user_all(user_index) , 
//			user_reportcnt				int(3),
//			report_category_id1			INT(2),
//			report_category_id2			INT(2),
//			report_category_id3				
//									CONSTRAINT report_user_report_category FOREIGN KEY(report_category_id) REFERENCES report_category(report_category_id) on update cascade
//			);
	
	
 	private int report_index;
	
 	private int user_index;
	
 	private int user_reportcnt;
	
 	private int report_category_id1;
 	
 	private int report_category_id2;

 	private int report_category_id3;
	
// 	private List<Integer> arrayParams;
}
