<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Log in</title>
<c:set var="contextRoot" value="${pageContext.request.contextPath}" />
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"
	integrity="sha512-uMtXmF28A2Ab/JJO2t/vYhlaa/3ahUOgj1Zf27M5rOo8/+fcTUVH0/E0ll68njmjrLqOBjXM3V9NiPFL5ywWPQ=="
	crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script
	src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"></script>
<script
	src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.2.0/react-router-dom.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css"
	rel="stylesheet" type="text/css" />
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet"
	href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
<link rel="stylesheet"
	href="${contextRoot}/css/employee/employee.list.css">
</head>
<body class="bg-gradient-to-br from-pink-700 to-cyan-800">
	<div
		class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
		<div
			class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-sm shadow-2xl">
			<div>
			<h1 class="text-3xl font-semibold text-center text-gray-700">Tofu
				Cars</h1></div>
			<form action="${contextRoot}/authenticateTheUser" method="POST"
				class="space-y-4">

				<c:if test="${param.error != null}">
					<div class="bg-red-100 rounded-lg h-10 mt-8 pl-4 pt-2 pb-2">
						<p class="text-red-600 inline-block align-middle">請輸入正確的帳號或密碼</p>
					</div>
				</c:if>
				
				<c:if test="${param.logout != null}">
					<div class="bg-blue-100 rounded-lg h-10 mt-8 pl-4 pt-2 pb-2">
						<p class="text-blue-600 inline-block align-middle">您已登出帳戶</p>
					</div>
				</c:if>
				<div>
					<label class="label"> <span class="text-base label-text">User
							Name</span>
					</label> <input type="text" placeholder="Enter User Name" name="username"
						class="w-full input input-bordered" />
				</div>
				<div>
					<label class="label"> <span class="text-base label-text">Password</span>
					</label> <input type="password" placeholder="Enter Password"
						name="password" class="w-full input input-bordered" />
				</div>
				<div class="hidden">
					<label class="label"> <span
						class="text-base label-text text-red-500">Password</span>
					</label> <input type="password" placeholder="Enter Password"
						name="password"
						class="w-full input input-bordered border border-red-500" />
					<p class="text-red-500 text-xs italic mt-2">Sorry! You entered
						invalid username or password.</p>
				</div>
				<a href="#"
					class="text-xs text-gray-600 hover:underline hover:text-blue-600 hidden">Forget
					Password?</a> <a href="#"
					class="text-xs text-gray-600 hover:underline hover:text-blue-600 hidden">Quick
					Pass</a>

				<div>
					<button class="btn btn-block">Login</button>
				</div>
			</form>
		</div>
	</div>


</body>
</html>