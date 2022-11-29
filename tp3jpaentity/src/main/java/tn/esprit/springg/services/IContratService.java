package tn.esprit.springg.services;

import tn.esprit.springg.entity.Contrat;

import java.util.Date;
import java.util.List;


public interface IContratService {
    public Long ajouter_contrat(Contrat c);

    public List<Contrat> ContratList();
    public void deleteContratById(Long contratId);
    public Contrat updateContrat(Contrat contrat,
                                Long contratId);
    public Contrat affectContratToEtudiant (Long idContrat, String nomE,String prenomE);
    public float getChiffreAffaireEntreDeuxDate(Date startDate, Date endDate);
    public Integer nombreContratsValides(Date startDate, Date endDate);

    public void retrieveAndUpdateStatusContrat();
}
