package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.repositories.ContratRepository;

import tn.esprit.springg.services.IContratService;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.sql.Date;
import java.util.List;


@RestController
@RequestMapping("/Contrat")

public class ContratContoller {
    @Autowired
    IContratService iContratService;




    @PostMapping("/addContrat")
    @ResponseBody
    public void addContrat(@RequestBody Contrat contrat){
        iContratService.ajouter_contrat(contrat);

    }



    @GetMapping("/GetContrat")
    @ResponseBody
    public List<Contrat> afficherContrat(){
        return iContratService.ContratList();

    }


    @DeleteMapping("/deleteContrat/{id}")
    @ResponseBody
    public void deleteContrat(@PathVariable("id") Long ContratId){
        iContratService.deleteContratById(ContratId);



    }


    @PutMapping("/updateContrat/{id}")
    @ResponseBody
    public Contrat updateContrat(@RequestBody Contrat contrat,
                     @PathVariable("id") Long contratId)
    {
        return iContratService.updateContrat(
                contrat, contratId);
    }


    @GetMapping("/list/{id}")
    @ResponseBody
    public Contrat retrieveContrat(@PathVariable("id") Long idContrat) {
        return iContratService.retrieveContrat(idContrat)  ;
    }


    @PutMapping(value="/affecter_contrat_etudiant/{idContrat}/{nomE}/{prenomE}")
    @ResponseBody
    public Contrat affecteretudiantcontrat(@PathVariable("idContrat") Long idContrat ,
                                           @PathVariable("nomE")String nomE, @PathVariable("prenomE")String prenomE){
        return iContratService.affectContratToEtudiant(idContrat,nomE,prenomE);
    }


    @GetMapping("/GetChiffreAffaireEntreDeuxDate/{dateDebut}/{dateFin}")
    @ResponseBody
    public float GetDateBetween(@PathVariable("dateDebut") Date DateDebut, @PathVariable("dateFin") Date DateFin) {
        return iContratService.getChiffreAffaireEntreDeuxDate(DateDebut,DateFin);
    }


    @GetMapping("/GetnbContratValides/{dateDebut}/{dateFin}")
    @ResponseBody
    public Integer NbContratValides (@PathVariable("dateDebut") Date DateDebut, @PathVariable("dateFin") Date DateFin) {
        return iContratService.nombreContratsValides(DateDebut,DateFin);
    }


    @GetMapping("/retrieveAndUpdateStatusContrat")
    @ResponseBody
    public void retrieveAndUpdateStatusContrat() {
        iContratService.retrieveAndUpdateStatusContrat();
    }





}
