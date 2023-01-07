package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.springg.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,String> {
}
