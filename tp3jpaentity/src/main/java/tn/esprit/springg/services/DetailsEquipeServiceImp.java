package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.DetailsEquipe;
import tn.esprit.springg.repositories.DetailsEquipeRepository;

import java.util.List;


@Service
@Slf4j

public class DetailsEquipeServiceImp implements IDetailsEquipeService{
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    DetailsEquipeRepository detailsEquipeRepository;

    @Override
    public Long ajouter_details(DetailsEquipe e) {
        detailsEquipeRepository.save(e);
        log.info("Ajouter details");
        return e.getIdDetailEquipe();
    }
    @Override
    public List<DetailsEquipe> DetailsEquipeList()
    {
        return (List<DetailsEquipe>)
                detailsEquipeRepository.findAll();
    }

    @Override
    public void deleteDetailsEquipeById(Long DetailsEquipeId)
    {
        detailsEquipeRepository.deleteById(DetailsEquipeId);
    }


    @Override
    public DetailsEquipe updateDetailsEquipe(DetailsEquipe detailsEquipe,
                                         Long DetailsEquipeId)
    {

        DetailsEquipe conDB = detailsEquipeRepository.findById(DetailsEquipeId).get();

        conDB.setIdDetailEquipe(conDB.getIdDetailEquipe());
        conDB.setEquipe(detailsEquipe.getEquipe());
        conDB.setSalle(detailsEquipe.getSalle());
        conDB.setThematique(detailsEquipe.getThematique());





        return detailsEquipeRepository.save(conDB);
    }
}
