package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.springg.entity.Universite;
import tn.esprit.springg.repositories.UniversiteRepository;

import java.util.List;

@Service
@Slf4j
public class UniversiteService implements IUniversiteService{
    @Autowired
    UniversiteRepository universiteRepository;

    @Override
    public Universite ajouterUniversite(Universite u) {
        return universiteRepository.save(u);
    }

    @Transactional
    public List<Universite> universitesList() {
        return universiteRepository.findAll();
    }

    @Override
    public void deleteUniversite(Long idU) {
        universiteRepository.deleteById(idU);

    }
    @Override
    public Universite updateUniversite(Universite u) {
        return universiteRepository.save(u);
    }
}
