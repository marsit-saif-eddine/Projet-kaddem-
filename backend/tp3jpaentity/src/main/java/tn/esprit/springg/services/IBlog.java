package tn.esprit.springg.services;

import tn.esprit.springg.entity.Blog;
import tn.esprit.springg.entity.Contrat;

import java.util.List;

public interface IBlog {

    public void ajouterblog(Blog c);

    public List<Blog> blogList();
    public void deleteblog(Long blogID);

    public Blog updateblog(Blog blog,Long blogId);

    public Blog affblogbyid (Long idContrat) ;

}
