package kr.co.bttf.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import kr.co.bttf.domain.OracleReplyVO;

public interface OracleReplyService {

	// 댓글 작성
	public void oracleReplyWrite(OracleReplyVO vo) throws Exception;

	// 댓글 수정
	public void oracleReplyModify(OracleReplyVO vo) throws Exception;

	// 댓글 삭제
	public void oracleReplyDelete(OracleReplyVO vo) throws Exception;

	// 댓글 목록
	public List<OracleReplyVO> oracleReplyList(int post_id, int start, int end, HttpSession session) throws Exception;

	// 댓글 갯수
	public int oracleCount(int post_id) throws Exception;

}
