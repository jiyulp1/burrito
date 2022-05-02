package kr.co.bttf.service;

import java.util.List;
import java.util.Map;

import kr.co.bttf.controller.Criteria;
import kr.co.bttf.domain.ReplyVO;

public interface ReplyService {
	
	public int register(ReplyVO vo);

	public ReplyVO get(Map <String, Object> reply_id_category);

	public int remove(Map <String, Object> reply_id_category2);

	public List<ReplyVO> getList(Criteria cri, Map <String, Object> reply_id_category);

	public void replyupdate(ReplyVO replybean);

}
