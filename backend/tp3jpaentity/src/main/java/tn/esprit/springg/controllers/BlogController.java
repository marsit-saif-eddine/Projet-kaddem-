package tn.esprit.springg.controllers;


import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.springg.domaine.Response;
import tn.esprit.springg.entity.Blog;
import javax.servlet.ServletContext;
import tn.esprit.springg.entity.Contrat;
import tn.esprit.springg.repositories.BlogRepository;
import tn.esprit.springg.services.IBlog;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;


@RestController
@RequestMapping("/Blog")
public class BlogController {

    @Autowired
    IBlog iBlogservice ;

    @Autowired
    BlogRepository repository;

    @Autowired  ServletContext context;


   // @PostMapping("/addblog")
    @ResponseBody
    public void addblog(@RequestBody Blog blog){
     //   iBlogservice.ajouterblog(blog);

    }


    @PostMapping("/addblog")
    public ResponseEntity<Response> createArticle (@RequestParam("file") MultipartFile file,
                                                   @RequestParam("blog") String blog) throws JsonParseException, JsonMappingException, Exception
    {
        System.out.println("Ok .............");
        Blog arti = new ObjectMapper().readValue(blog, Blog.class);
        boolean isExit = new File(context.getRealPath("/Images/")).exists();
        if (!isExit)
        {
            new File (context.getRealPath("/Images/")).mkdir();
            System.out.println("mk dir.............");
        }
        String filename = file.getOriginalFilename();
        String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
        File serverFile = new File (context.getRealPath("/Images/"+File.separator+newFileName));
        try
        {
            System.out.println("Image");
            FileUtils.writeByteArrayToFile(serverFile,file.getBytes());

        }catch(Exception e) {
            e.printStackTrace();
        }


        arti.setImage(newFileName);
        Blog art = repository.save(arti);
        if (art != null)
        {
            return new ResponseEntity<Response>(new Response (""),HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<Response>(new Response ("Article not saved"),HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path="/Imgarticles/{id}")
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
        Blog Article   = repository.findById(id).get();
        return Files.readAllBytes(Paths.get(context.getRealPath("/Images/")+Article.getImage()));
    }



    @GetMapping("/listblog")
    @ResponseBody
    public List<Blog> listblog(){
        return iBlogservice.blogList();

    }

    @DeleteMapping("/deleteblog/{id}")
    @ResponseBody
    public void deleteblog(@PathVariable("id") Long blogId){
        iBlogservice.deleteblog(blogId);



    }

    @PutMapping("/updateBlog/{id}")
    @ResponseBody
    public Blog updateBlog(@RequestBody Blog blog, @PathVariable("id") Long blogID)
    {
    return  iBlogservice.updateblog(blog,blogID) ;
    }


    @GetMapping("/list/{id}")
    @ResponseBody
    public Blog getbyid(@PathVariable("id") Long idb) {
        return iBlogservice.affblogbyid(idb)  ;
    }
}
