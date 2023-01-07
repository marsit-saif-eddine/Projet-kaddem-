package tn.esprit.springg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.repositories.EtudiantRepository;
import tn.esprit.springg.services.IEtudiantService;

import java.util.List;

@RestController
@RequestMapping("/Etudiant")
public class EtudiantContoller {
    @Autowired
    IEtudiantService etudiantService;
    @GetMapping("/")
    public String hello() {
        return "helo mapping ";
    }
    @PostMapping("/addEtudiant")
    @ResponseBody
    public String addEtudiant(@RequestBody Etudiant etudiant){
        etudiantService.ajouter_etudiant(etudiant);
        return "done";
    }
    @GetMapping("/GetEtudiant")
    @ResponseBody
    public List<Etudiant> afficherEtudiant(){
        return etudiantService.EtudiantList();

    }

    @DeleteMapping("/deleteEtudiant/{id}")
    @ResponseBody
    public String deleteContrat(@PathVariable("id") String EtudiantId){
        etudiantService.deleteEtudiantById(EtudiantId);
        return "deleted";

    }

    @PutMapping("/updateEtudiant/{id}")
    @ResponseBody
    public Etudiant updateEtudiant(@RequestBody Etudiant etudiant,
                                 @PathVariable("id") String EtudiantId)
    {
        return etudiantService.updateEtudiant(
                etudiant, EtudiantId);
    }
    @PutMapping("/addAndAssignEtudiantToEquipeAndContract/{idContrat}/{idEquipe}")
    @ResponseBody
    public String updateDepUniv(@RequestBody Etudiant etudiant,
                                @PathVariable("idContrat") Long idContrat,
                                @PathVariable("idEquipe") Long idEquipe
                                )
    {
        etudiantService.addAndAssignEtudiantToEquipeAndContract(etudiant,idContrat,idEquipe);
        return "done";
    }

    @GetMapping ("/GetEtudiantsByDepartement/{idDepart}")
    @ResponseBody
    public List<Etudiant> getEtudiantsByDepartement(@PathVariable("idDepart") Long idDepart){
        return etudiantService.getEtudiantsByDepartement(idDepart);

    }

    @GetMapping("/retrieve-etudiant/{etudiant-id}")
    public Etudiant retrieveEtudiant(@PathVariable("etudiant-id") String etudiantId) {
        return etudiantService.retrieveEtudiant(etudiantId);
    }

    @GetMapping("/retrieve-equipes/{etudiant-id}")
    public List<Equipe> retrieveEquipes(@PathVariable("etudiant-id") String etudiantId) {
        return etudiantService.getallgequipes(etudiantId);
    }

    @PutMapping("/addAndAssignEtudiantToEquipe/{idEtudiant}/{idEquipe}")
    @ResponseBody
    public Etudiant updateetuddiant(
            @PathVariable("idEtudiant") String idEtudiant,
            @PathVariable("idEquipe") Long idEquipe
    )
    {
        return etudiantService.addAndAssignEtudiantToEquipes( idEtudiant,idEquipe);
    }

    @GetMapping("/nombreetudients")
    public long nombreetudiant (
    ){
        return etudiantService.numberstudentss();
    }


}
