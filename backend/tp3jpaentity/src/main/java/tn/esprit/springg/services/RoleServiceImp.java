package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springg.entity.Role;
import tn.esprit.springg.repositories.RoleRepository;


@Service
@Slf4j
public class RoleServiceImp implements IRoleService {
    @Autowired
    RoleRepository roleRepository;

    public Role createNewRole(Role role) {
        return roleRepository.save(role);
    }
}
