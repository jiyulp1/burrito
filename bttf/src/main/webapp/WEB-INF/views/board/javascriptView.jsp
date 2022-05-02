<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko" class="no-js" style="height : 100vh;">
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>Home4 - Homebrew Community</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />

    <!-- GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Hind:300,400,500,600,700" rel="stylesheet" type="text/css">
    <link href="../../../resources/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="../../../resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />

    <!-- font-Glyphicon -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">
    <link href="../../../resources/vendor/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.css" rel="stylesheet">

    <!-- PAGE LEVEL PLUGIN STYLES -->
    <link href="../../../resources/css/animate.css" rel="stylesheet">
    <link href="../../../resources/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css" />

    <!-- THEME STYLES -->
    <link href="../../../resources/css/layout.css" rel="stylesheet" type="text/css" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="/resources/img/favicon/favicon-32x32.png" />

    <!-- custom -->
    <link rel="stylesheet" href="../../../resources/css/custom.css">

    <!-- c3 chart -->
    <link href="../../../resources/vendor/c3-0.7.20/c3.css" rel="stylesheet">
    
    <!--reply style -->
    <link href="../../../resources/css/comment.css">
   
    <style type="text/css">
       .remove{
          display : none;
       }
       
       
       .bg_white_pd{
       		background-color : white;
       		padding-bottom : 200px;
       }
    </style>
  
</head>
<!-- END HEAD -->
<!-- BODY -->
<body class="page-on-scroll ">
    <!--========== HEADER ==========-->
    <header class="header navbar-fixed-top">
        <!-- Navbar -->
		<%@ include file="../include/header_control.jsp" %>
        
        <!-- Navbar -->
    </header>
    <!--========== END HEADER ==========-->

    <!--========== SLIDER ==========-->

    <!--========== SLIDER ==========-->

    <!--========== PAGE LAYOUT ==========-->
    <!-- Service -->
    <div class="bg-color-sky-light" data-auto-height="true">
        <div class="content-lg container" style="margin-top : 50px;">
            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-12 sm-margin-b-2 bg_white_pd wow fadeInLeft" style="margin-bottom: 20px;">
                
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box" data-height="height">
                            <form method="post">
                                <div class="col-md-6">
									<input type="hidden" name="user_index" id = "user_index" value="${member.user_index }">
									<input type="hidden" name="post_id" id = "post_id" value="${javascriptView.post_id }">
                                    <p style="color: black; font-size: 2rem; font-weight:bold;">글 제목 : ${javascriptView.post_subject }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" >조회수 ${javascriptView.post_vcount }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > 작성자 ${javascriptView.user_nickname }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > <fmt:formatDate value="${javascriptView.post_regdate}" pattern="yyyy-MM-dd HH:mm" /></p>
                                </div>
                                <div>
                                    <pre class="form-control" placeholder="내용을 입력해 주세요." style="height : 650px; resize: none; background-color: #fff; border: none;" disabled>${javascriptView.post_contents }</pre>
                                </div> 
                           	    <div style="text-align:center; border-bottom : 1px solid #d9d9d9;">
		         	       			<c:choose>
								    	<c:when test="${recommend_check eq '0' or empty recommend_check}"> <!-- recommend_check가0이면 빈하트-->
								        	<p id="btn_like"  style="cursor:pointer; color : red; font-size: 26px; margin-bottom:0 !important;"><i id="heart" class="fa fa-heart-o"></i></p>
