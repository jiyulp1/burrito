package kr.co.bttf.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.service.AdminService;

@Controller
@RequestMapping("/admin/*")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Inject
	AdminService adminService;

	// 전체회원목록
	@RequestMapping(value = "/memberall", method = RequestMethod.GET)
	public void memberall(Model model) throws Exception {

		System.out.println("get - memberall");
		List memberall = null;
		memberall = adminService.memberall();
		model.addAttribute("memberall", memberall);
	}
	
	/*******************
	 * 신고 회원
	 *******************/

	// 신고회원목록
	@RequestMapping(value = "/memberblock", method = RequestMethod.GET)
	public void memberblock(Model model) throws Exception {

		System.out.println("get - memberblock");
		List memberblock = null;
		memberblock = adminService.memberblock();
		model.addAttribute("memberblock", memberblock);
	}



	// 신고 회원 해제
	@RequestMapping(value = "/memberundo", method = RequestMethod.GET)
	public void memberundo(@RequestParam("user_index") int user_index, Model model, HttpServletResponse response) throws Exception {
		adminService.memberundo(user_index);
		ScriptUtils.alertAndMovePage(response, "정상회원으로 변경되었습니다.","http://localhost:9090/admin/memberall");
		//return "redirect:/admin/memberall";
	}


	// 신고가 들어온 회원 퇴출
	@RequestMapping(value = "/memberexpell", method = RequestMethod.GET)
	public void memberexpell(@RequestParam("user_index") int user_index, Model model,HttpServletResponse response) throws Exception {
		adminService.memberexpell(user_index);
		ScriptUtils.alertAndMovePage(response, "회원 퇴출이 완료되었습니다.","http://localhost:9090/admin/memberall");
		//return "redirect:/admin/memberall";
	}
	
	
	
	
	
	/*******************
	 * 신고 게시판
	 *******************/
		// 전체게시판
		//css
		@RequestMapping(value = "/boardallcss", method = RequestMethod.GET)
		public void boardallcss(Model model) throws Exception {

			System.out.println("get - boardallcss");
			List boardallcss = null;
			boardallcss = adminService.boardallcss();
			model.addAttribute("boardallcss", boardallcss);
		}
		
		//html
		@RequestMapping(value = "/boardallhtml", method = RequestMethod.GET)
		public void boardallhtml(Model model) throws Exception {

			System.out.println("get - boardallhtml");
			List boardallhtml = null;
			boardallhtml = adminService.boardallhtml();
			model.addAttribute("boardallhtml", boardallhtml);
		}
		
		
		
		//js
		@RequestMapping(value = "/boardalljs", method = RequestMethod.GET)
		public void boardalljs(Model model) throws Exception {

			System.out.println("get - boardalljs");
			List boardalljs = null;
			boardalljs = adminService.boardalljs();
			model.addAttribute("boardalljs", boardalljs);
		}
		
		//java
		@RequestMapping(value = "/boardalljava", method = RequestMethod.GET)
		public void boardalljava(Model model) throws Exception {

			System.out.println("get - boardalljava");
			List boardalljava = null;
			boardalljava = adminService.boardalljava();
			model.addAttribute("boardalljava", boardalljava);
		}
		
		//jsp
		@RequestMapping(value = "/boardalljsp", method = RequestMethod.GET)
		public void boardalljsp(Model model) throws Exception {

			System.out.println("get - boardallcss");
			List boardalljsp = null;
			boardalljsp = adminService.boardalljsp();
			model.addAttribute("boardalljsp", boardalljsp);
		}
		
		//oracle
		@RequestMapping(value = "/boardalloracle", method = RequestMethod.GET)
		public void boardalloracle(Model model) throws Exception {

			System.out.println("get - boardalloracle");
			List boardalloracle = null;
			boardalloracle = adminService.boardalloracle();
			model.addAttribute("boardalloracle", boardalloracle);
		}
		
		//spring
		@RequestMapping(value = "/boardallspring", method = RequestMethod.GET)
		public void boardallspring(Model model) throws Exception {

			System.out.println("get - boardallspring");
			List boardallspring = null;
			boardallspring = adminService.boardallspring();
			model.addAttribute("boardallspring", boardallspring);
		}
		
		
		// 신고된 게시판
 		//css
		@RequestMapping(value = "/boardblockcss", method = RequestMethod.GET)
		public void boardblockcss(Model model) throws Exception {

			System.out.println("get - boardblockcss");
			List boardblockcss = null;
			boardblockcss = adminService.boardblockcss();
			model.addAttribute("boardblockcss", boardblockcss);
		}
		
		//html
		@RequestMapping(value = "/boardblockhtml", method = RequestMethod.GET)
		public void boardblockhtml(Model model) throws Exception {

			System.out.println("get - boardblockhtml");
			List boardblockhtml = null;
			boardblockhtml = adminService.boardblockhtml();
			model.addAttribute("boardblockhtml", boardblockhtml);
		}
		
		
		
		//js
		@RequestMapping(value = "/boardblockjs", method = RequestMethod.GET)
		public void boardblockjs(Model model) throws Exception {

			System.out.println("get - boardblockjs");
			List boardblockjs = null;
			boardblockjs = adminService.boardblockjs();
			model.addAttribute("boardblockjs", boardblockjs);
		}
		
		//java
		@RequestMapping(value = "/boardblockjava", method = RequestMethod.GET)
		public void boardblockjava(Model model) throws Exception {

			System.out.println("get - boardblockjava");
			List boardblockjava = null;
			boardblockjava = adminService.boardblockjava();
			model.addAttribute("boardblockjava", boardblockjava);
		}
		
		//jsp
		@RequestMapping(value = "/boardblockjsp", method = RequestMethod.GET)
		public void boardblockjsp(Model model) throws Exception {

			System.out.println("get - boardblockjsp");
			List boardblockjsp = null;
			boardblockjsp = adminService.boardblockjsp();
			model.addAttribute("boardblockjsp", boardblockjsp);
		}
		
		//oracle
		@RequestMapping(value = "/boardblockoracle", method = RequestMethod.GET)
		public void boardblockoracle(Model model) throws Exception {

			System.out.println("get - boardblockoracle");
			List boardblockoracle = null;
			boardblockoracle = adminService.boardblockoracle();
			model.addAttribute("boardblockoracle", boardblockoracle);
		}
		
		//spring
		@RequestMapping(value = "/boardblockspring", method = RequestMethod.GET)
		public void boardblockspring(Model model) throws Exception {

			System.out.println("get - boardblockspring");
			List boardblockspring = null;
			boardblockspring = adminService.boardblockspring();
			model.addAttribute("boardblockspring", boardblockspring);
		}
		
		
	
	/*******************
	 * 공지사항
	 *******************/

	// 공지사항목록
	@RequestMapping(value = "/announcements", method = RequestMethod.GET)
	public void announcements(Model model) throws Exception {

		System.out.println("get - announcements");
		List announcements = adminService.announcements();
		model.addAttribute("announcements", announcements);
	}

	// 공지사항 작성란으로 화면이동
	@RequestMapping(value = "/annwrite", method = RequestMethod.GET)
	public void annwrite() throws Exception {

	}

	// 공지사항 insert
	@RequestMapping(value = "/annwrite", method = RequestMethod.POST)
	public String annwrite(AnnVO vo, HttpServletRequest request) throws Exception {

		HttpSession session = request.getSession();
		MemberVO member = (MemberVO) session.getAttribute("member");
		vo.setUser_nickname(member.getUser_nickname());
		adminService.annwrite(vo);

		return "redirect:/admin/announcements";
	}

	// 공지사항 상세보기
	@RequestMapping(value = "/annview", method = RequestMethod.GET)
	public void getView(@RequestParam("post_id") int post_id, Model model) throws Exception {

		// 상세보기 시 조회수 갱신
		int annvcnt = 0;

		AnnVO vo = adminService.annview(post_id);
		model.addAttribute("annview", vo);
		adminService.annvcnt(post_id);
		model.addAttribute("annvcnt", annvcnt);
	}

	// 공지사항 수정 화면이동 [selectOne]
	@RequestMapping(value = "/annedit", method = RequestMethod.GET)
	public void annedit(@RequestParam("post_id") int post_id, Model model) throws Exception {

		AnnVO vo = adminService.annview(post_id);
		model.addAttribute("annedit", vo);
	}

	// 공지사항 수정 갱신 [update]
	@RequestMapping(value = "/annedit", method = RequestMethod.POST)
	public String annedit(AnnVO vo) throws Exception {

		adminService.annedit(vo);
		return "redirect:/admin/annview?post_id=" + vo.getPost_id();
	}

	// 공지사항 삭제
	@RequestMapping(value = "/anndelete", method = RequestMethod.GET)
	public String anndelete(@RequestParam("post_id") int post_id) throws Exception {

		adminService.anndelete(post_id);

		return "redirect:/admin/announcements";
	}

	
	
}
