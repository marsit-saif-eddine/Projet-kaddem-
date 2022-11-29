package tn.esprit.springg.services;

import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;

import java.util.List;

public interface IEquipeService {
    public  Long ajouter_equipe(Equipe e);
    public List<Equipe> EquipeList();
    public void deleteEquipeById(Long EquipeId);
    public Equipe updateEquipe(Equipe equipe ,
                                 Long EquipeId);
    public void faireEvoluerEquipes();
}
