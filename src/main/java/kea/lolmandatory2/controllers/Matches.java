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

    @GetMapping("/api/matches/{matchId}")
    public Match getArtistByID(@PathVariable String matchId) {
        return matches.findById(matchId).orElseThrow(() -> (new ResourceNotFoundException("Match with id: " + matchId + " does not exist")));
    }

    @PostMapping("/api/matches")
    public Match addMatch(@RequestBody Match newMatch) {
        return matches.save(newMatch);
    }

    @PutMapping("/api/matches/{matchId}")
    public String updateMatchById(@PathVariable String matchId, @RequestBody Match matchToUpdateWith) {
        if (matches.existsById(matchId)) {
            matchToUpdateWith.setId(matchId);
            matches.save(matchToUpdateWith);
            return "Match is now updated";
        } else return "Match id is not found";
    }

    @PatchMapping("/api/matches/{matchId}")
    public String patchMatchById(@PathVariable String matchId, @RequestBody Match newMatch) {
        return matches.findById(matchId).map(foundMatch -> {
            if (newMatch.getSummoners() == null) foundMatch.setSummoners(newMatch.getSummoners());
            if (newMatch.getId() == null) foundMatch.setId(newMatch.getId());
            matches.save(foundMatch);
            return "Match Updated";
        }).orElseThrow(() -> (new ResourceNotFoundException("Match with id: " + matchId + "Was not updated")));
    }

    @DeleteMapping("api/matches/{matchId}")
    public String deleteMatchById(@PathVariable String matchId) {
        matches.deleteById(matchId);
        return "Match with id: " + matchId + "Has been deleted";
    }


}
