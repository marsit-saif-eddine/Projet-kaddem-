package tn.esprit.springg.services;

import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.Etudiant;

import java.util.List;


public interface IDepartementService {
    public Long ajouter_departement(Departement d);
    public List<Departement> DepartementList();
    public void deleteDepartementById(Long DepartementId);
    public Departement updateDepartement(Departement departement,
                                 Long DepartementId);
    public void assignEtudiantToDepartement (Long EtudiantId, Long DepartementId) ;
    public void assignUniversiteToDepartement(Long idUniversite, Long
            idDepartement);
    public List<Departement> retrieveDepartementsByUniversite(Long idUniv);
}
