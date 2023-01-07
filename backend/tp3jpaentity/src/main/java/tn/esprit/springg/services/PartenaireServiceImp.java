package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.Partenaire;
import tn.esprit.springg.repositories.DepartementRepository;
import tn.esprit.springg.repositories.PartenaireRepository;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class PartenaireServiceImp implements IPartenaireService {
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")

    @Autowired
    PartenaireRepository partenaireRepository;





    public Long ajouter_partenaire(Partenaire p) {
        partenaireRepository.save(p);
        log.info("Ajouter partenaire");
        return p.getIdPart();
    }

    public List<Partenaire> Partenairelist()
    {
        return (List<Partenaire>)
                partenaireRepository.findAll();
    }


    public void deletePartenaireById(Long idPart)
    {

        partenaireRepository.deleteById(idPart);
    }
    public Partenaire updatePartenaire(Partenaire partenaire,Long idPart) {

        Partenaire partenaire1=partenaireRepository.findById(idPart).orElse(null);
        assert partenaire1!=null;
        partenaire1.setEmailPart(partenaire.getEmailPart());
        partenaire1.setNomPart(partenaire.getNomPart());
        partenaire1.setDatedc(partenaire.getDatedc());
        partenaire1.setDatefc(partenaire.getDatefc());

        return partenaireRepository.save(partenaire1);
    }


    public Optional<Partenaire> findPartenaireById(Long idPart)
    {

        return partenaireRepository.findById(idPart);
    }
}

