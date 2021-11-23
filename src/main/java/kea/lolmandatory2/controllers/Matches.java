package kea.lolmandatory2.controllers;

import kea.lolmandatory2.exceptions.ResourceNotFoundException;
import kea.lolmandatory2.models.Match;
import kea.lolmandatory2.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Matches {

    @Autowired
    MatchRepository matches;

    @GetMapping("/api/matches")
    public Iterable<Match> getMatches() {
        return matches.findAll();
    }

    @GetMapping("/api/matches/{id}")
    public Match getArtistByID(@PathVariable String id) {
        return matches.findById(id).orElseThrow(() -> (new ResourceNotFoundException("Match with id: " + id + " does not exist")));
    }
}
