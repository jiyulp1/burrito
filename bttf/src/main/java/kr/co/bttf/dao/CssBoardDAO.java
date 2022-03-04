package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.CssBoardVO;

public interface CssBoardDAO {
	
	public List<CssBoardVO> cssList() throws Exception;
	
	public void cssWrite(CssBoardVO vo) throws Exception;
	
	public CssBoardVO cssView(int post_id) throws Exception;
	
	public void cssModify(CssBoardVO vo) throws Exception;
	
	public void cssDelete(int post_id) throws Exception;
}
