package tn.esprit.springg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springg.entity.Blog;

public interface BlogRepository  extends JpaRepository<Blog,Long> {
}
