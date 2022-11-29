package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.Universite;

@Repository
public interface UniversiteRepository extends JpaRepository<Universite,Long> {

}
