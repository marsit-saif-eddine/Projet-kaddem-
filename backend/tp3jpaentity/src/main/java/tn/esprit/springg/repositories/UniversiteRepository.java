package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.Universite;

import java.util.List;

public interface UniversiteRepository extends JpaRepository<Universite,Long> {
}
