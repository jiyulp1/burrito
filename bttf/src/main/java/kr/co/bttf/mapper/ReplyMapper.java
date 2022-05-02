package kr.co.bttf.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
//import org.springframework.stereotype.Repository;

import kr.co.bttf.controller.Criteria;
import kr.co.bttf.domain.ReplyVO;

public interface ReplyMapper {
	
	// 추가된 게시글의 수가 반환
	public int  insert_html(ReplyVO vo);
	
	public int  insert_css(ReplyVO vo);
	
	public int  insert_javascript(ReplyVO vo);
	
	public int  insert_jsp(ReplyVO vo);
	
	public int  insert_java(ReplyVO vo);
	
	public int  insert_oracle(ReplyVO vo);
	
	public int  insert_spring(ReplyVO vo);
	
	
	// 댓글을 가져온다
	public ReplyVO get_html (Long reply_id);
	
	public ReplyVO get_css (Long reply_id);
	
	public ReplyVO get_javascript (Long reply_id);
	
	public ReplyVO get_jsp (Long reply_id);
	
	public ReplyVO get_java (Long reply_id);
	
	public ReplyVO get_oracle (Long reply_id);
	
	public ReplyVO get_spring (Long reply_id);
	
	
	// 댓글 목록(페이징)
	public List<ReplyVO> getListWithPaging_html(
			@Param("cri") Criteria cri, 
			@Param("post_id") Long post_id);
	
	public List<ReplyVO> getListWithPaging_css(
			@Param("cri") Criteria cri, 
			@Param("post_id") Long post_id);
	
	public List<ReplyVO> getListWithPaging_javascript(
			@Param("cri") Criteria cri, 
			@Param("post_id") Long post_id);
	
	public List<ReplyVO> getListWithPaging_jsp(
			@Param("cri") Criteria cri, 
			@Param("post_id") Long post_id);
	
	public List<ReplyVO> getListWithPaging_java(
			@Param("cri") Criteria cri, 
			@Param("post_id") Long post_id);
	
	public List<ReplyVO> getListWithPaging_oracle(
			@Param("cri") Criteria cri, 
			@Param("post_id") Long post_id);
	
	public List<ReplyVO> getListWithPaging_spring(
			@Param("cri") Criteria cri, 
			@Param("post_id") Long post_id);
	

	// 댓글 삭제
	public int delete_html(Long reply_id);

	public int delete_css(Long reply_id);
	
	public int delete_javascript(Long reply_id);
	
	public int delete_jsp(Long reply_id);
	
	public int delete_java(Long reply_id);
	
	public int delete_oracle(Long reply_id);
	
	public int delete_spring(Long reply_id);
	
	
	
	// 댓글 업데이트
	public void replyupdate_html(ReplyVO replybean);
	
	public void replyupdate_css(ReplyVO replybean);
	
	public void replyupdate_javascript(ReplyVO replybean);
	
	public void replyupdate_jsp(ReplyVO replybean);
	
	public void replyupdate_java(ReplyVO replybean);
	
	public void replyupdate_oracle(ReplyVO replybean);
	
	public void replyupdate_spring(ReplyVO replybean);

	

}
