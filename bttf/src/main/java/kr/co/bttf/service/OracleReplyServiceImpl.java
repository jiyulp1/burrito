package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.bttf.dao.OracleReplyDAO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleReplyVO;

@Service
public class OracleReplyServiceImpl implements OracleReplyService {
	
	@Inject
	private OracleReplyDAO dao;

	// 댓글 목록
	@Override
	public List<OracleReplyVO> oracleReplyList(int post_id, int start, int end, HttpSession session) throws Exception {
		List<OracleReplyVO> oracleReplyList = dao.oracleReplyList(post_id, start, end, session);
		return oracleReplyList;
	}

	// 댓글 작성
	@Override
	public void oracleReplyWrite(OracleReplyVO vo) throws Exception {
		dao.oracleReplyWrite(vo);
	}

	// 댓글 수정
	@Override
	public void oracleReplyModify(OracleReplyVO vo) throws Exception {
		dao.oracleReplyModify(vo);
	}

	// 댓글 삭제
	@Override
	public void oracleReplyDelete(OracleReplyVO vo) throws Exception {
		dao.oracleReplyDelete(vo);
		
	}


	@Override
	public int oracleCount(int post_id) throws Exception {
		return dao.oracleCount(post_id);
	}

}
