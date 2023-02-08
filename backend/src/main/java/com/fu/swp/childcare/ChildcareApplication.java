package com.fu.swp.childcare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.fu.swp.childcare.repositories")
public class ChildcareApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChildcareApplication.class, args);
	}

}
