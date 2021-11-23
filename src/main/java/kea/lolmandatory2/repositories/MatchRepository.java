package kea.lolmandatory2.repositories;

import kea.lolmandatory2.models.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, String> {
}
