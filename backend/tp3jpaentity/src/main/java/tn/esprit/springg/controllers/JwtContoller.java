package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.springg.entity.JwtRequest;
import tn.esprit.springg.entity.JwtResponse;
import tn.esprit.springg.services.IJwtService;
import tn.esprit.springg.services.JwtServiceImp;

@RestController
@CrossOrigin
public class JwtContoller {

    @Autowired
    private JwtServiceImp jwtService;

    @PostMapping({"/authenticate"})
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }
}
