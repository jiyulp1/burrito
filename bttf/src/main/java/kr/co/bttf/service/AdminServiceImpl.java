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
	public void annwrite(AnnVO vo, String writer) throws Exception {
		dao.annwrite(vo, writer);
	}

}
