package kr.co.bttf.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.OracleReplyDAO;
import kr.co.bttf.domain.OracleReplyVO;

@Service
public class OracleReplyServiceImpl implements OracleReplyService {
	
	@Inject
	private OracleReplyDAO dao;

	@Override
	public List<OracleReplyVO> oracleReplyList(int post_id) throws Exception {
		return dao.oracleReplyList(post_id);
	}

	@Override
	public void oracleReplyWrite(OracleReplyVO vo) throws Exception {
		dao.oracleReplyWrite(vo);
	}

	@Override
	public void oracleReplyModify(OracleReplyVO vo) throws Exception {
		dao.oracleReplyModify(vo);
	}

	@Override
	public void oracleReplyDelete(OracleReplyVO vo) throws Exception {
		dao.oracleReplyDelete(vo);
	}

}
