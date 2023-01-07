package tn.esprit.springg.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;


@Getter
@Setter
@Entity
@Table( name ="Departement")
@NoArgsConstructor

public class Departement implements Serializable {
    @Id
    @Column(name="idDepart")
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idDepart;

    private String nomDepart;
    private Integer numDepart;
    private String emailDepart;
    private String adresse;
    private String codepostal;

    @OneToMany(mappedBy="dep")
    private List<Etudiant> etudiants;

    /*@ManyToOne
    private Partenaire partenaire*/





}