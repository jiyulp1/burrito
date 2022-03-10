package kr.co.bttf.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.service.AdminService;

@Controller
@RequestMapping("/admin/*")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Inject
	AdminService adminService;

	//전체회원목록
	@RequestMapping(value = "/memberall", method = RequestMethod.GET)
	public void memberall(Model model) throws Exception {

		System.out.println("get - memberall");
		List memberall = null;
		memberall = adminService.memberall();
		model.addAttribute("memberall", memberall);
	}
	
	//신고회원목록
	@RequestMapping(value = "/memberblock", method = RequestMethod.GET)
	public void memberblock(Model model) throws Exception {

		System.out.println("get - memberblock");
		List memberblock = null;
		memberblock = adminService.memberblock();
		model.addAttribute("memberblock", memberblock);
	}
	
	//공지사항목록
	@RequestMapping(value = "/announcements", method = RequestMethod.GET)
	public void announcements(Model model) throws Exception {

		System.out.println("get - announcements");
		List announcements = null;
		announcements = adminService.announcements();
		model.addAttribute("announcements", announcements);
	}
	
	// 공지사항 작성란으로 화면이동
	@RequestMapping(value = "/annwrite", method = RequestMethod.GET)
	public void annwrite() throws Exception {

	}
	
	// 공지사항 insert
	@RequestMapping(value = "/annwrite", method = RequestMethod.POST)
	public String annwrite(AnnVO vo, HttpServletRequest request) throws Exception {
		
		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");        
		String writer = member.getUser_name();
		adminService.annwrite(vo, writer);
	  
	  return "redirect:/admin/announcements";
	}
}
