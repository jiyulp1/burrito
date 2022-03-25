package kr.co.bttf.controller;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.ReportVO;
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

		}else {
			session.setAttribute("member", null);
	        rttr.addFlashAttribute("msg", false);
	        return "redirect:/member/signin";
		}
		return "redirect:/";
	}
	
	
	// 작성자 신고 [update]
	@RequestMapping(value = "/memberreport", method = RequestMethod.GET)
	public String memreportcard(int user_index) throws Exception {
		return "redirect:/member/memberreport";
	}
	
	
	@RequestMapping(value = "/memberreport", method = RequestMethod.POST)
	public String memreportcard(@RequestParam("user_index") int user_index, int report_category_id) throws Exception {
		
		report_category_id = 0;		
		
		ReportVO memcategoryupdate = service.memcategoryselect(user_index);
		
		if(memcategoryupdate == null) {
			service.insert_report_user(report_category_id, user_index);
		}else if(memcategoryupdate.getUser_reportcnt() == 1) {
			service.memcategory2(user_index);
			service.memreportcnt(user_index);

		}else{
			service.memcategory3(user_index);
			service.memreportcnt(user_index);

		}
		return "redirect:/";
	}

		
		
	
	
	
	private int Integer(int report_category_id) {
		// TODO Auto-generated method stub
		return 0;
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
	}
	
	// 로그아웃
	@RequestMapping(value = "/signout", method = RequestMethod.GET)
	public String signout(HttpSession session) throws Exception {
		logger.info("get logout");
		
		service.signout(session);
				
		return "redirect:/";
	}
	
	
		
}