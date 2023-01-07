package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.services.IDepartementService;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Departement")


public class DepartementContoller  {
    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    IDepartementService departementService;


    @PostMapping("/addDepartement")
    @ResponseBody
    public String addDepartement(@RequestBody Departement departement){
        departementService.ajouter_departement(departement);
        return "";
    }
    @GetMapping("/GetDepartement")
    @ResponseBody
    public List<Departement> afficherDepartement(){
        return departementService.DepartementList();

    }

    @DeleteMapping("/deleteDepartement/{idDepart}")
    @ResponseBody
    public String deleteDepartement(@PathVariable("idDepart") Long idDepart){
        departementService.deleteDepartementById(idDepart);
        return "";


    }

    @PutMapping("/updateDepartement/{idDepart}")
    public Departement UpdateDepartement(@RequestBody Departement departement,@PathVariable( "idDepart") Long idDepart){
        Departement departement1=departementService.updateDepartement(departement,idDepart);
        return departement ;
    }





    @GetMapping("/findbyIdDepartement/{idDepart}")
    @ResponseBody
    public Optional<Departement> GetDepartementbyId(@PathVariable("idDepart")Long idDepart){
        return departementService.findDepartementById(idDepart);
    }





}
