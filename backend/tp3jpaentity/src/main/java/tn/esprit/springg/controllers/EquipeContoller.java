package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.DetailsEquipe;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.services.IEquipeService;
import tn.esprit.springg.services.IEtudiantService;

import java.util.List;

@RestController
@RequestMapping("/Equipe")

public class EquipeContoller {
    @Autowired
    IEquipeService equipeService;
    @GetMapping("/")
    public String hello() {
        return "helo mapping ";
    }
    @PostMapping("/addEquipe")
    @ResponseBody
    public String addEquipe(@RequestBody Equipe equipe){
        equipeService.ajouter_equipe(equipe);
        return "done";
    }
    @GetMapping("/GetEquipe")
    @ResponseBody
    public List<Equipe> afficherEquipe(){
        return equipeService.EquipeList();

    }

    @DeleteMapping("/deleteEquipe/{id}")
    @ResponseBody
    public String deleteEquipe(@PathVariable("id") Long EquipeId){
        equipeService.deleteEquipeById(EquipeId);
        return "deleted";

    }

    @PutMapping("/updateEquipe/{id}")
    @ResponseBody
    public Equipe updateEquipe(@RequestBody Equipe equipe,
                                 @PathVariable("id") Long EquipeId)
    {
        return equipeService.updateEquipe(
                equipe, EquipeId);
    }

    @GetMapping("/faireEvoluerEquipes")
    @ResponseBody
    public void retrieveAndUpdateStatusContrat() {
        equipeService.faireEvoluerEquipes();
    }


    @GetMapping("/retrieveDetail/{equipe-id}")
    @ResponseBody
    public DetailsEquipe retrieveDetail(@PathVariable("equipe-id") Long equipeId){
        return equipeService.getDetailsByEquipe(equipeId);
    }

    @GetMapping("/retrieve-equipe/{equipe-id}")
    public Equipe retrieveEquipe(@PathVariable("equipe-id") Long equipeId) {
        return equipeService.retrieveEquipe(equipeId);
    }




}
