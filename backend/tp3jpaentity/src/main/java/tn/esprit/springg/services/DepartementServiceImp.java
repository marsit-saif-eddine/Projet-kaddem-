package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.springg.entity.Departement;

import tn.esprit.springg.repositories.DepartementRepository;

import java.util.List;
import java.util.Optional;


@Service
@Slf4j

public class DepartementServiceImp  implements IDepartementService{
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")

    @Autowired
    DepartementRepository departementRepository;


@Override

    public Long ajouter_departement(Departement d) {
        departementRepository.save(d);
        log.info("Ajouter Departement");
        return d.getIdDepart();
    }

    @Override

    public List<Departement> DepartementList()
    {
        return (List<Departement>)
                departementRepository.findAll();
    }

    @Override


    public void deleteDepartementById(Long idDepart)
    {

        departementRepository.deleteById(idDepart);
    }


    public Departement updateDepartement(Departement departement,Long idDepart) {

    Departement departement1=departementRepository.findById(idDepart).orElse(null);
    assert departement1!=null;
    departement1.setEmailDepart(departement.getEmailDepart());
    departement1.setNomDepart(departement.getNomDepart());
    departement1.setNumDepart(departement.getNumDepart());
    departement1.setAdresse(departement.getAdresse());
    departement1.setCodepostal(departement.getCodepostal());

        return departementRepository.save(departement1);
    }



    @Override
    public Optional<Departement> findDepartementById(Long idDepart)
    {

        return departementRepository.findById(idDepart);
    }
}
