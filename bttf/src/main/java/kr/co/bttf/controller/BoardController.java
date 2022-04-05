package kr.co.bttf.controller;

import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleBoardVO;
import kr.co.bttf.domain.OracleReplyVO;
import kr.co.bttf.service.CssBoardService;
import kr.co.bttf.service.HtmlBoardService;
import kr.co.bttf.service.JsBoardService;
import kr.co.bttf.service.MemberService;
import kr.co.bttf.service.OracleBoardService;
import kr.co.bttf.service.OracleReplyService;

@Controller
@RequestMapping("/board/*")
public class BoardController {

	@Inject
	MemberService memberService;
	
	@Inject
	private HtmlBoardService htmlService;
	
	@Inject
	private CssBoardService cssService;
	
	@Inject
	private JsBoardService jsService;
	
//	@Inject
//	private JspBoardService jspService;
	
//	@Inject
//	private JavaBoardService javaService;
	
	@Inject
	private OracleBoardService oracleService;
	
	@Inject
	private OracleReplyService oracleReplyService;
	
//	@Inject
//	private SpringBoardService springService;
	
	/* --------------------------------
				01. HTML
	-------------------------------- */
	// 1-1 [POST] 게시물 목록
	@RequestMapping(value = "/htmllist", method = RequestMethod.GET)
	public String htmlList() throws Exception {
		
		htmlService.htmlList();
		return "redirect:/board/htmllist";
	}
	
	// 1-2 [POST] insert 게시물 작성
	@RequestMapping(value = "/htmlwrite", method = RequestMethod.POST)
	public String htmlWrite(HtmlBoardVO vo) throws Exception {
		
	  htmlService.htmlWrite(vo);
	  return "redirect:/board/htmllist";
	}
	
	// 1-3 [POST] 게시물 상세보기
	@RequestMapping(value = "/htmlview", method = RequestMethod.POST)
	public String htmlView(@RequestParam("post_id") int post_id) throws Exception {
		
		htmlService.htmlView(post_id);
		return "redirect:/board/htmlview?post_id=" + post_id;
	}
	
	// 1-4 [POST] 게시물 수정
	@RequestMapping(value = "/htmlmodify", method = RequestMethod.POST)
	public String htmlModify(HtmlBoardVO vo) throws Exception {

		htmlService.htmlModify(vo);
		return "redirect:/board/htmlview?post_id=" + vo.getPost_id();
	}
	
	// 1-5 [POST] 게시물 삭제
	@RequestMapping(value = "/htmldelete", method = RequestMethod.POST)
	public String htmlDelete(@RequestParam("post_id") int post_id) throws Exception {

		htmlService.htmlDelete(post_id);
		return "redirect:/board/htmllist";
	}	
	
	
	/* --------------------------------
	 			02. CSS
	-------------------------------- */
	
	/* getList
	  게시물 목록 */
	
	// 2-1 [GET] 게시물 목록
	
	@RequestMapping(value = "/csslist", method = RequestMethod.GET)
	public void cssList(Model model) throws Exception {

		System.out.println("get - csslist");
		List<CssBoardVO> csslist = null;
		csslist = cssService.cssList();
		model.addAttribute("csslist", csslist);
	}
	
	/* postWrite
	  게시글 작성 */
	
	// 2-2. write페이지이동

	@RequestMapping(value = "/csswrite", method = RequestMethod.GET)
	public void cssWrite() throws Exception {

	}
	
	// 2-2-1. 게시물 작성
	@RequestMapping(value = "/csswrite", method = RequestMethod.POST)
	public String cssWrite(CssBoardVO vo, HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		vo.setUser_nickname(member.getUser_nickname());
		cssService.cssWrite(vo);
	  return "redirect:/board/csslist";
	}
	

	/* getView
	  게시글 상세보기 */
	
	// 2-3. 게시물 상세보기 페이지 이동
	
	@RequestMapping(value = "/cssview", method = RequestMethod.GET)
	public void cssView(@RequestParam("post_id") int post_id, Model model) throws Exception {
		
		// 상세보기 시 조회수 갱신
		int cssvcnt = 0;
		cssService.cssvcnt(post_id);
		model.addAttribute("cssvcnt", cssvcnt);
		
		CssBoardVO vo = cssService.cssView(post_id);
		model.addAttribute("cssview", vo);
	}
	
	
	
