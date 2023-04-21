<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="contextRoot" value="${pageContext.request.contextPath}" />
<link href="${contextRoot}/img/indexPicture/favicon.ico" rel="icon"
	type="image/x-icon" />
<meta charset="UTF-8">
<title>Tofucars Company</title>
</head>
<body class="loginbody">
	<jsp:include page="/WEB-INF/jsp/layout/common_dependencies.jsp" />
	<jsp:include page="/WEB-INF/jsp/layout/navbar.jsp" />

	<!-- 製作登入畫面 -->
	<!-- <img class="bg" src="${contextRoot}/img/indexPicture/loginbgimg.jpg"> -->
	<div
		class="modal modal-signin position-static d-block loginbodycontent"
		tabindex="-1" role="dialog" id="modalSignin">
		
		<div class="modal-dialog" role="document">
			<div class="modal-content rounded-4 shadow">
				<div class="modal-header p-5 pb-4 border-bottom-0">
					<!-- <h1 class="modal-title fs-5" >Modal title</h1> -->
					<h1 class="fw-bold mb-0 fs-2" style="margin:auto">會員登入</h1>
				</div>

				<div class="modal-body p-5 pt-0">
					<form action="${contextRoot}/customer/findemail" method="post" class="">
						<div class="form-floating mb-3">
							<input type="email" class="form-control rounded-3"
								id="floatingInput" placeholder="Email" name="email"> <label
								for="floatingInput">Email</label>
						</div>
						<div class="form-floating mb-3">
							<input type="password" class="form-control rounded-3"
								id="floatingPassword" placeholder="Password" name="password"> <label
								for="floatingPassword">Password</label>
						</div>
						
						<div style="margin-top:20px;font-weight:bold;margin-bottom:10px"><input type="checkbox" value="remember" style="margin-right:10px;"/>記住我</div>
						<button class="w-100 mt-3 mb-2 btn btn-lg rounded-3 btn-dark"
							type="submit">Sign up</button>
							
						<div class="d-flex justify-content-around mt-5">
							<a href="#" class="text-dark fw-bold">忘記密碼?</a>
							<a href="#" class="text-dark fw-bold">立即註冊</a>
						</div>

						<div class="text-primary text-center fw-bold fs-5 mt-5"><a href="#" class="text-decoration-none">員工登入請按此→</a></div>
						
						
						<hr class="my-4">
						<div class="d-flex justify-content-between mt-3">
						<button type="button" class="btn btn-danger" id="notEnabledBTN">未認證</button>
						<button type="button" class="btn btn-success" id="memberLoginBTN">使用者</button>
						<button type="button" class="btn btn-warning" id="adminLoginBTN">管理員</button>
						</div>
						<!--  
						<hr class="my-4">
						<h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
						<button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
							type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#twitter" /></svg>
							Sign up with Twitter
						</button>
						<button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
							type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#facebook" /></svg>
							Sign up with Facebook
						</button>
						<button
							class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
							type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#github" /></svg>
							Sign up with GitHub
						</button>
						-->
						
					</form>
				</div>
			</div>
		</div>
	</div>
	<!-- 製作回到頂端的TOP-->
	<a href="#top" class="top">Top</a>

	<jsp:include page="/WEB-INF/jsp/layout/common_dependencies.jsp" />
	<jsp:include page="/WEB-INF/jsp/layout/footer.jsp" />
</body>
</html>