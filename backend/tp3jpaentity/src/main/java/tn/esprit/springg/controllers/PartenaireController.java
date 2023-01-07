package tn.esprit.springg.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.Partenaire;
import tn.esprit.springg.services.IDepartementService;
import tn.esprit.springg.services.IPartenaireService;

import java.util.List;
import java.util.Optional;


@RequestMapping("/Partenaire")
@RestController
public class PartenaireController {
    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    IPartenaireService iPartenaireService;


    @PostMapping("/addPartenaire")
    @ResponseBody
    public String addPartenaire(@RequestBody Partenaire p){
        iPartenaireService.ajouter_partenaire(p);
        return "";
    }
    @GetMapping("/Getliste")
    @ResponseBody
    public List<Partenaire> afficherPart(){
        return iPartenaireService.Partenairelist();

    }

    @DeleteMapping("/deletePart/{idPart}")
    @ResponseBody
    public String deletePart(@PathVariable("idPart") Long idPart){
        iPartenaireService.deletePartenaireById(idPart);
        return "";

    }


    @PutMapping("/updatePartenaire/{idPart}")
    public Partenaire UpdatePartenaire(@RequestBody Partenaire partenaire,@PathVariable( "idPart") Long idPart){
        Partenaire partenaire1=iPartenaireService.updatePartenaire(partenaire,idPart);
        return partenaire ;
    }

    @GetMapping("/findbyIdPartenaire/{idPart}")
    @ResponseBody
    public Optional<Partenaire > GetPartenairebyId(@PathVariable("idPart")Long idPart){
        return iPartenaireService.findPartenaireById(idPart);
    }



}
