package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.springg.entity.Universite;
import tn.esprit.springg.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,String> {


}
