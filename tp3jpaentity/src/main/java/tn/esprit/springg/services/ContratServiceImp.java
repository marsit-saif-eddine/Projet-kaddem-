package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.repositories.ContratRepository;
import tn.esprit.springg.repositories.EtudiantRepository;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
@Slf4j

public class ContratServiceImp implements IContratService{

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    ContratRepository contratRepository;

    @Autowired
    EtudiantRepository etudiantRepository;

    @Override
    public Long ajouter_contrat(Contrat c) {
        contratRepository.save(c);
        log.info("Ajouter Contrat");
        return c.getIdContrat();
    }
    @Override
    public List<Contrat> ContratList()
    {
        return (List<Contrat>)
                contratRepository.findAll();
    }

    @Override
    public void deleteContratById(Long contratId)
    {
        contratRepository.deleteById(contratId);
    }


    @Override
    public Contrat updateContrat(Contrat contrat,
                     Long contratId)
    {

        Contrat conDB = contratRepository.findById(contratId).get();

        conDB.setMontantContrat(contrat.getMontantContrat());
        conDB.setIdContrat(conDB.getIdContrat());
        conDB.setDateDebutContrat(contrat.getDateDebutContrat());
        conDB.setDateFinContrat(contrat.getDateFinContrat());
        conDB.setArchive(contrat.getArchive());
        conDB.setEtud(contrat.getEtud());
        conDB.setSpec(contrat.getSpec());




        return contratRepository.save(conDB);
    }
    @Transactional
    public Contrat affectContratToEtudiant (Long idContrat, String nomE,String prenomE){
        Etudiant et = etudiantRepository.retrieveEtudiantByNameAndPrenom(nomE,prenomE);
        Contrat con = contratRepository.findById(idContrat).get();

        if (et != null) {
            int nombreContratActif = 0;
            for (Contrat contrat : et.getCont()) {
                if (con.getArchive() == true)
                    nombreContratActif++;
            }
            if (nombreContratActif < 5) {
                con.setEtud(et);
                con.setArchive(true);
                updateContrat(con,idContrat);
            }
        }
        return con ;
          }

    @Override
    public float getChiffreAffaireEntreDeuxDate(Date startDate, Date endDate) {
        return contratRepository.getcontratmontantBetween(startDate,endDate);
    }

    @Override
    public Integer nombreContratsValides(Date startDate, Date endDate) {
        return contratRepository.nbContratsValides(startDate,endDate);
    }

    @Override
    @Scheduled(cron = "0 0 13 * * *")
    public void retrieveAndUpdateStatusContrat() {
        List<Contrat> c = contratRepository.findAll() ;
        Date date = Calendar.getInstance().getTime();

        for (Contrat contrat:c)
        {
            long diffMs = contrat.getDateFinContrat().getTime() - date.getTime();
            float y = (float)diffMs/1000/60/60/24 ;
            if(y<=15)
            {
                System.out.println("Date fin de ce contrat est" +contrat.getDateFinContrat());
                System.out.println("Specialité est" +contrat.getSpec());
                System.out.println("L'etudiant concerne est " +contrat.getEtud());
                contrat.setArchive(true);
                contratRepository.save(contrat);
            }
        }

    }


}
