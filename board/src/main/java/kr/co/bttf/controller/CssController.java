package kr.co.bttf.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.bttf.dao.CssBoardDAO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.service.CssBoardService;

@Controller
@RequestMapping("/board/*")
public class CssController {

	@Inject
	private CssBoardService service;
	
	
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
	
	// 1.2 [POST] 게시물 목록
	@RequestMapping(value = "/csslist", method = RequestMethod.POST)
	public String postList() throws Exception {
		
		service.csslist();
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

	// 2.2 [POST] insert 게시물 작성
	@RequestMapping(value = "/csswrite", method = RequestMethod.POST)
	public String postWrite(CssBoardVO vo) throws Exception {
		
	  service.csswrite(vo);
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
	
	// 3.2 [POST] 게시물 상세보기
	@RequestMapping(value = "/cssview", method = RequestMethod.POST)
	public String postView(@RequestParam("post_id") int post_id) throws Exception {
		
		service.cssview(post_id);
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

	// 4.2 [POST] 게시물 수정
	@RequestMapping(value = "/cssmodify", method = RequestMethod.POST)
	public String postModify(CssBoardVO vo) throws Exception {

		service.cssmodify(vo);
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
	
	// 5.2 [POST] 게시물 삭제
	@RequestMapping(value = "/cssdelete", method = RequestMethod.POST)
	public String postDelete(@RequestParam("post_id") int post_id) throws Exception {

		service.cssdelete(post_id);
		return "redirect:/board/csslist";
	}
}