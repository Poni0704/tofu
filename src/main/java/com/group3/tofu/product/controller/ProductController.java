package com.group3.tofu.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.group3.tofu.product.service.ProductService;

@Controller
public class ProductController {
	
	@Autowired
	private ProductService pSer ;
	
}
