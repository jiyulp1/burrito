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

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.service.MemberService;

@Controller
@RequestMapping("/member/*")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Inject
	MemberService service;
	
	@Autowired
	BCryptPasswordEncoder passEncoder;  // 비밀번호 암호화
			
	// 회원 가입 get
	@RequestMapping(value = "/signup", method = RequestMethod.GET)
	public void getSignup() throws Exception {
		logger.info("get signup");
	}
	
	// 회원 가입 post
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public String postSignup(MemberVO vo) throws Exception {
		logger.info("post signup");
			
		String inputPass = vo.getUser_pw();
		//String pass = passEncoder.encode(inputPass);  // 비밀번호를 암호화
		// 암호화 해서 저장하는 부분을 더이상 구현하지 않으니 encode 메서드도 호출할 필요가 없어지지 않았나?
		vo.setUser_pw(inputPass);  // 암호화된 비밀번호를 userPass에 저장
		service.signup(vo);
	
		return "redirect:/";
	}		
		
	// 로그인  get
	@RequestMapping(value = "/signin", method = RequestMethod.GET)
	public void getSignin() throws Exception {
		logger.info("get signin");
	}
	
	
	
	// 로그인 post
	@RequestMapping(value = "/signin", method = RequestMethod.POST)
	public String postSignin(MemberVO vo, HttpServletRequest req, RedirectAttributes rttr) throws Exception {
		logger.info("post signin");
		HttpSession session = req.getSession();  // 현재 세션 정보를 가져옴
		
		boolean loginSuccess = service.signin(req);
		MemberVO loginInfo = service.signin(vo);  // MemverVO형 변수 login에 로그인 정보를 저장
		
		if(loginSuccess) {
			session.setAttribute("member", loginInfo);  // member 세션에 로그인 정보를 부여
			System.out.println(loginInfo.getUser_name()); //null
			System.out.println("loginInfo = "+ loginInfo); //login = kr.co.bttf.domain.MemberVO@6b328222

		}else {
			session.setAttribute("member", null);
	        rttr.addFlashAttribute("msg", false);
	        return "redirect:/member/login";
		}
		return "redirect:/";
	}
	// 1. 게시물신고와 회원신고 버튼 구분
	// 2.1 CSS 게시물 신고 [update]
	// 2.2 게시판별로 만들지 language index를 활용할지?
	@RequestMapping(value = "/cssboardreported", method = RequestMethod.POST)
	public String cssboardreported(CssBoardVO vo) throws Exception {

		adminService.cssboardreported(vo);
		return "redirect:/board/cssview?post_id=" + vo.getPost_id();
	}

	// 3. 회원 신고 [update]
	@RequestMapping(value = "/memberreported", method = RequestMethod.POST)
	public String memberreported(MemberVO vo) throws Exception {

		service.memberreported(vo);
		return "redirect:/";
	}
	
	
	// 로그아웃
	@RequestMapping(value = "/signout", method = RequestMethod.GET)
	public String signout(HttpSession session) throws Exception {
		logger.info("get logout");
		
		service.signout(session);  // 세션 정보를 제거
				
		return "redirect:/";
	}
		
		
}