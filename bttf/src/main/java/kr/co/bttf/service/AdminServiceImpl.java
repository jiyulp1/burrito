package kr.co.bttf.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.AdminDAO;
import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JavaBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.JspBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleBoardVO;
import kr.co.bttf.domain.SpringBoardVO;
@Service
public class AdminServiceImpl implements AdminService {

	@Inject
	private AdminDAO dao;
	
	@Override
	public List<MemberVO> memberall() throws Exception {
		return dao.memberall();
	}

	@Override
	public List<MemberVO> memberblock() throws Exception {
		return dao.memberblock();
	}

	@Override
	public List<AnnVO> announcements() throws Exception {
		return dao.announcements();
	}

	@Override
	public void annwrite(AnnVO vo) throws Exception {
		dao.annwrite(vo);
	}

	@Override
	public AnnVO annview(int post_id) throws Exception {
		return dao.annview(post_id);
	}
	

	@Override
	public int annvcnt(int post_id) throws Exception {
		return dao.annvcnt(post_id);
	}

	@Override
	public void annedit(AnnVO vo) throws Exception {
		dao.annedit(vo);
	}

	@Override
	public void anndelete(int post_id) throws Exception {
		dao.anndelete(post_id);

	}
	
	@Override
	public void cssundo(int post_id) throws Exception {
		dao.cssundo(post_id);
		
		
	}

	@Override
	public void memberundo(int user_index) throws Exception {
		dao.memberundo(user_index);
		
		
	}

	@Override
	public void cssexpell(int post_id) throws Exception {
		dao.cssexpell(post_id);
		
		
	}

	@Override
	public void memberexpell(int user_index) throws Exception {
		dao.memberexpell(user_index);
		
		
	}

	@Override
	public List<CssBoardVO> boardallcss() throws Exception {
		
		return dao.boardallcss();
	}

	@Override
	public List<HtmlBoardVO> boardallhtml() throws Exception {

		return dao.boardallhtml();
	}

	@Override
	public List<JsBoardVO> boardalljs() throws Exception {
		
		return dao.boardalljs();
	}

	@Override
	public List<JavaBoardVO> boardalljava() throws Exception {

		return dao.boardalljava();
	}

	@Override
	public List<JspBoardVO> boardalljsp() throws Exception {

		return dao.boardalljsp();
	}

	@Override
	public List<OracleBoardVO> boardalloracle() throws Exception {
		
		return dao.boardalloracle();
	}

	@Override
	public List<SpringBoardVO> boardallspring() throws Exception {
		
		return dao.boardallspring();
	}

	@Override
	public List<CssBoardVO> boardblockcss() throws Exception {

		return dao.boardblockcss();
	}

	@Override
	public List<HtmlBoardVO> boardblockhtml() throws Exception {

		return dao.boardblockhtml();
	}

	@Override
	public List<JsBoardVO> boardblockjs() throws Exception {
		
		return dao.boardblockjs();
	}

	@Override
	public List<JavaBoardVO> boardblockjava() throws Exception {

		return dao.boardblockjava();
	}

	@Override
	public List<JspBoardVO> boardblockjsp() throws Exception {
		
		return dao.boardblockjsp();
	}

	@Override
	public List<OracleBoardVO> boardblockoracle() throws Exception {

		return dao.boardblockoracle();
	}

	@Override
	public List<SpringBoardVO> boardblockspring() throws Exception {

		return dao.boardblockspring();
	}

}
