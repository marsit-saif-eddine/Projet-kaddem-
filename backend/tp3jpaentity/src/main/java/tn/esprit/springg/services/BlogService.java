package tn.esprit.springg.services;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springg.entity.Blog;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.repositories.BlogRepository;

import java.util.List;

@Service
@Slf4j
public class BlogService implements IBlog {
    @Autowired
    BlogRepository blogRepository ;

    @Override
    public void ajouterblog(Blog c) {
       blogRepository.save(c) ;
    }

    @Override
    public List<Blog> blogList() {
     return blogRepository.findAll() ;
    }

    @Override
    public void deleteblog(Long blogID) {
     blogRepository.deleteById(blogID);


    }

    @Override
    public Blog updateblog(Blog blog, Long blogId) {
        Blog b = blogRepository.findById(blogId).get() ;
        b.setIdBlog(blog.getIdBlog());
        b.setTitre(blog.getTitre());
        b.setDescription(blog.getDescription());
        b.setImage(blog.getImage());

        return blogRepository.save(b);
    }

    @Override
    public Blog affblogbyid(Long idb) {
       return blogRepository.findById(idb).get() ;

    }
}
