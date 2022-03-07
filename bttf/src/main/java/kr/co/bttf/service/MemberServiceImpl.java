package kr.co.bttf.service;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.MemberDAO;
import kr.co.bttf.domain.MemberVO;

@Service
public class MemberServiceImpl implements MemberService {
	@Inject
	private MemberDAO dao;
	
	@Override
	public void join(MemberVO vo) throws Exception{
		dao.join(vo);
	}

	@Override
	public MemberVO login(MemberVO vo) throws Exception {
		return dao.login(vo);		
	}

	@Override
	public void logout(HttpSession session) throws Exception {
		session.invalidate();		

	}
}

	

