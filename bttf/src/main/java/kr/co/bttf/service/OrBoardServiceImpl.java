package kr.co.bttf.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.OrBoardDAO;
import kr.co.bttf.domain.OracleBoardVO;

@Service
public class OrBoardServiceImpl implements OrBoardService {

	@Inject
	private OrBoardDAO dao;

	@Override
	public List<OracleBoardVO> orList() throws Exception {
		return dao.orList();
	}

	@Override
	public void orWrite(OracleBoardVO vo) throws Exception {
		dao.orWrite(vo);
	}

	@Override
	public OracleBoardVO orView(int post_id) throws Exception {
		return dao.orView(post_id);
	}

	@Override
	public void orModify(OracleBoardVO vo) throws Exception {
		dao.orModify(vo);
	}

	@Override
	public void orDelete(int post_id) throws Exception {
		dao.orDelete(post_id);
	}

}