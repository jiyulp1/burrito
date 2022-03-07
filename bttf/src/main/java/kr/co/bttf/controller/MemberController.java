package kr.co.bttf.controller;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.service.MemberService;


@Controller
@RequestMapping("/member/*")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	
	
	@Inject
	MemberService service;

	@Autowired
	BCryptPasswordEncoder passEncoder;
	  
	// 회원 가입 get
//	@RequestMapping(value = "/join", method = RequestMethod.GET)
//	public void getSignup() throws Exception {
//	logger.info("get signup");
//	}

	// 회원 가입 post
	@RequestMapping(value = "/join", method = {RequestMethod.POST, RequestMethod.GET  })
	public String join(MemberVO vo) throws Exception {
	logger.info("회원가입");
	  
	 String user_pw = vo.getUser_pw();
	 String pass = passEncoder.encode(user_pw);
	 vo.setUser_pw(pass);
	 
	 service.join(vo);

	 return "redirect:/";
	}
	//sj 오라클 js jh css html  java jsp spring
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public void login() throws Exception {
		logger.info("get signin");
	}

	
	
	
	// 로그인 post
	@RequestMapping(value = "/login", method =RequestMethod.POST)
	public String login(MemberVO vo, HttpServletRequest request, RedirectAttributes rttr) throws Exception {
	logger.info("로그인");
	 
	MemberVO login = service.login(vo);
	HttpSession session = request.getSession();
	boolean passMatch = passEncoder.matches(vo.getUser_pw(), login.getUser_pw());
	if(login != null && passMatch) {
		session.setAttribute("member", login);
	}else {
		session.setAttribute("member", null);
		rttr.addFlashAttribute("msg", false);
		return "redirect:/member/join";
	}
	return "redirect:/";

	}
}
