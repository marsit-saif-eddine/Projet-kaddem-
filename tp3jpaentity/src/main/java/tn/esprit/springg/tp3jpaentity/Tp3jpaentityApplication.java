package tn.esprit.springg.tp3jpaentity;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EntityScan(basePackages = {"tn.esprit.springg.entity"})
@ComponentScan(basePackages = {"tn.esprit.springg.controllers","tn.esprit.springg.services"})
@EnableJpaRepositories(basePackages = {"tn.esprit.springg.repositories"})
@Slf4j
@EnableTransactionManagement
public class Tp3jpaentityApplication {

    public static void main(String[] args) {
        log.info("Hello");
        SpringApplication.run(Tp3jpaentityApplication.class, args);
    }

}
