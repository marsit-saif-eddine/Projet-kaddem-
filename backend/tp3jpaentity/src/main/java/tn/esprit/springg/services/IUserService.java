package tn.esprit.springg.services;

import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.entity.User;

public interface IUserService {
    public void initRoleAndUser();
    public User registerNewUser(Etudiant e);
    public String getEncodedPassword(String password);
}
