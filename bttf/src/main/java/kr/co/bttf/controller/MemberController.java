package kr.co.bttf.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.co.bttf.domain.BoardVO;
import kr.co.bttf.domain.CssBoardVO;
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
		response.setContentType("text/html;charset=utf-8");
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
		res.setContentType("text/html;charset=utf-8");
		HttpSession session = req.getSession();  // 현재 세션 정보를 가져옴
		boolean loginSuccess = service.signin(req);
		MemberVO loginInfo = service.signin(vo);  // MemverVO형 변수 login에 로그인 정보를 저장
		
		if(loginSuccess == true) {
			session.setAttribute("member", loginInfo);  // member 세션에 로그인 정보를 부여
			ScriptUtils.alertAndMovePage(res, loginInfo.getUser_nickname()+"님 환영합니다.", "http://localhost:9090");
		}else if(loginInfo == null) {
			session.setAttribute("member", null);
		rttr.addFlashAttribute("msg", false);
		ScriptUtils.alertAndMovePage(res, "입력하신 회원정보가 틀립니다. 다시 로그인 해주세요.", "http://localhost:9090/member/signin");
		}else if (loginSuccess == false){
			ScriptUtils.alertAndMovePage(res, "신고가 접수되어 계정정지가 이루어졌습니다 홈페이지 하단 담당자에게 문의바랍니다.", "http://localhost:9090");
		}
			return "redirect:/";
	}
	
	
	
	// 이용약관
	@RequestMapping(value = "/termsOfUse", method = RequestMethod.GET)
	public void termsOfUse() throws Exception{
		
	}
	
	// 아이디 찾기 페이지 이동
	@RequestMapping(value = "/findid", method = RequestMethod.GET)
	public void findid() throws Exception{
		logger.info("get findid");
	}
	
	// 아이디 찾기후
   @RequestMapping(value = "/findid_ok", method = RequestMethod.POST)
   public void findid_ok(MemberVO vo, Model model) throws Exception{
	logger.info("POST findid_ok");
      List<MemberVO> members = service.findid(vo);
      model.addAttribute("members", members);
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
	public void mypageModify(@RequestParam("user_index") int user_index, Model model, 
							HttpServletRequest req, HttpSession session) throws Exception {
		
		logger.info("mypage");
		
		HttpSession sessionout = req.getSession();  // 현재 세션 정보를 가져옴
		
		MemberVO member = (MemberVO) sessionout.getAttribute("member");
		String user_nickname = member.getUser_nickname();
		
		//작성한 글 수
		int mypostcnt = service.mypostcnt(user_index);
		model.addAttribute("mypostcnt", mypostcnt);
		
		//작성한 댓글 수
		int myreplycnt = service.myreplycnt(user_nickname);
		model.addAttribute("myreplycnt", myreplycnt);
		
		//받은 추천 수
		int myrecommendcnt = service.myrecommendcnt(user_index);
		model.addAttribute("myrecommendcnt", myrecommendcnt);
		
		//북마크한 글 list
		List<BoardVO> mybookmarks = service.mybookmarks(user_index);
		model.addAttribute("mybookmarks", mybookmarks);
		
		//내가 작성한 글 list
		List<BoardVO> mypostlist = service.mypostlist(user_index);
		model.addAttribute("mypostlist", mypostlist);
	}
	
	//마이페이지 - 북마크한 글 삭제하기
	@RequestMapping (value = "/bookmarkdelete", method = RequestMethod.GET)
	public String bookmarkdelete(@RequestParam("board_category_name") String board_category_name, 
								@RequestParam("post_id") int post_id,  
								@RequestParam("user_index") int user_index) throws Exception {

		Map<String, Object> board_category_nameid = new HashMap<String, Object>();
		
		board_category_nameid.put("user_index", user_index);
		board_category_nameid.put("post_id", post_id);
		board_category_nameid.put("board_category_name", board_category_name);
			
		int result = service.bookmarkdelete(board_category_nameid);
	
		if(result==1){
			return "redirect:/member/mypage?user_index="+user_index;
		} else {
			return "redirect:/index";
		}
	}

	
	
	// 마이페이지 - 수정하기
	@RequestMapping(value = "/mypage_edit", method = RequestMethod.GET)
	public void mypage_view(@RequestParam("user_index") int user_index, Model model) throws Exception{
		logger.info("mypage edit");
		
		MemberVO member = service.mypage_view(user_index);
		model.addAttribute("member", member);
		
	}
	
	// 마이페이지 - 수정한 정보 업데이트
	@RequestMapping(value = "/mypage_update", method = RequestMethod.POST)
	public void mypage_update(MemberVO member, HttpServletResponse res) throws Exception{
		logger.info("mypage update");
		
		 int update = service.mypage_update(member);
		
		 
		 try {
			 if(update==1) {
				 
				 ScriptUtils.alertAndMovePage(res, "회원정보가 수정되었습니다. 다시 로그인 해주세요", "http://localhost:9090/member/signin");
				 
			 } else {
				 
				 ScriptUtils.alertAndMovePage(res, "회원정보 수정을 실패했습니다. ", "http://localhost:9090/member/mypage_edit");
				 
			 }
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		 
		 
		
	}
	
	// 마이페이지 - 탈퇴하기
	@RequestMapping(value = "/joinout", method = RequestMethod.GET)
	public void joinout( HttpServletRequest req, HttpServletResponse res, HttpSession session) throws Exception {
		
		HttpSession sessionout = req.getSession();  // 현재 세션 정보를 가져옴
		
		MemberVO member = (MemberVO) sessionout.getAttribute("member");
		int user_index = member.getUser_index();
		
		//일단 세션나오기
		service.signout(session);
		
		//회원 탈퇴
		int result = service.joinout(user_index);
		
		try {
			 if(result==1) {
				 
				 ScriptUtils.alertAndMovePage(res, "회원탈퇴가 완료되었습니다.", "http://localhost:9090/");
				 
			 } else {
				 
				 ScriptUtils.alertAndMovePage(res, "회원탈퇴에 실패했습니다. ", "http://localhost:9090/");
				 
			 }
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		 
		 
	}
	
		
}
