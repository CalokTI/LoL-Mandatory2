package kea.lolmandatory2.controllers;

import kea.lolmandatory2.exceptions.ResourceNotFoundException;
import kea.lolmandatory2.models.Match;
import kea.lolmandatory2.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Matches {

    @Autowired
    MatchRepository matches;

    @GetMapping("/api/matches")
    public List<Match> getMatches() {
        return matches.findAll();
    }

    @GetMapping("/api/matches/{id}")
    public Match getArtistByID(@PathVariable String id) {
        return matches.findById(id).orElseThrow(() -> (new ResourceNotFoundException("Match with id: " + id + " does not exist")));
    }

    @PostMapping("/api/matches")
    public Match addMatch(@RequestBody Match newMatch) {
        return matches.save(newMatch);
    }

    @PutMapping("/api/matches/{id}")
    public String updateMatchById(@PathVariable String id, @RequestBody Match matchToUpdateWith) {
        if (matches.existsById(id)) {
            matchToUpdateWith.setId(id);
            matches.save(matchToUpdateWith);
            return "Match is now updated";
        } else return "Match id is not found";
    }

    @PatchMapping("/api/matches/{id}")
    public String patchMatchById(@PathVariable String id, @RequestBody Match newMatch) {
        return matches.findById(id).map(foundMatch -> {
            if (newMatch.getSummoners() == null) foundMatch.setSummoners(newMatch.getSummoners());
            if (newMatch.getId() == null) foundMatch.setId(newMatch.getId());
            matches.save(foundMatch);
            return "Match Updated";
        }).orElseThrow(() -> (new ResourceNotFoundException("Match with id: " + id + "Was not updated")));
    }

    @DeleteMapping("api/matches/{id}")
    public String deleteMatchById(@PathVariable String id) {
        matches.deleteById(id);
        return "Match with id: " + id + "Has been deleted";
    }


}
