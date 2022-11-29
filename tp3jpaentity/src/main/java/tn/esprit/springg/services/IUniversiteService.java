package tn.esprit.springg.services;

import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Universite;

import java.util.List;

public interface IUniversiteService {
    public Long ajouter_universite(Universite u);
    public List<Universite> UniversiteList();
    public void deleteUniversiteById(Long UniversiteId);
    public Universite updateUniversite(Universite universite,
                                 Long UniversiteId);

}
