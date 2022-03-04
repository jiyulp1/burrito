package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;

public interface JsBoardDAO {
	
	public List<JsBoardVO> jsList() throws Exception;
	
	public void jsWrite(JsBoardVO vo) throws Exception;
	
	public JsBoardVO jsView(int post_id) throws Exception;
	
	public void jsModify(JsBoardVO vo) throws Exception;
	
	public void jsDelete(int post_id) throws Exception;
}
