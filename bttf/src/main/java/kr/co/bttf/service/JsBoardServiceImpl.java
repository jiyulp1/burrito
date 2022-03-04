package kr.co.bttf.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.CssBoardDAO;
import kr.co.bttf.dao.HtmlBoardDAO;
import kr.co.bttf.dao.JsBoardDAO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;

@Service
public class JsBoardServiceImpl implements JsBoardService {

	@Inject
	private JsBoardDAO dao;

	@Override
	public List<JsBoardVO> jsList() throws Exception {
		return dao.jsList();
	}

	@Override
	public void jsWrite(JsBoardVO vo) throws Exception {
		dao.jsWrite(vo);
	}

	@Override
	public JsBoardVO jsView(int post_id) throws Exception {
		return dao.jsView(post_id);
	}

	@Override
	public void jsModify(JsBoardVO vo) throws Exception {
		dao.jsModify(vo);
	}

	@Override
	public void jsDelete(int post_id) throws Exception {
		dao.jsDelete(post_id);
	}

	

}