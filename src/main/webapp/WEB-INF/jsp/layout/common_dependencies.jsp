<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- 自定義通用css -->
<c:set var="contextRoot" value="${pageContext.request.contextPath}" />
<link href="${contextRoot}/css/style.css" rel="stylesheet">

<!-- Bootstrap 5.2.3 -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
	crossorigin="anonymous"></script>

<!-- jQuery 3.6.4 -->
<script src="https://code.jquery.com/jquery-3.6.4.js"
	integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
	crossorigin="anonymous"></script>
	
<!-- bootbox 彈跳視窗 -->
<script src="https://www.unpkg.com/bootbox@6.0.0/dist/bootbox.all.min.js"></script>

<!-- axios ajax功能 -->
<script src="https://www.unpkg.com/axios@1.3.5/dist/axios.min.js"></script>

<!-- siderbar功能 
<link href="${contextRoot}/css/sidebars.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${contextRoot}/js/pages/sidebars.js"></script>
-->
<!-- 
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<meta http-equiv="CACHE-CONTROL" content="NO-CACHE" />

<script>
    if(performance.navigation.type == 2 ){
        console.log("Doing reload");   
        location.reload(true);
        console.log("Done with reload");
    }
    console.log("Script loaded.")
</script>

 -->