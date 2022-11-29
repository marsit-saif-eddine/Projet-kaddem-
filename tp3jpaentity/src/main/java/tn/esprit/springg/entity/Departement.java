package tn.esprit.springg.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
@Entity
@Table( name ="Departemnt")
public class Departement implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long idDepart;

    private String nomDepart;

    @OneToMany(mappedBy="dep")
    private List<Etudiant> etudiants;





}