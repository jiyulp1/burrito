package kr.co.bttf.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleReplyVO;
import kr.co.bttf.service.MemberService;
import kr.co.bttf.service.OracleReplyService;

@Controller
@RequestMapping("/reply/*")
public class ReplyController {

	@Inject
	private MemberService memberService;
	
//	@Inject
//	private HtmlReplyService htmlService;
	
//	@Inject
//	private CssReplyService cssService;
	
//	@Inject
//	private JsReplyService jsService;
	
//	@Inject
//	private JspReplyService jspService;
	
//	@Inject
//	private JavaReplyService javaService;
	
	@Inject
	private OracleReplyService oracleService;
	
//	@Inject
//	private SpringReplyService springService;
	
	
	/* --------------------------------
				06. ORACLE
	-------------------------------- */
	
	// 6-2. 댓글 작성
//	@RequestMapping(value = "/oracle_reply_write", method = RequestMethod.POST)
//	public String oracleReplyWrite(OracleReplyVO vo , HttpServletRequest request) throws Exception {
//		HttpSession session = request.getSession();
//		MemberVO member = (MemberVO) session.getAttribute("member");
//		vo.setUser_nickname(member.getUser_nickname());
//		oracleService.oracleReplyWrite(vo);
//	  return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
//	}
	
	
	@RequestMapping(value = "/oracle_reply_write", method = RequestMethod.POST)
	public String oracleReplyWrite(OracleReplyVO vo , HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		
		// 로그인 여부를 확인하여 로그인 하지 않고 댓글등록버튼 클릭 시 로그인 페이지로 이동
		boolean loginSuccess = memberService.signin(request);
		String result = "redirect:/member/signin";

		if (loginSuccess) {
			
			MemberVO member = (MemberVO) session.getAttribute("member");
			vo.setUser_nickname(member.getUser_nickname());
			oracleService.oracleReplyWrite(vo);
			return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
			
		} 
		
		else { return result; }
 	}
	
	
	
	// 6-3. 댓글 수정(GET)
//	@RequestMapping(value = "/oracle_reply_modify", method = RequestMethod.GET)
//	public String oracleReplyModify(OracleReplyVO vo, HttpServletRequest request, Model model) throws Exception {
//		
//		model.addAttribute("oracleReplyModify", oracleService.oracleReplyList(vo.getReply_id()));
//		
//		return null;
//	}
	
	// 6-3-1. 댓글 수정(POST)
//	@RequestMapping(value = "/oracle_reply_modify", method = RequestMethod.POST)
//	public String oracleReplyModifyOK(OracleReplyVO vo, HttpServletRequest request) throws Exception {
//		return null;
//	}
	
	// 6-4. 댓글 삭제
	@RequestMapping(value = "/oracle_reply_delete", method = RequestMethod.GET)
	public String oracleReplyDelete(@RequestParam("post_id") int post_id, OracleReplyVO vo, Model model) throws Exception {
		oracleService.oracleReplyDelete(vo);
		
		List<OracleReplyVO> oraclereplylist = oracleService.oracleReplyList(post_id);
		model.addAttribute("oraclereplylist", oraclereplylist);
		
	  return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
	}
	
}
