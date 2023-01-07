package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Reclamation;

import java.util.List;

public interface ReclamationRepository extends JpaRepository<Reclamation,Long> {
    List<Reclamation> findAllByEtudiant(Etudiant e);
}
