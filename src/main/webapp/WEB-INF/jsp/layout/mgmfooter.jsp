<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tofucars Company</title>
</head>
<c:set var="contextRoot" value="${pageContext.request.contextPath}" />
<link href="${contextRoot}/css/bootstrap.min.css" rel="stylesheet">
<body>
	<!-- 	<div class="bg-dark" style="margin-top: 20px; height: 280px"> -->
	<!-- 		<div class="container"> -->
	<!-- 			<footer -->
	<!-- 				class="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-3 my-0 border-top"> -->
	<!-- 				<div class="col mb-3"> -->
	<!-- 					<p class="text-white py-4 text-center">&copy; 2023 Tofucars</p> -->
	<!-- 				</div> -->
	<!-- 			</footer> -->
	<!-- 		</div> -->
	<!-- 	</div> -->

	<div class="bg-dark text-white" style="height: 280px">
		<div class="container" style="padding: 20px">
			<footer class="py-3 my-4">
				<p class="text-center text-white">&copy; 2023 Tofucars Company</p>
				<ul class="nav justify-content-center border-top pb-3 mb-3">
					<li class="nav-item"><a href="${contextRoot}/mgm/customerManagement"
						class="nav-link px-3 text-white mt-2"><svg
								xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="feather feather-users align-text-bottom"
								aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg> 會員管理</a></li>
					<li class="nav-item"><a href="#"
						class="nav-link px-3 text-white mt-2"><svg
								xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="feather feather-file align-text-bottom"
								aria-hidden="true">
                    <path
									d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg> 訂單及禮物管理</a></li>
					<li class="nav-item"><a href="#"
						class="nav-link px-3 text-white mt-2"><svg
								xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="feather feather-shopping-cart align-text-bottom"
								aria-hidden="true">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path
									d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg> 商品管理</a></li>
					<li class="nav-item"><a href="#"
						class="nav-link px-3 text-white mt-2"><svg
								xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="feather feather-bar-chart-2 align-text-bottom"
								aria-hidden="true">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg> 留言管理</a></li>
					<li class="nav-item"><a href="#"
						class="nav-link px-3 text-white mt-2"><svg
								xmlns="http://www.w3.org/2000/svg" width="24" height="24"
								viewBox="0 0 24 24" fill="none" stroke="currentColor"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="feather feather-layers align-text-bottom"
								aria-hidden="true">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg> 維修保養管理</a></li>
				</ul>

			</footer>
		</div>
	</div>
</body>
</html>