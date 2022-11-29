package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;

import java.util.List;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {
    @Query("SELECT e FROM Etudiant e WHERE (e.nomE =:nomE and e.prenomE=:prenomE)")
    Etudiant retrieveEtudiantByNameAndPrenom(@Param("nomE") String nomE,@Param("prenomE") String prenomE);
}
