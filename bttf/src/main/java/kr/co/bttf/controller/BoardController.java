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
import kr.co.bttf.domain.JavaBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.JspBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleBoardVO;
import kr.co.bttf.domain.OracleReplyVO;
import kr.co.bttf.domain.SpringBoardVO;
import kr.co.bttf.service.CssBoardService;
import kr.co.bttf.service.HtmlBoardService;
import kr.co.bttf.service.JavaBoardService;
import kr.co.bttf.service.JsBoardService;
import kr.co.bttf.service.JspBoardService;
import kr.co.bttf.service.MemberService;
import kr.co.bttf.service.OracleBoardService;
import kr.co.bttf.service.OracleReplyService;
import kr.co.bttf.service.SpringBoardService;

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
	
	@Inject
	private JspBoardService jspService;
	
	@Inject
	private JavaBoardService javaService;
	
	@Inject
	private OracleBoardService oracleService;
	
	@Inject
	private OracleReplyService oracleReplyService;
	
	@Inject
	private SpringBoardService springService;
	
	/* --------------------------------
				01. HTML
	-------------------------------- */
	// 1-1 [GET] 게시물 목록
	@RequestMapping(value = "/htmllist", method = RequestMethod.GET)
	public void htmlList(Model model) throws Exception {

		List<HtmlBoardVO> htmllist = null;
		htmllist = htmlService.htmlList();
		model.addAttribute("htmllist", htmllist);
	}

	// 1-2. write페이지이동
	@RequestMapping(value = "/htmlwrite", method = RequestMethod.GET)
	public void htmlWrite() throws Exception {

	}
	
	// 1-2-1. 게시물 작성
	@RequestMapping(value = "/htmlwrite", method = RequestMethod.POST)
	public String htmlWrite(HtmlBoardVO vo, HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		vo.setUser_nickname(member.getUser_nickname());
		htmlService.htmlWrite(vo);
	  return "redirect:/board/htmllist";
	}

	// 1-3. 게시물 상세보기 페이지 이동
	@RequestMapping(value = "/htmlview", method = RequestMethod.GET)
	public void htmlView(@RequestParam("post_id") int post_id, Model model) throws Exception {
		
		// 상세보기 시 조회수 갱신
		int htmlvcnt = 0;
		htmlService.htmlvcnt(post_id);
		model.addAttribute("htmlvcnt", htmlvcnt);
		
		HtmlBoardVO vo = htmlService.htmlView(post_id);
		model.addAttribute("htmlview", vo);
	}
	
	// 1-4. 게시물 수정 페이지 이동
	@RequestMapping(value = "/htmlmodify", method = RequestMethod.GET)
	public void htmlModify(@RequestParam("post_id") int post_id, Model model) throws Exception {

		HtmlBoardVO vo = htmlService.htmlView(post_id);
		model.addAttribute("htmlview", vo);
	}
	

	@RequestMapping(value = "/htmlmodify", method = RequestMethod.POST)
	public String htmlmodify(HtmlBoardVO vo) throws Exception {

		htmlService.htmlModify(vo);
		return "redirect:/board/htmlview?post_id=" + vo.getPost_id();
	}

	// 1-5. vo가 없으니 get방식 삭제
	@RequestMapping(value = "/htmldelete", method = RequestMethod.GET)
	public String htmlDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

		String result = "";
		
		htmlService.htmlDelete(post_id);
		HttpSession session = req.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		
		int user_index = member.getUser_index();
		String user_nickname = member.getUser_nickname();
		
		// mypage에서 글을 삭제하는 경우 > mypage에 남아있음
		if( mypage.equals("right")) {
			
			result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
		
		// 게시판에서 글을 삭제하는 경우 > 게시판에 남아있음
		} else {
			
			result = "redirect:/board/htmllist";
		}
		return result;
	}
	
	// 1-6. 게시글 신고(가용성 카테고리 변경)
	@RequestMapping(value = "/htmlreport", method = RequestMethod.GET)
	public void htmlmemberreport(@RequestParam List<Integer> checkbox, 
	
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
				htmlService.htmlcategory2(post_id);
				memberService.memcategory2(user_index);
				ScriptUtils.alertAndMovePage(response, "신고가 접수되었습니다. 메인화면으로 이동합니다.","http://localhost:9090/");
			}else {
				ScriptUtils.alertAndMovePage(response, "이미 신고된 회원입니다.","http://localhost:9090/");
			}
		}
	}	

	
	/* --------------------------------
	 			02. CSS
	-------------------------------- */
	// 2-1 [GET] 게시물 목록
	@RequestMapping(value = "/csslist", method = RequestMethod.GET)
	public void cssList(Model model) throws Exception {

		List<CssBoardVO> csslist = null;
		csslist = cssService.cssList();
		model.addAttribute("csslist", csslist);
	}

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

	// 2-5. vo가 없으니 get방식 삭제
	@RequestMapping(value = "/cssdelete", method = RequestMethod.GET)
	public String cssDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

		String result = "";
		
		cssService.cssDelete(post_id);
		
		HttpSession session = req.getSession();
		
		MemberVO member = (MemberVO) session.getAttribute("member");
		
		
		int user_index = member.getUser_index();
		String user_nickname = member.getUser_nickname();
		
		
		// mypage에서 글을 삭제하는 경우 > mypage에 남아있음
		if( mypage.equals("right")) {
			
			result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
		
		// 게시판에서 글을 삭제하는 경우 > 게시판에 남아있음
		} else {
			
			result = "redirect:/board/csslist";
		}
		return result;
	}
	
	// 2-6. 게시글 신고(가용성 카테고리 변경)
	@RequestMapping(value = "/cssreport", method = RequestMethod.GET)
	public void cssmemberreport(@RequestParam List<Integer> checkbox, 
			
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
		public void jsList(Model model) throws Exception {

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
			
			// 상세보기 시 조회수 갱신
			int jsvcnt = 0;
			jsService.jsvcnt(post_id);
			model.addAttribute("jsvcnt", jsvcnt);
			
			JsBoardVO vo = jsService.jsView(post_id);
			model.addAttribute("jsview", vo);
		}
		
		// 3-4. 게시물 수정 페이지 이동
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

		// 3-5. vo가 없으니 get방식 삭제
		@RequestMapping(value = "/jsdelete", method = RequestMethod.GET)
		public String jsDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

			String result = "";
			
			jsService.jsDelete(post_id);
			
			HttpSession session = req.getSession();
			
			MemberVO member = (MemberVO) session.getAttribute("member");
			
			
			int user_index = member.getUser_index();
			String user_nickname = member.getUser_nickname();
			
			
			// mypage에서 글을 삭제하는 경우 > mypage에 남아있음
			if( mypage.equals("right")) {
				
				result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
			
			// 게시판에서 글을 삭제하는 경우 > 게시판에 남아있음
			} else {
				
				result = "redirect:/board/jslist";
			}
			return result;
		}
		
		// 3-6. 게시글 신고(가용성 카테고리 변경)
		@RequestMapping(value = "/jsreport", method = RequestMethod.GET)
		public void jsmemberreport(@RequestParam List<Integer> checkbox, 
				
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
					jsService.jscategory2(post_id);
					memberService.memcategory2(user_index);
					ScriptUtils.alertAndMovePage(response, "신고가 접수되었습니다. 메인화면으로 이동합니다.","http://localhost:9090/");
				}else {
					ScriptUtils.alertAndMovePage(response, "이미 신고된 회원입니다.","http://localhost:9090/");
				}
			}
		}
	
	
	/* --------------------------------
				04. JSP
	-------------------------------- */
	// 4-1 [GET] 게시물 목록
	@RequestMapping(value = "/jsplist", method = RequestMethod.GET)
	public void jspList(Model model) throws Exception {

		List<JspBoardVO> jsplist = null;
		jsplist = jspService.jspList();
		model.addAttribute("jsplist", jsplist);
	}

	// 4-2. write페이지이동
	@RequestMapping(value = "/jspwrite", method = RequestMethod.GET)
	public void jspWrite() throws Exception {

	}
	
	// 4-2-1. 게시물 작성
	@RequestMapping(value = "/jspwrite", method = RequestMethod.POST)
	public String jspWrite(JspBoardVO vo, HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		vo.setUser_nickname(member.getUser_nickname());
		jspService.jspWrite(vo);
	  return "redirect:/board/jsplist";
	}
	

	// 4-3. 게시물 상세보기 페이지 이동
	@RequestMapping(value = "/jspview", method = RequestMethod.GET)
	public void jspView(@RequestParam("post_id") int post_id, Model model) throws Exception {
		
		// 상세보기 시 조회수 갱신
		int jspvcnt = 0;
		jspService.jspvcnt(post_id);
		model.addAttribute("jspvcnt", jspvcnt);
		
		JspBoardVO vo = jspService.jspView(post_id);
		model.addAttribute("jspview", vo);
	}
	
	// 4-4. 게시물 수정 페이지 이동
	@RequestMapping(value = "/jspmodify", method = RequestMethod.GET)
	public void jspModify(@RequestParam("post_id") int post_id, Model model) throws Exception {

		JspBoardVO vo = jspService.jspView(post_id);
		model.addAttribute("jspview", vo);
	}
	
	@RequestMapping(value = "/jspmodify", method = RequestMethod.POST)
	public String jspModify(JspBoardVO vo) throws Exception {

		jspService.jspModify(vo);
		return "redirect:/board/jspview?post_id=" + vo.getPost_id();
	}

	// 4-5. vo가 없으니 get방식 삭제
	@RequestMapping(value = "/jspdelete", method = RequestMethod.GET)
	public String jspDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

		String result = "";
		
		jspService.jspDelete(post_id);
		HttpSession session = req.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		
		int user_index = member.getUser_index();
		String user_nickname = member.getUser_nickname();
		
		// mypage에서 글을 삭제하는 경우 > mypage에 남아있음
		if( mypage.equals("right")) {
			
			result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
		
		// 게시판에서 글을 삭제하는 경우 > 게시판에 남아있음
		} else {
			
			result = "redirect:/board/jsplist";
		}
		return result;
	}
	
	// 4-6. 게시글 신고(가용성 카테고리 변경)
	@RequestMapping(value = "/jspreport", method = RequestMethod.GET)
	public void jspmemberreport(@RequestParam List<Integer> checkbox, 
			
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
				jspService.jspcategory2(post_id);
				memberService.memcategory2(user_index);
				ScriptUtils.alertAndMovePage(response, "신고가 접수되었습니다. 메인화면으로 이동합니다.","http://localhost:9090/");
			}else {
				ScriptUtils.alertAndMovePage(response, "이미 신고된 회원입니다.","http://localhost:9090/");
			}
		}
	}
	
	/* --------------------------------
				05. JAVA
	-------------------------------- */
	// 5-1 [GET] 게시물 목록
	@RequestMapping(value = "/javalist", method = RequestMethod.GET)
	public void javaList(Model model) throws Exception{
		List<JavaBoardVO> javalist = null;
		javalist = javaService.javaList();
		model.addAttribute("javalist", javalist);
	}
	
	// 5-2. write페이지이동
	@RequestMapping(value = "/javawrite", method = RequestMethod.GET)
	public void javaWrite() throws Exception {

	}
	
	// 5-2-1. 게시물 작성
	@RequestMapping(value = "/javawrite", method = RequestMethod.POST)
	public String javaWrite(JavaBoardVO vo, HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		vo.setUser_nickname(member.getUser_nickname());
		javaService.javaWrite(vo);
	  return "redirect:/board/javalist";
	}
	
	// 5-3. 게시물 상세보기 페이지 이동
	@RequestMapping(value = "/javaview", method = RequestMethod.GET)
	public void javaView(@RequestParam("post_id") int post_id, Model model, @RequestParam(defaultValue="1") int curPage, ModelAndView mav, HttpSession session) throws Exception {
		
		// 상세보기 시 조회수 갱신
		int javavcnt = 0;
		javaService.javavcnt(post_id);
		model.addAttribute("javavcnt", javavcnt);
	}	
		
	// 5-4. 게시물 수정 페이지 이동
	@RequestMapping(value = "/javamodify", method = RequestMethod.GET)
	public void javaModify(@RequestParam("post_id") int post_id, Model model) throws Exception {

		JavaBoardVO vo = javaService.javaView(post_id);
		model.addAttribute("javaview", vo);
	}
	

	@RequestMapping(value = "/javamodify", method = RequestMethod.POST)
	public String javaModify(JavaBoardVO vo) throws Exception {

		javaService.javaModify(vo);
		return "redirect:/board/javaview?post_id=" + vo.getPost_id();
	}

	
	// 5-5. vo가 없으니 get방식으로 삭제
	@RequestMapping(value = "/javadelete", method = RequestMethod.GET)
	public String javaDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

		String result = "";
		
		javaService.javaDelete(post_id);
		HttpSession session = req.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		
		int user_index = member.getUser_index();
		String user_nickname = member.getUser_nickname();
		
		// mypage에서 글을 삭제하는 경우 > mypage에 남아있음
		if( mypage.equals("right")) {
			
			result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
		
		// 게시판에서 글을 삭제하는 경우 > 게시판에 남아있음
		} else {
			
			result = "redirect:/board/javalist";
			
		}
		return result;
	}
	
	// 5-6. 게시글 신고(가용성 카테고리 변경)
	@RequestMapping(value = "/javareport", method = RequestMethod.GET)
	public void javamemberreport(@RequestParam List<Integer> checkbox, 
			
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
				javaService.javacategory2(post_id);
				memberService.memcategory2(user_index);
				ScriptUtils.alertAndMovePage(response, "신고가 접수되었습니다. 메인화면으로 이동합니다.","http://localhost:9090/");
			}else {
				ScriptUtils.alertAndMovePage(response, "이미 신고된 회원입니다.","http://localhost:9090/");
			}
		}
	}
	
	
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
	
	@RequestMapping(value = "/oraclemodify", method = RequestMethod.GET)
	public void oracleModify(@RequestParam("post_id") int post_id, Model model) throws Exception {

		OracleBoardVO vo = oracleService.oracleView(post_id);
		model.addAttribute("oracleview", vo);
	}
	

	@RequestMapping(value = "/oraclemodify", method = RequestMethod.POST)
	public String oracleModify(OracleBoardVO vo) throws Exception {

		oracleService.oracleModify(vo);
		return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
	}

	
	// 6-5. vo가 없으니 get방식으로 삭제
	@RequestMapping(value = "/oracledelete", method = RequestMethod.GET)
	public String oracleDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {

		String result = "";
		
		oracleService.oracleDelete(post_id);
		HttpSession session = req.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		
		int user_index = member.getUser_index();
		String user_nickname = member.getUser_nickname();
		
		// mypage에서 글을 삭제하는 경우 > mypage에 남아있음
		if( mypage.equals("right")) {
			
			result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
		
		// 게시판에서 글을 삭제하는 경우 > 게시판에 남아있음
		} else {
			
			result = "redirect:/board/oraclelist";
			
		}
		return result;
	}
	
	// 6-6. 게시글 신고(가용성 카테고리 변경)
	@RequestMapping(value = "/oraclereport", method = RequestMethod.GET)
	public void oraclememberreport(@RequestParam List<Integer> checkbox, 
			
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
				oracleService.oraclecategory2(post_id);
				memberService.memcategory2(user_index);
				ScriptUtils.alertAndMovePage(response, "신고가 접수되었습니다. 메인화면으로 이동합니다.","http://localhost:9090/");
			}else {
				ScriptUtils.alertAndMovePage(response, "이미 신고된 회원입니다.","http://localhost:9090/");
			}
		}
	}
		
		
	
	
	/* --------------------------------
				07. SPRING
	-------------------------------- */
	// 1-1 [GET] 게시물 목록
	@RequestMapping(value = "/springlist", method = RequestMethod.GET)
	public void springList(Model model) throws Exception {
	
	List<SpringBoardVO> springlist = null;
	springlist = springService.springList();
	model.addAttribute("springlist", springlist);
	}
	
	// 1-2. write페이지이동
	@RequestMapping(value = "/springwrite", method = RequestMethod.GET)
	public void springWrite() throws Exception {
	
	}
	
	// 1-2-1. 게시물 작성
	@RequestMapping(value = "/springwrite", method = RequestMethod.POST)
	public String springWrite(SpringBoardVO vo, HttpServletRequest request) throws Exception {
	HttpSession session = request.getSession();
	MemberVO member = (MemberVO) session.getAttribute("member");
	vo.setUser_nickname(member.getUser_nickname());
	springService.springWrite(vo);
	return "redirect:/board/springlist";
	}
	
	// 1-3. 게시물 상세보기 페이지 이동
	@RequestMapping(value = "/springview", method = RequestMethod.GET)
	public void springView(@RequestParam("post_id") int post_id, Model model) throws Exception {
	
	// 상세보기 시 조회수 갱신
	int springvcnt = 0;
	springService.springvcnt(post_id);
	model.addAttribute("springvcnt", springvcnt);
	
	SpringBoardVO vo = springService.springView(post_id);
	model.addAttribute("springview", vo);
	}
	
	// 1-4. 게시물 수정 페이지 이동
	@RequestMapping(value = "/springmodify", method = RequestMethod.GET)
	public void springModify(@RequestParam("post_id") int post_id, Model model) throws Exception {
	
		SpringBoardVO vo = springService.springView(post_id);
	model.addAttribute("springview", vo);
	}
	
	
	@RequestMapping(value = "/springmodify", method = RequestMethod.POST)
	public String springmodify(SpringBoardVO vo) throws Exception {
	
	springService.springModify(vo);
	return "redirect:/board/springview?post_id=" + vo.getPost_id();
	}
	
	// 1-5. vo가 없으니 get방식 삭제
	@RequestMapping(value = "/springdelete", method = RequestMethod.GET)
	public String springDelete(HttpServletRequest req, @RequestParam("post_id") int post_id, @RequestParam("mypage") String mypage) throws Exception {
	
	String result = "";
	
	springService.springDelete(post_id);
	HttpSession session = req.getSession();
	MemberVO member = (MemberVO) session.getAttribute("member");
	
	int user_index = member.getUser_index();
	String user_nickname = member.getUser_nickname();
	
	// mypage에서 글을 삭제하는 경우 > mypage에 남아있음
	if( mypage.equals("right")) {
	
	result = "forward:/member/mypage?user_index=" + user_index + "&user_nickname=" +user_nickname;			
	
	// 게시판에서 글을 삭제하는 경우 > 게시판에 남아있음
	} else {
	
	result = "redirect:/board/springlist";
	}
	return result;
	}
	
	// 1-6. 게시글 신고(가용성 카테고리 변경)
	@RequestMapping(value = "/springreport", method = RequestMethod.GET)
	public void springmemberreport(@RequestParam List<Integer> checkbox, 
	
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
		springService.springcategory2(post_id);
		memberService.memcategory2(user_index);
		ScriptUtils.alertAndMovePage(response, "신고가 접수되었습니다. 메인화면으로 이동합니다.","http://localhost:9090/");
	}else {
		ScriptUtils.alertAndMovePage(response, "이미 신고된 회원입니다.","http://localhost:9090/");
	}
	}
	}	
	

	

	
	
}