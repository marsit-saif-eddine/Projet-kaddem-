package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.services.IDepartementService;


import java.util.List;

@RestController
@RequestMapping("/Departement")

public class DepartementContoller {
    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    IDepartementService departementService;

    @GetMapping("/")
    public String hello() {
        return "helo mapping ";
    }
    @PostMapping("/addDepartement")
    @ResponseBody
    public String addDepartement(@RequestBody Departement departement){
        departementService.ajouter_departement(departement);
        return "done";
    }
    @GetMapping("/GetDepartement")
    @ResponseBody
    public List<Departement> afficherDepartement(){
        return departementService.DepartementList();

    }

    @DeleteMapping("/deleteDepartement/{id}")
    @ResponseBody
    public String deleteDepartement(@PathVariable("id") Long DepartementId){
        departementService.deleteDepartementById(DepartementId);
        return "deleted";

    }

    @PutMapping("/updateDepartement/{id}")
    @ResponseBody
    public Departement updateDepartement(@RequestBody Departement departement,
                                 @PathVariable("id") Long DepartementId)
    {
        return departementService.updateDepartement(
                departement, DepartementId);
    }

    @PutMapping("/AssignEtudiantToDepartement/{idEtudiant}/{idDepartement}")
    @ResponseBody
    public String updateDepartement(@PathVariable("idEtudiant") Long EtudiantId,
                                      @PathVariable("idDepartement") Long DepartementId)
    {
        departementService.assignEtudiantToDepartement(EtudiantId,DepartementId);
        return "done";
    }

    @PutMapping("/AssignUniversiteToDepartement/{idUniversite}/{idDepartement}")
    @ResponseBody
    public String updateDepUniv(@PathVariable("idUniversite") Long UniversiteId,
                                    @PathVariable("idDepartement") Long DepartementId)
    {
        departementService.assignUniversiteToDepartement(UniversiteId,DepartementId);
        return "done";
    }

    @GetMapping("/RetrieveDepartementsByUniversite/{idUniversite}")
    @ResponseBody
    public List<Departement> retrieveDepartementsByUniversite(@PathVariable("idUniversite") Long UniversiteId){
        return departementService.retrieveDepartementsByUniversite(UniversiteId);

    }





}