	/* getModify
	  게시글 수정 */
	
	// 2-4. 게시물 수정 페이지 이동
	
	@RequestMapping(value = "/cssedit", method = RequestMethod.GET)
	public void cssModify(@RequestParam("post_id") int post_id, Model model) throws Exception {

		CssBoardVO vo = cssService.cssView(post_id);
		model.addAttribute("cssview", vo);
	}
	

	@RequestMapping(value = "/cssedit", method = RequestMethod.POST)
	public String cssedit(CssBoardVO vo) throws Exception {

		cssService.cssEdit(vo);
		return "redirect:/board/cssview?post_id=" + vo.getPost_id();
	}

	
	/* getDelete
	  게시글 삭제 */
	
	// 2-5. vo가 없으니 get방식 삭제
	@RequestMapping(value = "/cssdelete", method = RequestMethod.GET)
	public String cssDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

		String result = "";
		
		cssService.cssDelete(post_id);
		
		HttpSession session = req.getSession();
		
		MemberVO member = (MemberVO) session.getAttribute("member");
		
		
		int user_index = member.getUser_index();
		String user_nickname = member.getUser_nickname();
		
		
		// mypage에서 글을 삭제하는 경우
		if( mypage.equals("right")) {
			
			result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
		
		// mypage에서 글을 삭제하는 경우
		} else {
			
			result = "redirect:/board/csslist";
			
		}
		
		return result;

	}
	
	@RequestMapping(value = "/cssreport", method = RequestMethod.GET)
	public void memberreport(@RequestParam List<Integer> checkbox, 
			
			@RequestParam("reportee_index") int reportee_index, 
			@RequestParam("reportee_index") int user_index, 
			@RequestParam("reporter_index") int reporter_index,
			@RequestParam("board_category_id") int board_category_id,
			@RequestParam("post_id") int post_id,
			
			HttpServletResponse response) throws Exception{
				for (Integer c : checkbox) {
					HashMap<String, Integer> map = new HashMap<String, Integer>();
					map.put("report_category_id", c);
					map.put("reportee_index", reportee_index);
					map.put("reporter_index", reporter_index);
					map.put("board_category_id", board_category_id);
					map.put("post_id", post_id);
					
					boolean reportSuccess = memberService.reportSuccess(map);	
					
					if(reportSuccess ) {
						memberService.memberreport(map);						
						cssService.csscategory2(post_id);
						memberService.memcategory2(user_index);
						ScriptUtils.alertAndMovePage(response, "신고가 접수되었습니다. 메인화면으로 이동합니다.","http://localhost:9090/");
					}else {
						ScriptUtils.alertAndMovePage(response, "이미 신고된 회원입니다.","http://localhost:9090/");
						
					}
				}
		
			}
	
	
	/* --------------------------------
			03. JAVASCRIPT
	-------------------------------- */
	// 3-1 [GET] 게시물 목록
	@RequestMapping(value = "/jslist", method = RequestMethod.GET)
	public void jsList(Model model) throws Exception{
		List<JsBoardVO> jslist = null;
		jslist = jsService.jsList();
		model.addAttribute("jslist", jslist);
	}
	
	// 3-2. write페이지이동
	@RequestMapping(value = "/jswrite", method = RequestMethod.GET)
	public void jsWrite() throws Exception {

	}
	
	// 3-2-1. 게시물 작성
	@RequestMapping(value = "/jswrite", method = RequestMethod.POST)
	public String jsWrite(JsBoardVO vo, HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		vo.setUser_nickname(member.getUser_nickname());
		jsService.jsWrite(vo);
	  return "redirect:/board/jslist";
	}
	
	// 3-3. 게시물 상세보기 페이지 이동
	
	@RequestMapping(value = "/jsview", method = RequestMethod.GET)
	public void jsView(@RequestParam("post_id") int post_id, Model model) throws Exception {
		
		JsBoardVO vo = jsService.jsView(post_id);
		model.addAttribute("jsview", vo);
	}
	
	// 4. 게시물 수정 페이지 이동
	
	@RequestMapping(value = "/jsmodify", method = RequestMethod.GET)
	public void jsModify(@RequestParam("post_id") int post_id, Model model) throws Exception {

		JsBoardVO vo = jsService.jsView(post_id);
		model.addAttribute("jsview", vo);
	}
	

	@RequestMapping(value = "/jsmodify", method = RequestMethod.POST)
	public String jsModify(JsBoardVO vo) throws Exception {

		jsService.jsModify(vo);
		return "redirect:/board/jsview?post_id=" + vo.getPost_id();
	}

	
	// 5. vo가 없으니 get방식으로 삭제
	@RequestMapping(value = "/jsdelete", method = RequestMethod.GET)
	public String jsDelete(@RequestParam("post_id") int post_id, Model model) throws Exception {

		jsService.jsDelete(post_id);
		return "redirect:/board/jslist";

	}
	
	
	
	/* --------------------------------
				04. JSP
	-------------------------------- */
	
	/* --------------------------------
				05. JAVA
	-------------------------------- */
	
	/* --------------------------------
				06. ORACLE
	-------------------------------- */
	// 6-1 [GET] 게시물 목록
		@RequestMapping(value = "/oraclelist", method = RequestMethod.GET)
		public void oracleList(Model model) throws Exception{
			List<OracleBoardVO> oraclelist = null;
			oraclelist = oracleService.oracleList();
			model.addAttribute("oraclelist", oraclelist);
		}
		
		// 6-2. write페이지이동
		@RequestMapping(value = "/oraclewrite", method = RequestMethod.GET)
		public void oracleWrite() throws Exception {

		}
		
		// 6-2-1. 게시물 작성
		@RequestMapping(value = "/oraclewrite", method = RequestMethod.POST)
		public String oracleWrite(OracleBoardVO vo, HttpServletRequest request) throws Exception {
			HttpSession session = request.getSession();
			MemberVO member = (MemberVO) session.getAttribute("member");
			vo.setUser_nickname(member.getUser_nickname());
			oracleService.oracleWrite(vo);
		  return "redirect:/board/oraclelist";
		}
		
		// 6-3. 게시물 상세보기 페이지 이동
		
		@RequestMapping(value = "/oracleview", method = RequestMethod.GET)
		public void oracleView(@RequestParam("post_id") int post_id, Model model, @RequestParam(defaultValue="1") int curPage, ModelAndView mav, HttpSession session) throws Exception {
			
			// 상세보기 시 조회수 갱신
			int oraclevcnt = 0;
			oracleService.oraclevcnt(post_id);
			model.addAttribute("oraclevcnt", oraclevcnt);
			
			// 상세보기 시 댓글 조회 및 댓글페이징
			int count = oracleReplyService.oracleCount(post_id);
			ReplyPager replyPager = new ReplyPager(count, curPage);
			int start = replyPager.getPageBegin();
			int end = replyPager.getPageEnd();
			List<OracleReplyVO> oraclereplylist = oracleReplyService.oracleReplyList(post_id, start, end, session);
			model.addAttribute("oraclereplylist", oraclereplylist);
			
			OracleBoardVO vo = oracleService.oracleView(post_id);
			model.addAttribute("oracleview", vo);
			
		}
		
		// 6-4. 게시물 수정 페이지 이동
		
