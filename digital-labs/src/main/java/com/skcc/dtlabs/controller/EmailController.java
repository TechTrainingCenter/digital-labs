package com.skcc.dtlabs.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skcc.dtlabs.service.EmailService;

@RestController
public class EmailController {

	@Autowired
	private EmailService service;
	
	@RequestMapping(value = "/email", method = RequestMethod.POST)
	 public String sendMail(@RequestParam(value="type", required = true) String type,
			 				@RequestParam(value="name", required = true) String name,
			 				@RequestParam(value="email", required = true) String email,
			 				@RequestParam(value="subject") String subject,
			 				@RequestParam(value="message") String message) {

		System.out.println("MainController : sendMail() : data = " + type + ": "+ name + ": " + email + ": " + subject + ": " + message);
		
		try {
			service.sendEmail(type, name, email, subject, message);
			return "success";
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return "error";
	}
}
