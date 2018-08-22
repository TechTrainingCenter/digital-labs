package com.skcc.dtlabs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	@GetMapping("/")
	public String getIndex() {
		System.out.println("MainController : getIndex()");
		return "index";
	}
}