//		@RequestMapping(value = "/oraclemodify", method = RequestMethod.GET)
//		public void oracleModify(@RequestParam("post_id") int post_id, Model model) throws Exception {
//
//			OracleBoardVO vo = oracleService.oracleView(post_id);
//			model.addAttribute("oracleview", vo);
//		}
//		
//
//		@RequestMapping(value = "/oraclemodify", method = RequestMethod.POST)
//		public String oracleModify(OracleBoardVO vo) throws Exception {
//
//			oracleService.oracleModify(vo);
//			return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
//		}

		
		// 6-5. vo가 없으니 get방식으로 삭제
		@RequestMapping(value = "/oracledelete", method = RequestMethod.GET)
		public String oracleDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

			String result = "";
			
			oracleService.oracleDelete(post_id);
			
			HttpSession session = req.getSession();
			
			MemberVO member = (MemberVO) session.getAttribute("member");
			
			
			int user_index = member.getUser_index();
			String user_nickname = member.getUser_nickname();
			
			
			// mypage에서 글을 삭제하는 경우
			if( mypage.equals("right")) {
				
				result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
			
			// 그 외 게시판에서 글을 삭제하는 경우
			} else {
				
				result = "redirect:/board/oraclelist";
				
			}
			
			return result;
			

		}
		
		
		
		
	
	
	/* --------------------------------
				07. SPRING
	-------------------------------- */
	

	
	
}