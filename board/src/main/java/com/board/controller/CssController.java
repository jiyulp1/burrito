package com.board.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.board.dao.CssBoardDAO;
import com.board.domain.CssBoardVO;
import com.board.service.CssBoardService;

@Controller
@RequestMapping("/board/*")
public class CssController {

	@Inject
	private CssBoardService service;

	//css board list 
	@RequestMapping(value = "/csslist", method = RequestMethod.GET)
	public void getList(Model model) throws Exception {

		List csslist = null;
		csslist = service.csslist();
		model.addAttribute("csslist", csslist);
	}

//게시�? ?��?��
	@RequestMapping(value = "/write", method = RequestMethod.GET)
	public void getWirte() throws Exception {

	}
	
	// 게시�? ?��?��
	@RequestMapping(value = "/write", method = RequestMethod.POST)
	public String posttWirte(CssBoardVO vo) throws Exception {
	  service.write(vo);
	  
	  return "redirect:/board/list";
	}
	
	// 게시�? 조회
	@RequestMapping(value = "/view", method = RequestMethod.GET)
	public void getView(@RequestParam("bno") int bno, Model model) throws Exception {
		CssBoardVO vo=service.view(bno);
		
		model.addAttribute("view",vo);
	}
	
	// 게시�? ?��?��
	@RequestMapping(value = "/modify", method = RequestMethod.GET)
	public void getModify(@RequestParam("bno") int bno, Model model) throws Exception {

	 CssBoardVO vo = service.view(bno);
	   
	 model.addAttribute("view", vo);
	}
	
	// 게시�? ?��?��
	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String postModify(CssBoardVO vo) throws Exception {

	 service.modify(vo);
	   
	 return "redirect:/board/view?bno=" + vo.getBno();
	}
	
	// 게시�? ?��?��
	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public String getDelete(@RequestParam("bno") int bno) throws Exception {
	  
	 service.delete(bno);  

	 return "redirect:/board/list";
	}
	
	
}