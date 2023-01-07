package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import tn.esprit.springg.entity.Universite;
import tn.esprit.springg.services.UniversiteService;
import tn.esprit.springg.services.UniversiteService;

@RestController
@RequestMapping("/UniversiteC")
public class UniversiteController {
    @Autowired
    UniversiteService universiteService;

    @PostMapping("/addUniversite")
    @ResponseBody
    public void addUniversite(@RequestBody Universite universite){
        universiteService.ajouterUniversite(universite);
    }

    @GetMapping("/listUniversite")
    @ResponseBody
    public Iterable<Universite> getAllUniversites(){
        return universiteService.universitesList();
    }

    @DeleteMapping("/deleteUniversite/{id}")
    @ResponseBody
    public void removeUniversite(@PathVariable("id") Long idU){
        universiteService.deleteUniversite(idU);
    }

    @PutMapping("updateUniversite")
    @ResponseBody
    public Universite updateUniversite(@RequestBody Universite universite){
        return universiteService.updateUniversite(universite);
    }
}
