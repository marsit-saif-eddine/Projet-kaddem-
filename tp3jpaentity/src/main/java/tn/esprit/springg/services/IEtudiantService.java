package tn.esprit.springg.services;

import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Etudiant;

import java.util.List;

public interface IEtudiantService {
    public Long ajouter_etudiant(Etudiant e);
    public List<Etudiant> EtudiantList();
    public void deleteEtudiantById(Long EtudiantId);
    public Etudiant updateEtudiant(Etudiant etudiant,
                                 Long EtudiantId);
    public Etudiant addAndAssignEtudiantToEquipeAndContract(Etudiant e, Long idContrat,
                                                     Long idEquipe);

    public List<Etudiant> getEtudiantsByDepartement (long idDepart);
}
