package kr.co.bttf.controller;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.service.CssBoardService;
import kr.co.bttf.service.HtmlBoardService;
import kr.co.bttf.service.HtmlBoardVO;

@Controller
@RequestMapping("/board/*")
public class BoardController {

	@Inject
	private HtmlBoardService htmlservice;
	private CssBoardService cssservice;
//	private CssBoardService cssservice;
//	private CssBoardService cssservice;
//	private CssBoardService cssservice;
//	private CssBoardService cssservice;
//	private CssBoardService cssservice;
	
	/* --------------------------------
				01. HTML
	-------------------------------- */
	// 1-1 [POST] 게시물 목록
	@RequestMapping(value = "/csslist", method = RequestMethod.POST)
	public String htmlList() throws Exception {
		
		htmlservice.htmlList();
		return "redirect:/board/htmlList";
	}
	
	// 1-2 [POST] insert 게시물 작성
	@RequestMapping(value = "/htmlwrite", method = RequestMethod.POST)
	public String htmlWrite(HtmlBoardVO vo) throws Exception {
		
	  htmlservice.htmlWrite(vo);
	  return "redirect:/board/htmllist";
	}
	
	// 1-3 [POST] 게시물 상세보기
	@RequestMapping(value = "/htmlview", method = RequestMethod.POST)
	public String htmlView(@RequestParam("post_id") int post_id) throws Exception {
		
		htmlservice.htmlView(post_id);
		return "redirect:/board/htmlview?post_id=" + post_id;
	}
	
	// 1-4 [POST] 게시물 수정
	@RequestMapping(value = "/htmlmodify", method = RequestMethod.POST)
	public String htmlModify(HtmlBoardVO vo) throws Exception {

		htmlservice.htmlModify(vo);
		return "redirect:/board/htmlview?post_id=" + vo.getPost_id();
	}
	
	// 1-5 [POST] 게시물 삭제
	@RequestMapping(value = "/htmldelete", method = RequestMethod.POST)
	public String htmlDelete(@RequestParam("post_id") int post_id) throws Exception {

		htmlservice.htmlDelete(post_id);
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
		
		cssservice.cssList();
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
		
	  cssservice.cssWrite(vo);
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
		
		cssservice.cssView(post_id);
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

		cssservice.cssModify(vo);
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

		cssservice.cssDelete(post_id);
		return "redirect:/board/csslist";
	}
	
	/* --------------------------------
			03. JAVASCRIPT
	-------------------------------- */
	
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