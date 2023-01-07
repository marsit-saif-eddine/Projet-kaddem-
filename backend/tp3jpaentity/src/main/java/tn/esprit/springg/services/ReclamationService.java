package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Reclamation;
import tn.esprit.springg.repositories.EtudiantRepository;
import tn.esprit.springg.repositories.ReclamationRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@Slf4j
public class ReclamationService implements IReclamationService {
    @Autowired
    ReclamationRepository reclamationRepository;
    @Autowired
    EtudiantRepository etudiantRepository;
    @Override
    public Reclamation ajouterReclamation(Reclamation u) {
        return reclamationRepository.save(u);
    }

    @Transactional
    public List<Reclamation> reclamationsList() throws EntityNotFoundException {
        return reclamationRepository.findAll();
    }

    @Override
    public void deleteReclamation(Long idU) {
        reclamationRepository.deleteById(idU);

    }

    @Override
    public Reclamation updateReclamation(String idE,Reclamation u) {
        Etudiant e = etudiantRepository.findById(idE).get();
        u.setEtudiant(e);
        return reclamationRepository.save(u);
    }

    @Transactional
    public Reclamation AddandAffectReclamationToStudent(String idEtudiant, Reclamation r) {
        Etudiant etudiant = etudiantRepository.findById(idEtudiant).orElse(null);
        r.setEtudiant(etudiant);
        return reclamationRepository.save(r);
    }

    @Override
    public List<Reclamation> findAllBytudiant(String idE) {
        Etudiant e =etudiantRepository.findById(idE).get();
        return reclamationRepository.findAllByEtudiant(e);
    }

    @Override
    public Long numberreclamations() {
        return reclamationRepository.count();
    }
}
