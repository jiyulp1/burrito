package kr.co.bttf.controller;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kr.co.bttf.domain.OracleReplyVO;
import kr.co.bttf.service.OracleReplyService;

@Controller
@RequestMapping("/reply/*")
public class ReplyController {

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
	
	// 6-1. 댓글 조회
	
	// 6-2. 댓글 작성
	@RequestMapping(value = "/oracle_reply_write", method = RequestMethod.POST)
	public String oracleReplyWrite(OracleReplyVO vo) throws Exception {
		
		oracleService.oracleReplyWrite(vo);
		
	  return "redirect:/board/oraclelist?post_id=" + vo.getPost_id();
	}
	
	
	// 6-3. 댓글 수정
	
	// 6-4. 댓글 삭제
	
	
	
}
