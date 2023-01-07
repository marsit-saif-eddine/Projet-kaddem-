package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Service;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.DetailsEquipe;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.repositories.DetailsEquipeRepository;
import tn.esprit.springg.repositories.EquipeRepository;

import java.util.List;


@Service
@Slf4j

public class DetailsEquipeServiceImp implements IDetailsEquipeService{
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    DetailsEquipeRepository detailsEquipeRepository;
    @Autowired
    EquipeRepository equipeRepository ;


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


    @Override
    public DetailsEquipe retrieveDetailEquipe(Long idDetailEquipe) {
        return detailsEquipeRepository.findById(idDetailEquipe).get();
    }

    public Equipe assignEquipeToDetail(Long idEquipe, Long idDetailEquipe){

        Equipe equipe =equipeRepository.findById(idEquipe).orElse(null);
        DetailsEquipe detailEquipe=detailsEquipeRepository.findById(idDetailEquipe).orElse(null);


        detailEquipe.setEquipe(equipe);

        equipe.setDetails(detailEquipe);
        //equipeRepository.save(equipe);
       detailsEquipeRepository.saveAndFlush(detailEquipe);

        return  equipe;

    }
}
