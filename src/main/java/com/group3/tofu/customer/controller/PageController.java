package com.group3.tofu.customer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

	// 回首頁
	@GetMapping("/")
	public String home() {

		return "index";
	}

	// 跳轉到關於我們 -> 成員介紹
	@GetMapping("/about")
	public String about() {

		return "about";
	}

	// 跳轉到關於我們 -> 公司簡介
	@GetMapping("/company")
	public String company() {

		return "company";
	}

	// 跳轉到登入
	@GetMapping("customer/login")
	public String login() {

		return "customer/login";
	}



	// 跳轉到註冊
	@GetMapping("customer/register")
	public String register() {

		return "customer/register";
	}
	
	//跳轉到請驗證的頁面(check Enabled)
	@GetMapping("customer/checkEnabled")
	public String checkEnabled() {

		return "customer/checkEnabled";
	}
	


}
