package kr.co.bttf.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.bttf.controller.Criteria;
import kr.co.bttf.domain.ReplyVO;
import kr.co.bttf.mapper.ReplyMapper;
import lombok.Setter;

@Service
public class ReplyServiceImpl implements ReplyService {
	
	
	@Inject
	private ReplyMapper mapper;

	
	
	@Override
	public int register(ReplyVO vo) {
		System.out.println("service 들어옴");
		
		
		int board_category_id = vo.getBoard_category_id();
		int result = 0;
		
		
		switch (board_category_id) {
			case 1:
				result = mapper.insert_html(vo);
				break;
			case 2:
				result = mapper.insert_css(vo);
				break;
			case 3:
				result = mapper.insert_javascript(vo);
				break;
			case 4:
				result = mapper.insert_jsp(vo);
				break;
			case 5:
				result = mapper.insert_java(vo);
				break;
			case 6:
				result = mapper.insert_oracle(vo);
				break;
			case 7:
				result = mapper.insert_spring(vo);
				break;
		}
		
		
		return result;
	}

	@Override
	public ReplyVO get(Map <String, Object> reply_id_category) {
		
		ReplyVO vo = new ReplyVO();
		
		int board_category_id = (int) reply_id_category.get("reply_id_category");
		Long reply_id = (Long) reply_id_category.get("reply_id");
		
		switch (board_category_id) {
			case 1:
				vo = mapper.get_html(reply_id);
				break;
			case 2:
				vo = mapper.get_css(reply_id);
				break;
			case 3:
				vo = mapper.get_javascript(reply_id);
				break;
			case 4:
				vo = mapper.get_jsp(reply_id);
				break;
			case 5:
				vo = mapper.get_java(reply_id);
				break;
			case 6:
				vo = mapper.get_oracle(reply_id);
				break;
			case 7:
				vo = mapper.get_spring(reply_id);
				break;
		}
		
		
		return vo;
		
	}

	@Override
	public void replyupdate(ReplyVO replybean){
		
		int board_category_id = replybean.getBoard_category_id();
		
		switch (board_category_id) {
			case 1:
				mapper.replyupdate_html(replybean);
				break;
			case 2:
				mapper.replyupdate_css(replybean);
				break;
			case 3:
				mapper.replyupdate_javascript(replybean);
				break;
			case 4:
				mapper.replyupdate_jsp(replybean);
				break;
			case 5:
				mapper.replyupdate_java(replybean);
				break;
			case 6:
				mapper.replyupdate_oracle(replybean);
				break;
			case 7:
				mapper.replyupdate_spring(replybean);
				break;
		}
		
		
		
		
		
	}

	@Override
	public List<ReplyVO> getList(Criteria cri, Map <String, Object> reply_id_category) {
		
		List<ReplyVO> result = new ArrayList<ReplyVO>();
		
		int board_category_id = (int )reply_id_category.get("board_category_id");
		
		Long post_id = (Long) reply_id_category.get("post_id");
		
		switch (board_category_id) {
		case 1:
			result = mapper.getListWithPaging_html(cri, post_id);
			break;
		case 2:
			result = mapper.getListWithPaging_css(cri, post_id);
			break;
		case 3:
			result = mapper.getListWithPaging_javascript(cri, post_id);
			break;
		case 4:
			result = mapper.getListWithPaging_jsp(cri, post_id);
			break;
		case 5:
			result = mapper.getListWithPaging_java(cri, post_id);
			break;
		case 6:
			result = mapper.getListWithPaging_oracle(cri, post_id);
			break;
		case 7:
			result = mapper.getListWithPaging_spring(cri, post_id);
			break;
		}
		
		return result;
	}
	
	@Override
	public int remove(Map <String, Object> reply_id_category2) {
		
		
		int result = 0;
		
		int board_category_id = (int )reply_id_category2.get("board_category_id");
		Long reply_id = (Long) reply_id_category2.get("reply_id");
		
		switch (board_category_id) {
		case 1:
			result = mapper.delete_html(reply_id);
			break;
		case 2:
			result = mapper.delete_css(reply_id);
			break;
		case 3:
			result = mapper.delete_javascript(reply_id);
			break;
		case 4:
			result = mapper.delete_jsp(reply_id);
			break;
		case 5:
			result = mapper.delete_java(reply_id);
			break;
		case 6:
			result = mapper.delete_oracle(reply_id);
			break;
		case 7:
			result = mapper.delete_spring(reply_id);
			break;
		
		}

		return result;
	}
	
	
	
}
