package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.springg.entity.DetailsEquipe;

@Repository
public interface DetailsEquipeRepository extends JpaRepository<DetailsEquipe,Long> {
}
