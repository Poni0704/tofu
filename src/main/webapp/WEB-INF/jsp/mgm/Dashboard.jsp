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
	<header
		class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
		<a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-3 text-center"
			href="#">豆腐車業管理平台</a>
		<button class="navbar-toggler position-absolute d-md-none collapsed"
			type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
			aria-controls="sidebarMenu" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<!-- 		<input class="form-control form-control-dark w-100 rounded-0 border-0" -->
		<!-- 			type="text" placeholder="Search" aria-label="Search" /> -->


		<c:if test="${loggedInCustomerForDB!=null }">
			<div style="color: white" class="d-inline p-2">
				Hello!，${loggedInCustomerForDB.account}</div>
			<div>
				<a class="nav-link px-3" href="#">Sign out</a>
			</div>
		</c:if>

	</header>

	<div class="container-fluid">
		<div class="row">
			<nav id="sidebarMenu"
				class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
				<div class="position-sticky pt-3 sidebar-sticky">
					<ul class="nav flex-column">
						<!-- <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-home align-text-bottom"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    ></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Dashboard
                </a>
              </li> -->
						<li class="nav-item"><a class="nav-link" href="#"
							style="color: black"> <svg xmlns="http://www.w3.org/2000/svg"
									width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-users align-text-bottom"
									aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg> 會員管理
						</a></li>
						<li class="nav-item"><a class="nav-link" href="#"
							style="color: black"> <svg xmlns="http://www.w3.org/2000/svg"
									width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-file align-text-bottom"
									aria-hidden="true">
                    <path
										d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg> 訂單及禮物管理
						</a></li>
						<li class="nav-item"><a class="nav-link" href="#"
							style="color: black"> <svg xmlns="http://www.w3.org/2000/svg"
									width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-shopping-cart align-text-bottom"
									aria-hidden="true">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path
										d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg> 商品管理
						</a></li>

						<li class="nav-item"><a class="nav-link" href="#"
							style="color: black"> <svg xmlns="http://www.w3.org/2000/svg"
									width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-bar-chart-2 align-text-bottom"
									aria-hidden="true">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg> 留言管理
						</a></li>
						<li class="nav-item"><a class="nav-link" href="#"
							style="color: black"> <svg xmlns="http://www.w3.org/2000/svg"
									width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-layers align-text-bottom"
									aria-hidden="true">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg> 維修保養管理
						</a></li>
					</ul>
				</div>
			</nav>

			<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
				<h2>Section title</h2>
				<div class="table-responsive">
					<table class="table table-striped table-sm">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Header</th>
								<th scope="col">Header</th>
								<th scope="col">Header</th>
								<th scope="col">Header</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1,001</td>
								<td>random</td>
								<td>data</td>
								<td>placeholder</td>
								<td>text</td>
							</tr>
							<tr>
								<td>1,002</td>
								<td>placeholder</td>
								<td>irrelevant</td>
								<td>visual</td>
								<td>layout</td>
							</tr>
							<tr>
								<td>1,003</td>
								<td>data</td>
								<td>rich</td>
								<td>dashboard</td>
								<td>tabular</td>
							</tr>
							<tr>
								<td>1,003</td>
								<td>information</td>
								<td>placeholder</td>
								<td>illustrative</td>
								<td>data</td>
							</tr>
							<tr>
								<td>1,004</td>
								<td>text</td>
								<td>random</td>
								<td>layout</td>
								<td>dashboard</td>
							</tr>
							<tr>
								<td>1,005</td>
								<td>dashboard</td>
								<td>irrelevant</td>
								<td>text</td>
								<td>placeholder</td>
							</tr>
							<tr>
								<td>1,006</td>
								<td>dashboard</td>
								<td>illustrative</td>
								<td>rich</td>
								<td>data</td>
							</tr>
							<tr>
								<td>1,007</td>
								<td>placeholder</td>
								<td>tabular</td>
								<td>information</td>
								<td>irrelevant</td>
							</tr>
							<tr>
								<td>1,008</td>
								<td>random</td>
								<td>data</td>
								<td>placeholder</td>
								<td>text</td>
							</tr>
							<tr>
								<td>1,009</td>
								<td>placeholder</td>
								<td>irrelevant</td>
								<td>visual</td>
								<td>layout</td>
							</tr>
							<tr>
								<td>1,010</td>
								<td>data</td>
								<td>rich</td>
								<td>dashboard</td>
								<td>tabular</td>
							</tr>
							<tr>
								<td>1,011</td>
								<td>information</td>
								<td>placeholder</td>
								<td>illustrative</td>
								<td>data</td>
							</tr>
							<tr>
								<td>1,012</td>
								<td>text</td>
								<td>placeholder</td>
								<td>layout</td>
								<td>dashboard</td>
							</tr>
							<tr>
								<td>1,013</td>
								<td>dashboard</td>
								<td>irrelevant</td>
								<td>text</td>
								<td>visual</td>
							</tr>
							<tr>
								<td>1,014</td>
								<td>dashboard</td>
								<td>illustrative</td>
								<td>rich</td>
								<td>data</td>
							</tr>
							<tr>
								<td>1,015</td>
								<td>random</td>
								<td>tabular</td>
								<td>information</td>
								<td>text</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
		</div>
	</div>
</body>
</html>