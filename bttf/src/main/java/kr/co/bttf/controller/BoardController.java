package kr.co.bttf.controller;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.service.CssBoardService;
import kr.co.bttf.service.HtmlBoardService;
import kr.co.bttf.service.JsBoardService;

@Controller
@RequestMapping("/board/*")
public class BoardController {

	@Inject
	private HtmlBoardService htmlService;
	private CssBoardService cssService;
	private JsBoardService jsService;
//	private JspBoardService jspService;
//	private JavaBoardService javaService;
//	private OracleBoardService oracleService;
//	private SpringBoardService springService;
	
	/* --------------------------------
				01. HTML
	-------------------------------- */
	// 1-1 [POST] 게시물 목록
	@RequestMapping(value = "/htmllist", method = RequestMethod.POST)
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
	
	// 1.1 [GET] 게시물 목록
	/*
	@RequestMapping(value = "/csslist", method = RequestMethod.GET)
	public void getList(Model model) throws Exception {

		List csslist = null;
		csslist = service.csslist();
		//select을 했으니 뿌려줘야지
		model.addAttribute("csslist", csslist);
	}
	*/
	
	// 2-1 [POST] 게시물 목록
	@RequestMapping(value = "/csslist", method = RequestMethod.POST)
	public String cssList() throws Exception {
		
		cssService.cssList();
		return "redirect:/board/csslist";
	}
	
	
	
	
	/* postWrite
	  게시글 작성 */
	
	// 2.1 [GET] insert 게시물 작성
	/*
	@RequestMapping(value = "/csswrite", method = RequestMethod.GET)
	public void getWrite(CssBoardVO vo) throws Exception {
		service.csswrite(vo);
	}
	*/

	// 2-2 [POST] insert 게시물 작성
	@RequestMapping(value = "/csswrite", method = RequestMethod.POST)
	public String cssWrite(CssBoardVO vo) throws Exception {
		
	  cssService.cssWrite(vo);
	  return "redirect:/board/csslist";
	}
	
	
	

	/* getView
	  게시글 상세보기 */
	
	// 3.1 [GET] 게시물 상세보기
	/*
	@RequestMapping(value = "/cssview", method = RequestMethod.GET)
	public void getView(@RequestParam("post_id") int post_id, Model model) throws Exception {
		
		CssBoardVO vo = service.cssview(post_id);
		//select을 했으니 뿌려줘야지
		model.addAttribute("cssview", vo);
	}
	*/
	
	// 2-3 [POST] 게시물 상세보기
	@RequestMapping(value = "/cssview", method = RequestMethod.POST)
	public String cssView(@RequestParam("post_id") int post_id) throws Exception {
		
		cssService.cssView(post_id);
		return "redirect:/board/cssview?post_id=" + post_id;
	}

	
	
	
	/* getModify
	  게시글 수정 */
	
	// 4.1 [GET] 게시물 수정
	/*
	@RequestMapping(value = "/cssmodify", method = RequestMethod.GET)
	public void getModify(@RequestParam("post_id") int post_id, Model model) throws Exception {

		CssBoardVO vo = service.cssview(post_id);
		//select을 했으니 뿌려줘야지
		model.addAttribute("cssview", vo);
	}
	*/

	// 2-4 [POST] 게시물 수정
	@RequestMapping(value = "/cssmodify", method = RequestMethod.POST)
	public String cssModify(CssBoardVO vo) throws Exception {

		cssService.cssModify(vo);
		return "redirect:/board/cssview?post_id=" + vo.getPost_id();
	}

	
	
	
	/* getDelete
	  게시글 삭제 */
	
	// 5.1 [GET] 게시물 삭제
	/*
	@RequestMapping(value = "/cssdelete", method = RequestMethod.GET)
	public void getDelete(@RequestParam("post_id") int post_id, Model model) throws Exception {

		service.cssdelete(post_id);
	}
	*/
	
	// 2-5 [POST] 게시물 삭제
	@RequestMapping(value = "/cssdelete", method = RequestMethod.POST)
	public String cssDelete(@RequestParam("post_id") int post_id) throws Exception {

		cssService.cssDelete(post_id);
		return "redirect:/board/csslist";
	}
	
	
	/* --------------------------------
			03. JAVASCRIPT
	-------------------------------- */
	// 3-1 [POST] 게시물 목록
	@RequestMapping(value = "/jslist", method = RequestMethod.POST)
	public String jsList() throws Exception {
		
		jsService.jsList();
		return "redirect:/board/jslist";
	}
	
	// 3-2 [POST] insert 게시물 작성
	@RequestMapping(value = "/jswrite", method = RequestMethod.POST)
	public String jsWrite(JsBoardVO vo) throws Exception {
		
	  jsService.jsWrite(vo);
	  return "redirect:/board/jswrite";
	}
	
	// 3-3 [POST] 게시물 상세보기
	@RequestMapping(value = "/jsview", method = RequestMethod.POST)
	public String jsView(@RequestParam("post_id") int post_id) throws Exception {
		
		jsService.jsView(post_id);
		return "redirect:/board/jsview?post_id=" + post_id;
	}
	
	// 3-4 [POST] 게시물 수정
	@RequestMapping(value = "/jsmodify", method = RequestMethod.POST)
	public String jsModify(JsBoardVO vo) throws Exception {

		jsService.jsModify(vo);
		return "redirect:/board/jsview?post_id=" + vo.getPost_id();
	}
	
	// 3-5 [POST] 게시물 삭제
	@RequestMapping(value = "/jsdelete", method = RequestMethod.POST)
	public String jsDelete(@RequestParam("post_id") int post_id) throws Exception {

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
	
	/* --------------------------------
				07. SPRING
	-------------------------------- */
	
	/* --------------------------------
			03. JAVASCRIPT
	-------------------------------- */
	

	
	
}