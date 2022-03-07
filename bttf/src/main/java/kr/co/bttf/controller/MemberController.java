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

	// [insert] 회원 가입 get
	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public void getSignup() throws Exception {
		logger.info("get signup");
	}

	// 회원 가입 post
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String join(MemberVO vo) throws Exception {
		logger.info("post signup");

		String user_pw = vo.getUser_pw();
		System.out.println("userpw=" + user_pw);
		String pass = passEncoder.encode(user_pw);
		System.out.println("pass=" + pass);
		vo.setUser_pw(pass);

		service.join(vo);

		return "redirect:/member/login";
	}

	// sj 오라클 js jh css html java jsp spring
	// [selectOne] 로그인 get
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public void login(MemberVO vo) throws Exception {
		logger.info("get login : 단순 화면이동");
	}

	// 로그인 post
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(MemberVO vo, HttpServletRequest request, RedirectAttributes rttr) throws Exception {
		logger.info("post login : login.jsp에서 index로 넘어가기 위한 메서드");

		MemberVO login = service.login(vo);
		System.out.println("login : " + login);
		HttpSession session = request.getSession();
		
			boolean passMatch = passEncoder.matches(vo.getUser_pw(), login.getUser_pw());
			if (login != null && passMatch) {
				session.setAttribute("member", login);
				System.out.println(login.getUser_pw() + " = " + vo.getUser_pw());
			} else {
				System.out.println("login이 null || 틀린정보를 입력했을 경우");
				session.setAttribute("member", null);
				rttr.addFlashAttribute("msg", false);
				return "redirect:/member/login";
			}
			return "redirect:/";
		} 

	}