<!-- 									        	<img src="../../../resources/img/heart.png" id="btn_like" style="cursor:pointer; width: 50px;"> -->
								    	</c:when>
								    	<c:otherwise> <!-- likecheck가1이면 빨간 하트-->
								        	<p id="btn_like"  style="cursor:pointer; color: red; font-size: 26px; margin-bottom:0 !important;"><i id="heart" class="fa fa-heart"></i></p>
								    	</c:otherwise>
									</c:choose>
									<p id="post_rec" style="color: #000;">${javascriptView.post_rec}</p>
								</div> 
	                        	<div class="mb-5">
									<c:if test="${member.user_nickname eq javascriptView.user_nickname}">
		 		                    	<a href="/board/jsmodify?post_id=${javascriptView.post_id }" class="btn btn-primary mt-4" id="list" type="submit">글수정</a>                          
				                		<a href="/board/jsdelete?post_id=${javascriptView.post_id }&mypage=" class="btn btn-danger mt-4" id="list" type="submit">글삭제</a>
									</c:if> 
	                        		<a href="/board/jslist" class="btn btn-default mt-4" id="edit" type="submit">글 목록</a>
									<c:if test="${member.user_nickname != javascriptView.user_nickname && member != null && javascriptView.user_nickname != 'admin'}">
										<a href="/board/jsbookmark?post_id=${javascriptView.post_id }&user_index=${member.user_index }" class="btn btn-default mt-4">북마크</a>
										<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#memberreport" data-whatever="@getbootstrap" style="float: right;" >작성자 신고</button>
									</c:if>
                              	 </div>
                            </form>
							<!--신고모달 시작 -->
							<div class="modal fade" id="memberreport" tabindex="-1" role="dialog" aria-labelledby="memberreport" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<form name="Check" action="/board/jsreport" id="reportForm" method ="get" >
											<input type="text" style="display:none;" name="reportee_index" id="reportee_index" value="${javascriptView.user_index }">
											<input type="text" style="display:none;" name="reporter_index" id="reporter_index" value="${member.user_index }">
											<input type="text" style="display:none;" name="board_category_id" id="board_category_id" value="${javascriptView.board_category_id }">
											<input type="text" style="display:none;" name="post_id" id="post_id" value="${javascriptView.post_id }">
											<div class="modal-header">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
													<h4 class="modal-title" id="reportModalLabel">회원 신고</h4>
											</div>
											<div class="modal-body">
												<div class="form-group">
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="1" id="report1" onclick=CountChecked(this) value="1">
													  <label class="form-check-label" for="report1">욕설 등 부적절한 게시글, 댓글 또는 채팅</label>
													</div>
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="2" id="report2" onclick=CountChecked(this) value="2">
													  <label class="form-check-label" for="report2">갈등 조장, 불쾌감 조성 및 허위사실 유포성 게시글, 댓글 또는 채팅</label>
													</div>
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="3" id="report3" onclick=CountChecked(this) value="3" >
													  <label class="form-check-label" for="report3">악성코드/스파이웨어 유포성 게시글, 댓글 또는 채팅</label>
													</div>
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="4" id="report4" onclick=CountChecked(this) value="4" >
													  <label class="form-check-label" for="report4">도배성 게시글, 댓글 또는 채팅</label>
													</div>	
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="5" id="report5" onclick=CountChecked(this) value="5" >
													  <label class="form-check-label" for="report5">부적절한 홍보 게시글, 댓글 또는 채팅</label>
													</div>	
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="6" id="report6" onclick=CountChecked(this) value="6" >
													  <label class="form-check-label" for="report6">명예훼손/사생활 침해 및 저작권 침해 게시글, 댓글 또는 채팅</label>
													</div>	
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="7" id="report7" onclick=CountChecked(this) value="7" >
													  <label class="form-check-label" for="report7">음란성 또는 청소년에게 부적합한 게시글, 댓글 또는 채팅</label>
													</div>	
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="8" id="report8" onclick=CountChecked(this) value="8" >
													  <label class="form-check-label" for="report8">운영자 사칭 게시글, 댓글 또는 채팅</label>
													</div>	
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="9" id="report9" onclick=CountChecked(this) value="9" >
													  <label class="form-check-label" for="report9">개인정보 유포 게시글, 댓글 또는 채팅</label>
													</div>	
													<div class="form-check form-check-inline">
													  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="10" id="report10" onclick=CountChecked(this) value="10" >
													  <label class="form-check-label" for="report10">금전거래 유도 및 도박 조장 게시글, 댓글 또는 채팅</label>
													</div>	
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">신고 취소</button>
												<input type="submit" class="btn btn-danger" id="report" value="신고하기">
											</div>
										</form>
									</div>
								</div>
							</div>
							<!--신고모달 끝 -->
							
           					<!-- 댓글 작성 시작-->
							<div class="card" id="result ">
	                            <div class="card-body">
	                                <!-- Comment form-->
									<div class="d-flex col-md-12 p-0" style="margin-bottom : 40px;">
										<c:if test="${member != null }">
		                                <form id="replyForm" name="replyForm" method="post" class="mb-4 d-flex col-md-12 p-0" target=detail onsubmit="all_reset();">
		                                	<input type="hidden" id="user_nickname" name="user_nickname" value="${member.user_nickname}">
		                                	<input type="hidden" id="board_category_id" name="board_category_id" value="${javascriptView.board_category_id}">
		                                	<input type="hidden" id="post_id" name="post_id" value="${javascriptView.post_id}">
		                                	<input id="reply_contents" type="text" name="reply_contents" class="form-control mr-5" placeholder="댓글을 작성하세요" value="">
		                                </form>
										<input id="btnReply" class="btn btn-primary" style="height:44px; line-height:32px;" value="댓글쓰기" type="submit">
										</c:if>
									</div>
	                               	<!-- Comment with nested comments-->
	                               	<form id="operForm" >
		                                <div id="getReplyList" class="chat">
		                                	<c:choose>
		                                		<c:when test="${reply != null and fn:length(reply) > 0 }">
				                                 	<p>${reply.reply_id}</p>
				                                	<c:forEach items="${reply }" var="reply">
				                                		<input type="text" value="${reply.reply_id }" name = "replyid" >
				                                		<input type="text" value="${reply.reply_contents }" name = "replycontents">
				                                		<input type="text" value="${reply.user_nickname }" name = "replynickname">
													</c:forEach>
		                                		</c:when>
		                                		<c:otherwise>													                                		
														<c:out value="댓글이 없습니다." />
		                                		</c:otherwise>
		                                	</c:choose>
		                                </div>
	                                </form>
	                            </div>
	                        </div>     
						<!-- 댓글 작성 끝-->
                        </div>
                    </div>
                </div>
                <!--// end row -->
            </div>
            <!--// end row -->
        </div>
    </div>		
    <!-- End join Form -->
    <!--========== END PAGE LAYOUT ==========-->

    <!--========== FOOTER ==========-->
    <footer class="footer fixed_footer">
	
        <!-- Copyright -->
		<%@ include file="../include/footer_control.jsp" %>
        <!-- End Copyright -->
    </footer>
    <!--========== END FOOTER ==========-->
    
	
							
    <!-- Back To Top -->
    <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>
    <!-- JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
    <!-- CORE PLUGINS -->
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
	
	
    <!-- PAGE LEVEL PLUGINS -->
    <script src="../../../resources/vendor/jquery.easing.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/jquery.back-to-top.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/jquery.wow.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL SCRIPTS -->
    <script src="../../../resources/js/layout.min.js" type="text/javascript"></script>
    <script src="../../../resources/js/components/wow.min.js" type="text/javascript"></script>
    <script src="../../../resources/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="../../../resources/js/components/masonry.min.js" type="text/javascript"></script>
	
	<!-- Drop Down Menu -->
    <script src="../../../resources/js/action.js"></script>
    
	<!--CKEDITOR -->
    <script src="../../../resources/vendor/ckeditor5-build-classic/translations/ko.js"></script>
	<script src="../../../resources/vendor/ckeditor5-build-classic/ckeditor.js"></script>
	
	<!-- REPLY AJAX -->
	<script type="text/javascript" src="../../../resources/js/replymodule.js"></script>
	
	<!-- ALERT SECTION -->
    <script src="../../../resources/js/confirm.js"></script>
    <script src="../../../resources/js/maxreport.js"></script>
    <script src="../../../resources/js/boardheart.js"></script>
    
    <script>
        ClassicEditor
            .create( document.querySelector( '#classic' ))
            .catch( error => {
                console.error( error );
    });
    </script>
   	<script>
	function all_reset(){
		document.replyForm.reset();
	}
	
	function undo_process(){
		showList(1);
	}
	
	var input = document.getElementById("reply_contents");
	   input.addEventListener("keypress", function(event) {
	     if (event.key === "Enter") {
	       event.preventDefault();
	       document.getElementById("btnReply").click();
	     }
	   });
	   
	   
		var postValue = '<c:out value="${javascriptView.post_id }"/>'
		var replyUL = $(".chat");
		showList(1);
		var replyForm = $("#replyForm");
		var user_nickname = replyForm.find("input[name='user_nickname']");
		var reply_contents = replyForm.find("input[name='reply_contents']");
		var reply_id = replyForm.find("input[name='replyid']");
		var board_category_id = replyForm.find("input[name='board_category_id']");
				
		$("#btnReply").on("click", function(e){
			
			var postValue = '<c:out value="${javascriptView.post_id }"/>'
			var reply = {
					user_nickname : user_nickname.val(),					
					reply_contents : reply_contents.val(),
					post_id : postValue,
					board_category_id : board_category_id.val()
			};
			replyService.add(reply, function(result){
				showList(1);
				all_reset();
			});
		});
		
		

	function showList(page) {
			var postValue = '<c:out value="${javascriptView.post_id }"/>'
			var board_category_id = '<c:out value="${javascriptView.board_category_id}"/>'
			
			replyService.getList({ board_category_id : board_category_id, post_id : postValue, page : page || 1},function(list) {
				var str = "";
				if (list == null || list.length == 0) {
					str +=	"<p class='text-center' style='font-size : 20px;'>댓글이 없습니다</p>"				
					return replyUL.html(str); 
				}
				
				for (var i = 0, len = list.length || 0; i < len; i++) {
					
					str += "<div class='left clearfix' id='reply_id" + list[i].reply_id + "'>";
					str += "<div>"+ "<div class='header'>"+ "<strong class='primary-font'>" + list[i].user_nickname+ "</strong>";
					str += "<small class='pull-right text-muted'>" + replyService.displayTime(list[i].reply_regdate) + "</small></div>";
					str += "<c:if test='${member.user_nickname eq javascriptView.user_nickname}'>";
					str += "<div class='col-md-12' style='padding-left : 0 !important; padding-right : 0 !important; padding-bottom : 40px;'>";
					str += "<div class='pull-right text-muted'>";
					str += "<a href='javascript:void(0)' onclick='updateviewBtn("+ list[i].board_category_id +","+ list[i].reply_id + ",\"" + list[i].reply_regdate+"\", \""+ list[i].reply_contents+"\", \""+ list[i].user_nickname +"\")' class='btn btn-info btn-sm mr-2'>수정";
					str += "</a>";
					str += "<a href='javascript:void(0)' onclick='fn_deleteReply("+ list[i].board_category_id +"," + list[i].reply_id + ")' class='btn btn-danger btn-sm'>삭제";
					str += "</a>";
					str += "</div>";
					str += "</div>";
					str += "</c:if>";
					str += "<p style='font-size : 16px;'>" + list[i].reply_contents + "</p>";
					str += "</div>";
					str += "<p style='border : 1px solid #d9d9d9; margin-top : 40px;'>";
					str += "</div>";
				}
				replyUL.html(str);
			}); //end getlsit function
		}; // end showlist
		
		
		function updateviewBtn(board_category_id, reply_id, reply_regdate, reply_contents,user_nickname) {
			var updatestr = "";
				updatestr += "<div class='left clearfix' id='reply_id" + reply_id + "'>";
				updatestr += "<div>"+ "<div class='header'>"+ "<strong class='primary-font'>" + user_nickname + "</strong>";
				updatestr += "<small class='pull-right text-muted'></small></div>";
				updatestr += "<c:if test='${member.user_nickname eq javascriptView.user_nickname}'>";
				updatestr += "<div class='col-md-12' style='padding-left : 0 !important; padding-right : 0 !important; padding-bottom : 40px;'>";
				updatestr += "<div class='pull-right text-muted'>";
				updatestr += '<a href="javascript:void(0)" class="btn btn-info btn-sm mr-2"';
				updatestr += 'onclick="updateBtn('+ board_category_id +',' + reply_id + ',\'' + user_nickname + '\')" >수정완료';
				updatestr += "</a>";
				updatestr += "<a href='javascript:void(0)' onclick='undo_process()' class='btn btn-danger btn-sm'>취소";
				updatestr += "</a>";
				updatestr += "</div>";
				updatestr += "</div>";
				updatestr += "</c:if>";
				updatestr += "<textarea id='reply_edit_content' style='font-size : 16px; resize: none; width:100%;'>" + reply_contents + "</textarea >";
				updatestr += "</div>";
				updatestr += "<p style='border : 1px solid #d9d9d9; margin-top : 40px;'>";
 				updatestr += "</div>";
					$('#reply_id'+reply_id).replaceWith(updatestr);
					$('#reply_id'+reply_id+'#reply_contents').focus();
		        };
		        
		        function updateBtn(board_category_id, reply_id){
		    		var reply_content = $("#reply_edit_content").val();
		    				    		
		    		$.ajax({
		    			url: '/reply/'+board_category_id+'/'+reply_id+'/'+reply_content,
		    			type : 'POST',
		    			dataType: 'json',
		    			success: function(result){
		    			   	showList(1);
		    			}
		    			, error: function(error){
		    				console.log("에러 : " + error);
		    			}
		    		});
		    		
		    	};
		    	
		    	function fn_deleteReply(board_category_id, reply_id){
		    		var paramData = {"board_category_id": board_category_id,
				    						"reply_id": reply_id};
		    		$.ajax({
		    			url: '/reply/'+board_category_id+'/'+reply_id
		    			, data : paramData
		    			, type : 'POST'
		    			, dataType : 'text'
		    			, success: function(result){
		    				alert("댓글이 삭제되었습니다.");
		    				showList(1);
		    			}, error: function(error){
		    				console.log("에러 : " + error);
		    			}
		    		});
		    	}
</script>
</body>
<!-- END BODY -->
</html>
