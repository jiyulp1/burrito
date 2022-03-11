package kr.co.bttf.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.AdminDAO;
import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.MemberVO;
@Service
public class AdminServiceImpl implements AdminService {

	@Inject
	private AdminDAO dao;
	
	@Override
	public List<MemberVO> memberall() throws Exception {
		return dao.memberall();
	}

	@Override
	public List<MemberVO> memberblock() throws Exception {
		return dao.memberblock();
	}

	@Override
	public List<AnnVO> announcements() throws Exception {
		return dao.announcements();
	}

	@Override
	public void annwrite(AnnVO vo) throws Exception {
		dao.annwrite(vo);
	}

	@Override
	public AnnVO annview(int post_id) throws Exception {
		return dao.annview(post_id);
	}

	@Override
	public void annedit(AnnVO vo) throws Exception {
		dao.annedit(vo);
	}

	@Override
	public void anndelete(int post_id) throws Exception {
		dao.anndelete(post_id);

	}

}
