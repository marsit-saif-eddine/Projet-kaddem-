package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Universite;
import tn.esprit.springg.services.IEtudiantService;
import tn.esprit.springg.services.IUniversiteService;

import java.util.List;

@RestController
@RequestMapping("/Universite")

public class UniversiteContoller {
    @Autowired
    IUniversiteService universiteService;
    @GetMapping("/")
    public String hello() {
        return "helo mapping ";
    }
    @PostMapping("/addUniversite")
    @ResponseBody
    public String addUniversite(@RequestBody Universite universite){
        universiteService.ajouter_universite(universite);
        return "done";
    }
    @GetMapping("/GetUniversite")
    @ResponseBody
    public List<Universite> afficherUniversite(){
        return universiteService.UniversiteList();

    }

    @DeleteMapping("/deleteUniversite/{id}")
    @ResponseBody
    public String deleteUniversite(@PathVariable("id") Long UniversiteId){
        universiteService.deleteUniversiteById(UniversiteId);
        return "deleted";

    }

    @PutMapping("/updateUniversite/{id}")
    @ResponseBody
    public Universite updateUniversite(@RequestBody Universite universite,
                                 @PathVariable("id") Long UniversiteId)
    {
        return universiteService.updateUniversite(
                universite, UniversiteId);
    }



}
