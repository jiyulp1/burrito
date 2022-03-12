package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.OracleBoardVO;

public interface OracleBoardDAO {
	
	public List<OracleBoardVO> oracleList() throws Exception;
	
	public void oracleWrite(OracleBoardVO vo) throws Exception;
	
	public OracleBoardVO oracleView(int post_id) throws Exception;
	
	public void oracleModify(OracleBoardVO vo) throws Exception;
	
	public void oracleDelete(int post_id) throws Exception;
}
