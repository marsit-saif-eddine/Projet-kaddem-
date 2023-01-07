package tn.esprit.springg.services;

import tn.esprit.springg.entity.Departement;

import java.util.List;
import java.util.Optional;


public interface IDepartementService {
    public Long ajouter_departement(Departement d);
    public List<Departement> DepartementList();
    public void deleteDepartementById(Long DepartementId);
    public Departement updateDepartement(Departement departement,Long idDepart);

    public Optional<Departement> findDepartementById(Long idDepart);
}
