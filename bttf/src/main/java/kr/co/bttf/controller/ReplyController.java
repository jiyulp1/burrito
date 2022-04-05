package kr.co.bttf.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import kr.co.bttf.domain.CssBoardVO;
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
	private OracleReplyService OracleReplyService;
	
	@Inject
	private OracleBoardService OracleBoardService;
	
//	@Inject
//	private SpringReplyService springService;
	
	
	/* --------------------------------
				06. ORACLE
	-------------------------------- */
	
	// 6-1. 댓글 작성
	
	@ResponseBody
	@RequestMapping(value = "/oracleReplyWrite", method = RequestMethod.POST)
	public String oracleReplyWrite(OracleReplyVO vo , HttpServletRequest request) throws Exception {

		    String str1 = request.getParameter("user_nickname");
		    String str2 = request.getParameter("reply_contents");
				
		      
		    return null;
		 
		
		
		
		//		ScriptUtils.alert(response, "댓글이 등록되었습니다");
//		HttpSession session = request.getSession(); 
//		MemberVO member = (MemberVO) session.getAttribute("member");
//		vo.setUser_nickname(member.getUser_nickname());
//		OracleReplyService.oracleReplyWrite(vo);
//		System.out.println("fc들어옴");
////		ScriptUtils.alert(response, "댓글이 등록되었습니다");
//		
//		return "forward:/board/oracleview?post_id=" + vo.getPost_id();
		
		
		
		
	}
	
	// 6.2 댓글 목록
	@RequestMapping(value = "/oracleReplyList", method = RequestMethod.GET)
	@ResponseBody
	public String oracleReplyList(Model model, String user_nickname, Date reply_regdate, String reply_contents) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("user_nickname", user_nickname);
		map.put("reply_regdate", reply_regdate);		
		map.put("reply_contents", reply_contents);
		model.addAttribute("map", map);
		
		return null;
	}
	
	
	// 6-3. 댓글 수정
	@ResponseBody
	@RequestMapping(value = "/oracleReplyModify", method = RequestMethod.POST)
	public String oracleReplyModify(OracleReplyVO vo) throws Exception {
		System.out.println("post reply modify controller");
		System.out.println(vo.getReply_contents());
		
		OracleReplyService.oracleReplyModify(vo);
		
		return "redirect:/board/oracleview?post_id=" + vo.getPost_id();	
		
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
	
	// 6-4. 댓글 삭제 // 댓글삭제 경로 수정 확인
	@ResponseBody
	@RequestMapping(value = "/oracleReplyDelete", method = RequestMethod.GET)
	public String oracleReplyDelete(@RequestParam("post_id") int post_id, OracleReplyVO vo, Model model) throws Exception {
		OracleReplyService.oracleReplyDelete(vo);
		
		//List<OracleReplyVO> oraclereplylist = OracleReplyService.oracleReplyList(post_id);
		//model.addAttribute("oraclereplylist", oraclereplylist);
		
	  return "redirect:/board/oraclelist";
	}
	
}
