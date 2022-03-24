package kr.co.bttf.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
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
	public String memberundo(@RequestParam("user_index") int user_index, Model model) throws Exception {

		adminService.memberundo(user_index);
		return "redirect:/admin/memberall";
	}


	// 신고가 들어온 회원 퇴출
	@RequestMapping(value = "/memberexpell", method = RequestMethod.GET)
	public String memberexpell(@RequestParam("user_index") int user_index, Model model) throws Exception {

		adminService.memberexpell(user_index);
		return "redirect:/admin/memberall";
	}
	
	
	/*******************
	 * 신고 게시판
	 *******************/
	// 전체게시판
		@RequestMapping(value = "/boardallcss", method = RequestMethod.GET)
		public void boardallcss(Model model) throws Exception {

			System.out.println("get - boardallcss");
			List boardallcss = null;
			boardallcss = adminService.boardallcss();
			model.addAttribute("boardallcss", boardallcss);
		}
	
	
		// 4. 신고된 회원을 해제하는 버튼 기능은 admin에서 구현(set만 뒤집어서)
		// CSS 신고 게시글 해제
		@RequestMapping(value = "/cssundo", method = RequestMethod.GET)
		public String cssundo(@RequestParam("post_id") int post_id, Model model) throws Exception {

			adminService.cssundo(post_id);
			return "redirect:/admin/memberblock";
		}

		
		// 5. 퇴출
		// CSS 신고 들어온 게시글 안보이게
		@RequestMapping(value = "/cssexpell", method = RequestMethod.GET)
		public String cssexpell(@RequestParam("post_id") int post_id, Model model) throws Exception {

			adminService.cssexpell(post_id);
			return "redirect:/admin/memberblock";
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
		adminService.annvcnt(post_id);
		model.addAttribute("annvcnt", annvcnt);

		AnnVO vo = adminService.annview(post_id);
		model.addAttribute("annview", vo);
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
