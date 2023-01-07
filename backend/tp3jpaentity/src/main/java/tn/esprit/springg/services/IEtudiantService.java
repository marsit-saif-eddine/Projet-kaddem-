package tn.esprit.springg.services;

import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;

import java.util.List;

public interface IEtudiantService {
    public String ajouter_etudiant(Etudiant e);
    public List<Etudiant> EtudiantList();
    public void deleteEtudiantById(String EtudiantId);
    public Etudiant updateEtudiant(Etudiant etudiant,
                                 String EtudiantId);
    public Etudiant addAndAssignEtudiantToEquipeAndContract(Etudiant e, Long idContrat,
                                                     Long idEquipe);

    public List<Etudiant> getEtudiantsByDepartement (long idDepart);

    public Etudiant retrieveEtudiant(String idEtudiant);
    public List<Equipe> getallgequipes(String id);

    public Etudiant addAndAssignEtudiantToEquipes( String idEtudiant , Long idEquipe);
    public Long numberstudentss ();

}
