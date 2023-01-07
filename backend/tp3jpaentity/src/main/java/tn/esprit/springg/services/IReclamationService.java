package tn.esprit.springg.services;

import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Reclamation;

import java.util.List;

public interface IReclamationService {
    public Reclamation ajouterReclamation(Reclamation u);
    public List<Reclamation> reclamationsList();
    public void deleteReclamation(Long idU);
    public Reclamation updateReclamation(String idE,Reclamation u);
    public Reclamation AddandAffectReclamationToStudent(String idEtudiant ,Reclamation r);

    public List<Reclamation> findAllBytudiant(String idE);
    public Long numberreclamations();
}
