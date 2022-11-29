package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Departement;

import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Universite;
import tn.esprit.springg.repositories.DepartementRepository;
import tn.esprit.springg.repositories.EtudiantRepository;
import tn.esprit.springg.repositories.UniversiteRepository;

import java.util.List;


@Service
@Slf4j

public class DepartementServiceImp implements IDepartementService{
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    DepartementRepository departementRepository;
    @Autowired
    EtudiantRepository etudiantRepository;
    @Autowired
    UniversiteRepository universiteRepository;

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
    public void deleteDepartementById(Long DepartementId)
    {
        departementRepository.deleteById(DepartementId);
    }


    @Override
    public Departement updateDepartement(Departement departement,
                                 Long DepartementId)
    {

        Departement conDB = departementRepository.findById(DepartementId).get();

        conDB.setIdDepart(conDB.getIdDepart());
        conDB.setNomDepart(departement.getNomDepart());
        conDB.setEtudiants(departement.getEtudiants());




        return departementRepository.save(conDB);
    }
    @Override
    @Transactional
    public void assignEtudiantToDepartement (Long EtudiantId, Long DepartementId) {
        Etudiant e = etudiantRepository.findById(EtudiantId).get();
        Departement d = departementRepository.findById(DepartementId).get();

         e.setDep(d);

    };

    @Override
    @Transactional
    public void assignUniversiteToDepartement(Long idUniversite, Long idDepartement) {
        Universite u = universiteRepository.findById(idUniversite).get();
        List<Departement> k = departementRepository.retrieveDepartementsById(idDepartement);

        u.setDep(k);



    };

    @Override
    public List<Departement> retrieveDepartementsByUniversite(Long idUniv) {
        Universite uni = universiteRepository.findById(idUniv).get();
        return uni.getDep();
    }
}
