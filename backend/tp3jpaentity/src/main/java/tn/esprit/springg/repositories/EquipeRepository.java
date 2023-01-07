package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;

import java.util.List;

@Repository
public interface EquipeRepository extends JpaRepository<Equipe,Long> {

}
