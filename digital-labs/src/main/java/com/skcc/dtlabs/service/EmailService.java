package com.skcc.dtlabs.service;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.sendgrid.Content;
import com.sendgrid.Email;
import com.sendgrid.Mail;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;

@Service
public class EmailService {

	private static final String MATIL_TO = "ttc@sk.com";
	private static final String API_KEY = "";
	
	public void sendEmail(String type, String name, String fromEmail, String subject, String message) throws IOException {
		Email from = new Email(fromEmail);
		Email to = new Email(MATIL_TO);
		Content content = new Content("text/plain", "문의 종류: " + type + "\n" + "이름: " + name + "\n" + message);
		Mail mail = new Mail(from, subject, to, content);

		SendGrid sg = new SendGrid(API_KEY);
		Request request = new Request();
		try {
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			Response response = sg.api(request);
			System.out.println(response.getStatusCode());
			System.out.println(response.getBody());
			System.out.println(response.getHeaders());
		} catch (IOException ex) {
			throw ex;
		}
	}
}
