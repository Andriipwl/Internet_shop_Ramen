package ua.com.owu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.com.owu.dao.CityDao;
import ua.com.owu.entity.City;
import ua.com.owu.entity.Customer;
import ua.com.owu.service.CityService;
import ua.com.owu.service.CustomerService;

import java.util.Date;
import java.util.List;

@RestController

public class AccountController {
    @Autowired
    private CustomerService customerService;

    @Autowired
    private CityService cityService;



    @PostMapping("/saveUser")
    public List<Customer> saveUser(@RequestBody Customer customer){
        Date date = new Date();
        customer.setOrderDate(date);
        City city  = cityService.findOne(customer.getCity().getCityName());
        customer.setCity(city);
        customerService.save(customer);
        System.out.println("----------");
        System.out.println(customer);
        System.out.println("----------");
        return customerService.findAll();
    }


    @PostMapping ("/showCity")
    public List<City> showCity(){
        return  cityService.findAll();
    }
}
