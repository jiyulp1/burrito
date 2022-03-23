package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.OracleReplyVO;

public interface OracleReplyDAO {
	
	public List<OracleReplyVO> oracleReplyList(int post_id) throws Exception;
	
	public void oracleReplyWrite(OracleReplyVO vo) throws Exception;
	
	public void oracleReplyModify(OracleReplyVO vo) throws Exception;
	
	public void oracleReplyDelete(OracleReplyVO vo) throws Exception;

}
