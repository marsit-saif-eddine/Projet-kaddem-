package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Niveau;
import tn.esprit.springg.repositories.EquipeRepository;
import tn.esprit.springg.repositories.EtudiantRepository;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Slf4j

public class EquipeServiceImp implements IEquipeService{

    @Autowired
    EquipeRepository equipeRepository;

    @Override
    public Long ajouter_equipe(Equipe e) {
        equipeRepository.save(e);
        log.info("Ajouter Etudiant");
        return e.getIdEquipe();
    }
    @Override
    public List<Equipe> EquipeList()
    {
        return (List<Equipe>)
                equipeRepository.findAll();
    }

    @Override
    public void deleteEquipeById(Long EquipeId)
    {
        equipeRepository.deleteById(EquipeId);
    }


    @Override
    public Equipe updateEquipe(Equipe equipe,
                                 Long EquipeId)
    {

        Equipe conDB = equipeRepository.findById(EquipeId).get();

        conDB.setIdEquipe(conDB.getIdEquipe());
        conDB.setEtud(equipe.getEtud());
        conDB.setNomEquipe(equipe.getNomEquipe());
        conDB.setNiv(equipe.getNiv());
        conDB.setDetails(equipe.getDetails());




        return equipeRepository.save(conDB);
    }

    @Scheduled(cron="0 0 13 * * *")
    @Override
    public void faireEvoluerEquipes() {
        Instant an = Instant.now().minus(365, ChronoUnit.DAYS);
        Date date = java.sql.Date.from(an);

        List<Equipe> ListEquipes = equipeRepository.findAll();
        List<Equipe> list = new ArrayList<Equipe>();

        for (Equipe equipe: ListEquipes){
            if(equipe.getEtud().size()>2){
                for(Etudiant etudiant :equipe.getEtud()){
                    for (Contrat contrat:etudiant.getCont()){
                        if ((contrat.getArchive()==false) && (contrat.getDateDebutContrat().before(date))){
                            if(!list.contains(equipe)){
                                list.add(equipe);
                            }
                        }
                    }
                }
            }
        }
        for (Equipe e:list){
            if(e.getNiv().equals(Niveau.JUNIOR)){
                e.setNiv(Niveau.SENIOR);
                equipeRepository.save(e);
            } else if (e.getNiv().equals(Niveau.SENIOR)) {
                e.setNiv(Niveau.EXPERT);
                equipeRepository.save(e);
            }
        }

    }
}
