package tn.esprit.springg.services;

import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.DetailsEquipe;

import java.util.List;

public interface IDetailsEquipeService {
    public Long ajouter_details(DetailsEquipe e);
    public List<DetailsEquipe> DetailsEquipeList();
    public void deleteDetailsEquipeById(Long DepartementId);
    public DetailsEquipe updateDetailsEquipe(DetailsEquipe detailsEquipe,
                                         Long DetailsEquipeId);
}
