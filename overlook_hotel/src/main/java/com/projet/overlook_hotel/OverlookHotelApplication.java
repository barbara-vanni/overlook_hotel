package com.projet.overlook_hotel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OverlookHotelApplication {
	{for (int i = 1; i <= 5; i++) {
		System.out.println("Compteur : " + i);
		}
	}
	public static void main(String[] args) {
		SpringApplication.run(OverlookHotelApplication.class, args);
	}

}
