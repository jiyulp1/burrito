package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.OracleBoardVO;

public interface OrBoardDAO {
	
	public List<OracleBoardVO> orList() throws Exception;
	
	public void orWrite(OracleBoardVO vo) throws Exception;
	
	public OracleBoardVO orView(int post_id) throws Exception;
	
	public void orModify(OracleBoardVO vo) throws Exception;
	
	public void orDelete(int post_id) throws Exception;
}
