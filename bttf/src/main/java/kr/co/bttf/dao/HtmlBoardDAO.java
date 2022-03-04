package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.HtmlBoardVO;

public interface HtmlBoardDAO {
	
	public List<HtmlBoardVO> htmlList() throws Exception;
	
	public void htmlWrite(HtmlBoardVO vo) throws Exception;
	
	public HtmlBoardVO htmlView(int post_id) throws Exception;
	
	public void htmlModify(HtmlBoardVO vo) throws Exception;
	
	public void htmlDelete(int post_id) throws Exception;
}
