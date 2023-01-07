package tn.esprit.springg.services;

import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Universite;

import java.util.List;

public interface IUniversiteService {
    public Universite ajouterUniversite(Universite u);
    public List<Universite> universitesList();
    public void deleteUniversite(Long idU);
    public Universite updateUniversite(Universite u);
}
