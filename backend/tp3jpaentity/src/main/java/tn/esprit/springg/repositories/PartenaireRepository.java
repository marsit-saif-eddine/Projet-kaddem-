package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springg.entity.Partenaire;

public interface PartenaireRepository extends JpaRepository<Partenaire,Long> {
}
