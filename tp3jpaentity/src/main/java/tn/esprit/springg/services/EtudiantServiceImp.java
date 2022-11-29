package tn.esprit.springg.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.entity.Departement;
import tn.esprit.springg.entity.Equipe;
import tn.esprit.springg.entity.Etudiant;
import tn.esprit.springg.repositories.ContratRepository;
import tn.esprit.springg.repositories.DepartementRepository;
import tn.esprit.springg.repositories.EquipeRepository;
import tn.esprit.springg.repositories.EtudiantRepository;

import java.util.List;

@Service
@Slf4j

public class EtudiantServiceImp implements IEtudiantService{

    @Autowired
    EtudiantRepository etudiantRepository;

    @Autowired
    EquipeRepository equipeRepository;

    @Autowired
    ContratRepository contratRepository;

    @Autowired
    DepartementRepository departementRepository;


    @Override
    public Long ajouter_etudiant(Etudiant e) {
        etudiantRepository.save(e);
        log.info("Ajouter Etudiant");
        return e.getIdEtudiant();
    }
    @Override
    public List<Etudiant> EtudiantList()
    {
        return etudiantRepository.findAll();

    }

    @Override
    public void deleteEtudiantById(Long EtudiantId)
    {
        etudiantRepository.deleteById(EtudiantId);
    }


    @Override
    public Etudiant updateEtudiant(Etudiant etudiant,
                                   Long EtudiantId)
    {

        Etudiant conDB = etudiantRepository.findById(EtudiantId).get();
        conDB.setIdEtudiant(etudiant.getIdEtudiant());
        conDB.setCont(etudiant.getCont());
        conDB.setDep(etudiant.getDep());
        conDB.setD(etudiant.getD());
        conDB.setEquip(etudiant.getEquip());
        conDB.setIdEtudiant(conDB.getIdEtudiant());
        conDB.setNomE(etudiant.getNomE());
        conDB.setPrenomE(etudiant.getPrenomE());
        conDB.setOpt(etudiant.getOpt());




        return etudiantRepository.save(conDB);
    }
   @Transactional
    public Etudiant addAndAssignEtudiantToEquipeAndContract(Etudiant e, Long idContrat,
                                                     Long idEquipe){
        Equipe eq = equipeRepository.findById(idEquipe).orElse(null);
        Contrat con = contratRepository.findById(idContrat).orElse(null);

        eq.getEtud().add(e);
        con.setEtud(e);


        return e;
    }



    @Override
    public List<Etudiant> getEtudiantsByDepartement(long idDepart) {
        Departement d = departementRepository.findById(idDepart).get();
        return d.getEtudiants();
    }
}
