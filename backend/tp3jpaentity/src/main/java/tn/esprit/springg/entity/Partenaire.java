package tn.esprit.springg.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table( name ="Partenaire")

public class Partenaire implements Serializable{


        @Id
        @Column(name="idPart")
        @GeneratedValue(strategy= GenerationType.IDENTITY)
        private Long idPart;

        private String nomPart;
        private String datedc;
        private String emailPart;
        private String datefc;

     /*  @OneToMany(mappedBy="Partenaire")
        private List<Departement> departement;*/






    }

