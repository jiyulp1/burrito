package kr.co.bttf.dao;


import kr.co.bttf.domain.MemberVO;

public interface MemberDAO {
	
	public void join(MemberVO vo) throws Exception;
	
	public MemberVO login(MemberVO vo) throws Exception;

	
}
