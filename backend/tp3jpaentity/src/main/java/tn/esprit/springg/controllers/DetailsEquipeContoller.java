package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.DetailsEquipe;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.services.IDetailsEquipeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Details")

public class DetailsEquipeContoller {
    @Autowired
    IDetailsEquipeService detailsEquipeService;
    @GetMapping("/")
    public String hello() {
        return "helo mapping ";
    }
    @PostMapping("/addDetails")
    @ResponseBody
    public String addDetails(@RequestBody DetailsEquipe e){
        detailsEquipeService.ajouter_details(e);
        return "done";
    }
    @GetMapping("/GetDetails")
    @ResponseBody
    public List<DetailsEquipe> afficherDetailsEquipe(){
        return detailsEquipeService.DetailsEquipeList();

    }

    @DeleteMapping("/deleteDetails/{id}")
    @ResponseBody
    public String deleteDetails(@PathVariable("id") Long DetailsEquipeId){
        detailsEquipeService.deleteDetailsEquipeById(DetailsEquipeId);
        return "deleted";

    }

    @PutMapping("/updateDetails/{id}")
    @ResponseBody
    public DetailsEquipe updateDetails(@RequestBody DetailsEquipe detailsEquipe,
                                         @PathVariable("id") Long DetailsEquipeId)
    {
        return detailsEquipeService.updateDetailsEquipe(
                detailsEquipe, DetailsEquipeId);
    }



    @GetMapping("/DetailEquipeById/{detailEquipe-id}")
    public DetailsEquipe  GetDetailEquipebyId(@PathVariable("detailEquipe-id") Long Id){
        return detailsEquipeService.retrieveDetailEquipe(Id);
    }

    @PutMapping("/affecterequipetodetail/{Equipe-id}/{DetailEquipe-id}")
    @ResponseBody
    public Equipe updateEquipe(@PathVariable("Equipe-id") Long idEquipe,@PathVariable
            ("DetailEquipe-id") Long idDetail )
    {
        return detailsEquipeService.assignEquipeToDetail(idEquipe,idDetail);
    }




}
