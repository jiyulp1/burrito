package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.CssBoardVO;

public interface CssBoardDAO {
	
	public List<CssBoardVO> csslist() throws Exception;
	
	public void csswrite(CssBoardVO vo) throws Exception;
	
	public CssBoardVO cssview(int post_id) throws Exception;
	
	public void cssmodify(CssBoardVO vo) throws Exception;
	
	public void cssdelete(int post_id) throws Exception;
}
