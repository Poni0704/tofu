<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<c:set var="contextRoot" value="${pageContext.request.contextPath}" />
<link href="${contextRoot}/img/indexPicture/favicon.ico" rel="icon"
	type="image/x-icon" />
<meta charset="UTF-8" />
<title>豆腐車業管理者報表</title>
<script type="text/javascript"
	src="${contextRoot}/js/pages/dashboard.js"></script>
<script type="text/javascript" src="${contextRoot}/css/dashboard.css"></script>
</head>
<body>
	<jsp:include page="/WEB-INF/jsp/layout/mgmDependencies.jsp" />
	<jsp:include page="/WEB-INF/jsp/layout/mgmHeader.jsp" />

	<div class="container-fluid">
		<div class="row">

			<jsp:include page="/WEB-INF/jsp/layout/mgmNavbar.jsp" />

			<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
			<h1 class="text-center mt-3 fw-bold">~豆腐車業管理平台~</h1>
				<figure class="d-flex justify-content-center"
					style="width: 1200px; height: 700px; margin-left: 50px">
					<img src="${contextRoot}/img/mgm/newDB.gif" />
				</figure>
			</main>
		</div>
	</div>
	<jsp:include page="/WEB-INF/jsp/layout/mgmfooter.jsp" />
</body>
</html>
