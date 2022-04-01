package kr.co.bttf.controller;

import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.service.MemberService;

@Controller
@RequestMapping("/member/*")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Inject
	MemberService service;
	
	
	// 이메일 중복체크
	@ResponseBody
	@RequestMapping(value = "/emailcheck", method = RequestMethod.POST)
	public int emailcheck(MemberVO vo) throws Exception {
		int result = service.emailcheck(vo);
		return result;
	}
	// 닉네임 중복체크
		@ResponseBody
		@RequestMapping(value = "/nickcheck", method = RequestMethod.POST)
		public int nickcheck(MemberVO vo) throws Exception {
			int result2 = service.nickcheck(vo);
			return result2;
		}
		
	// 회원 가입 get
	@RequestMapping(value = "/signup", method = RequestMethod.GET)
	public void getSignup() throws Exception {
		logger.info("get signup");
	}
	
	// 회원 가입 post
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public String postSignup(HttpServletResponse response, HttpServletRequest request, MemberVO vo) throws Exception {
		logger.info("post signup");
		int result = service.emailcheck(vo);
		int result2 = service.nickcheck(vo);
		try {
			if(result == 1 || result2 == 1) {
				return "/member/signup";
			}else if(result == 0 && result2 == 0) {
				service.signup(vo);
				ScriptUtils.alertAndMovePage(response, "회원가입에 성공하였습니다.", "http://localhost:9090");
			}
		} catch (Exception e) {
			throw new RuntimeException();
		}	
		
		return "redirect:/";
	}		
	
	// 로그인  get
	@RequestMapping(value = "/signin", method = RequestMethod.GET)
	public void getSignin() throws Exception {
		logger.info("get signin");
	}
	
	// 로그인 post
	@RequestMapping(value = "/signin", method = RequestMethod.POST)

	public String postSignin(MemberVO vo, HttpServletResponse res, HttpServletRequest req, RedirectAttributes rttr) throws Exception {
		logger.info("post signin");
		HttpSession session = req.getSession();  // 현재 세션 정보를 가져옴
		boolean loginSuccess = service.signin(req);
		MemberVO loginInfo = service.signin(vo);  // MemverVO형 변수 login에 로그인 정보를 저장
		
		if(loginSuccess) {
			session.setAttribute("member", loginInfo);  // member 세션에 로그인 정보를 부여

			ScriptUtils.alertAndMovePage(res, loginInfo.getUser_nickname()+"님 환영합니다.", "http://localhost:9090");
		}else {
			session.setAttribute("member", null);
	        rttr.addFlashAttribute("msg", false);
	        ScriptUtils.alertAndMovePage(res, "입력하신 회원정보가 틀립니다. 다시 로그인 해주세요.", "http://localhost:9090/member/signin");
		}
	}
	
	
	
	// 비밀번호 찾기
	@RequestMapping(value = "/termsOfUse", method = RequestMethod.GET)
	public void termsOfUse() throws Exception{
		
	}
	
	// 비밀번호 찾기
	@RequestMapping(value = "/findpw", method = RequestMethod.GET)
	public void findpw() throws Exception{
		
	}
	
	
	@RequestMapping(value = "/findpw", method = RequestMethod.POST)
	public void findpw(@ModelAttribute MemberVO member, HttpServletResponse response) throws Exception{
		service.findpw(response, member);
	}
	
	@RequestMapping(value = "/updatepw", method = RequestMethod.GET)
	public void updatepw() throws Exception{
		logger.info("GET updatepw");
	}
	
	@RequestMapping(value = "/updatepw", method = RequestMethod.POST)
	public void updatepw(HttpServletResponse response, MemberVO vo) throws Exception{
		logger.info("post updatepw");
		service.updatePw(response, vo);
		System.out.println(vo.getUser_pw());
		
	}
	
	// 로그아웃
	@RequestMapping(value = "/signout", method = RequestMethod.GET)
	public String signout(HttpSession session) throws Exception {
		service.signout(session);
		
		return "redirect:/";
	}
	
	//마이페이지 이동
	@RequestMapping(value = "/mypage", method = RequestMethod.GET)
	public void mypageModify(@RequestParam("user_index") int user_index, @RequestParam("user_nickname") String user_nickname, Model model) throws Exception {
		
		//작성한 글 수
		int mypostcnt = service.mypostcnt(user_index);
		model.addAttribute("mypostcnt", mypostcnt);
		
		//작성한 댓글 수
		int myreplycnt = service.myreplycnt(user_nickname);
		model.addAttribute("myreplycnt", myreplycnt);
		
		//받은 추천 수
		
		//북마크한 글 list
		
		//내가 작성한 글 list
		List<BoardVO> mypostlist = service.mypostlist(user_index);
		model.addAttribute("mypostlist", mypostlist);
		
	}
		
}
