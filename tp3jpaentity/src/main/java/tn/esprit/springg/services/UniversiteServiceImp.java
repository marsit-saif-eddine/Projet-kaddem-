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

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j

public class UniversiteServiceImp implements IUniversiteService{

    @Autowired
    UniversiteRepository universiteRepository;
    @Autowired
    DepartementRepository departementRepository;

    @Override
    public Long ajouter_universite(Universite u) {
        universiteRepository.save(u);
        log.info("Ajouter Universite");
        return u.getIdUniv();
    }
    @Override
    public List<Universite> UniversiteList()
    {
        return (List<Universite>)
                universiteRepository.findAll();
    }

    @Override
    public void deleteUniversiteById(Long UniversiteId)
    {
        universiteRepository.deleteById(UniversiteId);
    }


    @Override
    public Universite updateUniversite(Universite universite,
                                 Long UniversiteId)
    {

        Universite conDB = universiteRepository.findById(UniversiteId).get();

        conDB.setDep(universite.getDep());
        conDB.setIdUniv(conDB.getIdUniv());
        conDB.setNomUniv(universite.getNomUniv());



        return universiteRepository.save(conDB);
    }

}
