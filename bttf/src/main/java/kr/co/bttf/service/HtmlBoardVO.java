package kr.co.bttf.service;

public class HtmlBoardVO {
	
	private int post_id;
	private String post_subject;
	private String post_contents;
	private int user_index;
	private int post_available;
	private String post_rec;
	private int post_vcount;
	private String post_regdate;
	private int post_reported;
	private int category_id;
	
	
	public int getPost_id() {
		return post_id;
	}
	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}
	public String getPost_subject() {
		return post_subject;
	}
	public void setPost_subject(String post_subject) {
		this.post_subject = post_subject;
	}
	public String getPost_contents() {
		return post_contents;
	}
	public void setPost_contents(String post_contents) {
		this.post_contents = post_contents;
	}
	public int getUser_index() {
		return user_index;
	}
	public void setUser_index(int user_index) {
		this.user_index = user_index;
	}
	public int getPost_available() {
		return post_available;
	}
	public void setPost_available(int post_available) {
		this.post_available = post_available;
	}
	public String getPost_rec() {
		return post_rec;
	}
	public void setPost_rec(String post_rec) {
		this.post_rec = post_rec;
	}
	public int getPost_vcount() {
		return post_vcount;
	}
	public void setPost_vcount(int post_vcount) {
		this.post_vcount = post_vcount;
	}
	public String getPost_regdate() {
		return post_regdate;
	}
	public void setPost_regdate(String post_regdate) {
		this.post_regdate = post_regdate;
	}
	public int getPost_reported() {
		return post_reported;
	}
	public void setPost_reported(int post_reported) {
		this.post_reported = post_reported;
	}
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	
	
	
}
