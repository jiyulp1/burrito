package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JavaBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.JspBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleBoardVO;
import kr.co.bttf.domain.SpringBoardVO;

public interface AdminService {

	// 전체 회원 목록
	public List<MemberVO> memberall() throws Exception;

	// 신고된 회원 목록
	public List<MemberVO> memberblock() throws Exception;

	// 공지사항 목록
	public List<AnnVO> announcements() throws Exception;

	// 공지사항 작성
	public void annwrite(AnnVO vo) throws Exception;

	// 공지사항 상세보기
	public AnnVO annview(int post_id) throws Exception;
	
	// 공지사항 조회수
	public int annvcnt(int post_id) throws Exception;
	
	// 공지사항 수정
	public void annedit(AnnVO vo) throws Exception;
	
	// 공지사항 삭제
	public void anndelete(int post_id) throws Exception;
	
	// CSS 신고 게시글 해제
	public void cssundo(int post_id) throws Exception;
	
	// 신고 회원 해제
	public void memberundo(int user_index) throws Exception;
	
	// CSS 신고 들어온 게시글 안보이게 퇴출
	public void cssexpell(int post_id) throws Exception;
	
	// 신고가 들어온 회원 퇴출
	public void memberexpell(int user_index) throws Exception;
	
	//CSS 전체 게시물
	public List<CssBoardVO> boardallcss() throws Exception;

	//html 전체 게시물
	public List<HtmlBoardVO> boardallhtml() throws Exception;

	//js 전체 게시물
	public List<JsBoardVO> boardalljs() throws Exception;

	//java 전체 게시물
	public List<JavaBoardVO> boardalljava() throws Exception;

	//jsp 전체 게시물
	public List<JspBoardVO> boardalljsp() throws Exception;

	//oracle 전체 게시물
	public List<OracleBoardVO> boardalloracle() throws Exception;

	//spring 전체 게시물
	public List<SpringBoardVO> boardallspring() throws Exception;
	
	//css 신고된 게시물
	public List<CssBoardVO> boardblockcss() throws Exception;

	//html 신고된 게시물
	public List<HtmlBoardVO> boardblockhtml() throws Exception;

	//js 신고된 게시물
	public List<JsBoardVO> boardblockjs() throws Exception;

	//java 신고된 게시물
	public List<JavaBoardVO> boardblockjava() throws Exception;

	//jsp 신고된 게시물
	public List<JspBoardVO> boardblockjsp() throws Exception;

	//oracle 신고된 게시물
	public List<OracleBoardVO> boardblockoracle() throws Exception;

	//spring 신고된 게시물
	public List<SpringBoardVO> boardblockspring() throws Exception;




}
