package kr.co.bttf.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleBoardVO;
import kr.co.bttf.domain.OracleReplyVO;
import kr.co.bttf.service.MemberService;
import kr.co.bttf.service.OracleBoardService;
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
	
	@Inject
	private OracleBoardService OracleBoardService;
	
//	@Inject
//	private SpringReplyService springService;
	
	
	/* --------------------------------
				06. ORACLE
	-------------------------------- */
	
	// 6-2. 댓글 작성
	@RequestMapping(value = "/oracle_reply_write", method = RequestMethod.POST)
	public String oracleReplyWrite(OracleReplyVO vo , HttpServletRequest request) throws Exception {
		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		vo.setUser_nickname(member.getUser_nickname());
		oracleService.oracleReplyWrite(vo);
	  return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
	}
	
	
	// 6-3. 댓글 수정
	
	@RequestMapping(value = "/oracle_reply_modify", method = RequestMethod.POST)
	public String oracleReplyModify(OracleReplyVO vo) throws Exception {
		System.out.println("post reply modify controller");
		OracleReplyVO contents = vo.setReply_contents(vo.getReply_contents());
		
		oracleService.oracleReplyModify(vo);
		return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
	}
	
	
	// 6-4. 댓글 삭제
	@RequestMapping(value = "/oracle_reply_delete", method = RequestMethod.GET)
	public String oracleReplyDelete(@RequestParam("post_id") int post_id, OracleReplyVO vo, Model model) throws Exception {
		oracleService.oracleReplyDelete(vo);
		
		List<OracleReplyVO> oraclereplylist = oracleService.oracleReplyList(post_id);
		model.addAttribute("oraclereplylist", oraclereplylist);
		
	  return "redirect:/board/oracleview?post_id=" + vo.getPost_id();
	}
	
}
