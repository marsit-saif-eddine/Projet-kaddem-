package tn.esprit.springg.services;

import tn.esprit.springg.entity.Partenaire;

import java.util.List;
import java.util.Optional;

public interface IPartenaireService {
    public Optional<Partenaire> findPartenaireById(Long idPart);
    public Partenaire updatePartenaire(Partenaire partenaire,
                                       Long idPart);

        public void deletePartenaireById(Long idPart);
    public List<Partenaire> Partenairelist();
    public Long ajouter_partenaire(Partenaire partenaire);
}
