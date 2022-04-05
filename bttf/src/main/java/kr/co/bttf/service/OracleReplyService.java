package kr.co.bttf.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import kr.co.bttf.domain.OracleReplyVO;

public interface OracleReplyService {

	// 댓글 리스트
	public List<OracleReplyVO> oracleReplyList(Map<String, Object> map);

	// 댓글 작성
	public void oracleReplyWrite(OracleReplyVO vo) throws Exception;

	// 댓글 수정
	public void oracleReplyModify(OracleReplyVO vo) throws Exception;

	// 댓글 삭제
	public void oracleReplyDelete(OracleReplyVO vo) throws Exception;

	// 댓글 갯수
	public int oracleCount(int post_id) throws Exception;
	

}
