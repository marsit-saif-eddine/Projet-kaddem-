package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springg.entity.Reclamation;
import tn.esprit.springg.services.ReclamationService;

import java.util.List;

@RestController
@RequestMapping("/ReclamationC")

public class ReclamationController {
    @Autowired
    ReclamationService reclamationService;


    @PostMapping("/addReclamation")
    @ResponseBody
    public void addReclamation(@RequestBody Reclamation reclamation){
        reclamationService.ajouterReclamation(reclamation);
    }

    @GetMapping("/listReclamation")
    @ResponseBody
    public Iterable<Reclamation> getAllReclamations(){
        return reclamationService.reclamationsList();
    }

    @DeleteMapping("/deleteReclamation/{id}")
    @ResponseBody
    public void removeReclamation(@PathVariable("id") Long idR){
        reclamationService.deleteReclamation(idR);
    }

    @PutMapping("updateReclamation/{idE}")
    @ResponseBody
    public Reclamation updateReclamation(@PathVariable("idE") String idE,@RequestBody Reclamation reclamation){
        return reclamationService.updateReclamation(idE,reclamation);
    }
    @PutMapping("AddandAffectReclamationToStudent/{idE}")
    @ResponseBody
    public void AddandAffectReclamationToStudent(@PathVariable("idE") String idE ,
                                                @RequestBody Reclamation reclamation ){
        reclamationService.AddandAffectReclamationToStudent(idE,reclamation);

    }
    @GetMapping("findAllBytudiant/{idE}")
    @ResponseBody
    public List<Reclamation> findAllBytudiant(@PathVariable("idE") String idE){
        return reclamationService.findAllBytudiant(idE);
    }

    @GetMapping("/nombrereclamations")
    public long nombreetudiant (
    ){
        return reclamationService.numberreclamations();
    }
}
