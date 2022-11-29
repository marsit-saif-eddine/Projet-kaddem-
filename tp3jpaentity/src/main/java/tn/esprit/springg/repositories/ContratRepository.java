package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.springg.entity.Contrat;

import java.util.Date;


@Repository
public interface ContratRepository extends JpaRepository<Contrat , Long> {
    @Query("select   sum(montantContrat)   from Contrat   where dateDebutContrat >= ?1 and dateFinContrat <= ?2 and archive = false  group by spec")
    float getcontratmontantBetween(Date dateDebut , Date dateFin);

    @Query("select   count(idContrat)  from Contrat   where dateDebutContrat >= ?1 and dateFinContrat <= ?2 and archive = false")
    Integer nbContratsValides(Date dateDebut , Date dateFin);

}
