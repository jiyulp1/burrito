package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.bttf.dao.OracleReplyDAO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleReplyVO;

@Service
public class OracleReplyServiceImpl implements OracleReplyService {
	
	@Inject
	private OracleReplyDAO dao;

	// 댓글 조회
	@Override
	public List<OracleReplyVO> oracleReplyList(int post_id) throws Exception {
		return dao.oracleReplyList(post_id);
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
	
//	@Override
//	public void oracleReplyDelete(OracleReplyVO vo) throws Exception {
//		HashMap<String, String> map = new HashMap<String, String>();
//		int reply_id = vo.getReply_id();
//		int post_id = vo.getPost_id();
//		map.
//	}


}
