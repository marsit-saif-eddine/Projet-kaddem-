package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.springg.entity.User;
import tn.esprit.springg.services.IUserService;

import javax.annotation.PostConstruct;

@RestController
public class UserContoller {
    @Autowired
    private IUserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    //@PostMapping({"/registerNewUser"})
   // public User registerNewUser(@RequestBody User user) {
     //   return userService.registerNewUser(user);
  //  }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
}
