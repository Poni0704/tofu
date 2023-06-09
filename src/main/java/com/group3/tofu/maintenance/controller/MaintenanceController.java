package com.group3.tofu.maintenance.controller;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.group3.tofu.appointment.Appointment;
import com.group3.tofu.customer.model.Customer;
import com.group3.tofu.maintenance.model.Maintenance;
import com.group3.tofu.maintenance.service.MaintenanceService;

@Controller
public class MaintenanceController {
	@Autowired
	private MaintenanceService mService;
	
	
//	@ResponseBody@ResponseBody
//	@GetMapping("/test/tt")
//	@GetMapping("/test/tt")
//	public Maintenance add() {
//		Maintenance ms = new Maintenance();
//		ms.setCid(1);
//		ms.setEid(1);
//		ms.setMcategory("幹");
//		ms.setNote("e04");
//		ms.setPid(1);
//		Maintenance mst=mService.insertMaintenance(ms);
//		
//		return mst;
//	}
//	@GetMapping("/main/add")
//	public ModelAndView showPage(ModelAndView mav) {
//		Maintenance maintenance = new Maintenance();
//		mav.addObject("maintenanceForm",maintenance);
//		mav.setViewName("maintenance/add");
//		return mav;

//	}
	@GetMapping("/main/add")
	public String showBookingPage(Model model, HttpSession session) {
		
		// 檢查會員是否已登入
		Customer customer = (Customer) session.getAttribute("loggedInCustomer");
		
		//System.out.println(customer);

//		if (customer != null) {
//			// 如果會員已經登入，顯示預約頁面
//			model.addAttribute("maintenanceForm", maintenance);
//			return "maintenance/add";
//		}
//		// 如果會員未登入，跳轉至登入頁面
//		return "customer/login";
		if (customer == null) {
			
			model.addAttribute("message","請先登入會員!");
			return "customer/login";
		}
		
		return "maintenance/add";

	}

	private String generateKeyCode() {

		return UUID.randomUUID().toString().substring(0, 8);
	}

	@PostMapping("/main/add")
	public String postMaintenance(@ModelAttribute(name = "maintenanceForm") Maintenance maintenance, Model model,HttpSession session) {
		
		maintenance.setKeycode(generateKeyCode());
		maintenance.setStatus("waiting");
		
		
		Customer customer = (Customer) session.getAttribute("loggedInCustomer");
		//maintenance.setCid(customer.getCustomer_id());
		maintenance.setCid(customer.getCustomer_id());
		mService.insertMaintenance(maintenance);

		LocalDateTime appointmentDateTime = LocalDateTime.ofInstant(maintenance.getAppointment().toInstant(),
				ZoneId.systemDefault());
		String formattedDate = appointmentDateTime.format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));

		model.addAttribute("keycode", maintenance.getKeycode());
		model.addAttribute("formattedDate", formattedDate);
		model.addAttribute("appointmenttime", maintenance.getAppointmenttime());
		model.addAttribute("mcategory", maintenance.getMcategory());
		model.addAttribute("inspection", maintenance.getInspection());
		model.addAttribute("electric", maintenance.getElectric());
		return "maintenance/success";
	}
	
	@GetMapping(path="mgm/MaintenanceManagement")
	public String MaintenanceManagement(@RequestParam(name = "m",defaultValue = "1") Integer pageNumber,Model model) {
		Page<Maintenance> page= mService.findByPage(pageNumber);
		model.addAttribute("page",page);
		return "mgm/MaintenanceManagement";
	}
	@GetMapping("/maintenance/search")
	public String searchByKeyCode(@RequestParam(name = "n",defaultValue = "1") Integer pageNumber,@RequestParam("keycode") String keycode, Model model,HttpSession session) {
	    // 执行根据订单编号查询的操作
	    Page<Maintenance> searchResult = mService.findByKeyCode(keycode,pageNumber);
	    
	    // 将查询结果添加到Model中供JSP页面使用
	    model.addAttribute("searchResult", searchResult);
	    
	    return "mgm/searchResult"; // 返回展示查询结果的页面
	}

	@GetMapping("/maintenance/update")
	public String showEditForm(@RequestParam("mid") Integer mid, Model model) {
	    // 透過 id 查詢需要修改的維修保養表單
	    Maintenance mtn = mService.findById(mid);
	    model.addAttribute("updateForm",mtn);
	   
	    return "mgm/edit";
	}
	
	@PutMapping("/maintenance/save")
	public String updateMaintenance(@ModelAttribute(name="updateForm") Maintenance maintenance, Model model) {
	   mService.updateMaintenance(maintenance.getMid(), maintenance);
	   
	    return "redirect:/mgm/MaintenanceManagement";
	}
	@DeleteMapping("/maintenance/delete")
	public String deletemaintennance(@RequestParam("mid")Integer mid) {
		mService.deleteById(mid);
		return "redirect:/mgm/MaintenanceManagement";
	}
	
}
