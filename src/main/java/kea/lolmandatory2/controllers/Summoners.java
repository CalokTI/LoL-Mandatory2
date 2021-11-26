package kea.lolmandatory2.controllers;

import kea.lolmandatory2.exceptions.ResourceNotFoundException;
import kea.lolmandatory2.models.Summoner;
import kea.lolmandatory2.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Summoners {

    @Autowired
    SummonerRepository summoners;

    @GetMapping("/api/summoners")
    public List<Summoner> getSummoners() {
        return summoners.findAll();
    }

    @GetMapping("/api/summoners/{summonerId}")
    public Summoner getSummonerById(@PathVariable String summonerId) {
        return summoners.findById(summonerId)
                .orElseThrow(() -> (new ResourceNotFoundException("Couldn't find any Summoner with id: " + summonerId)));
    }

    @PostMapping("/api/summoners")
    public Summoner addSummoner(@RequestBody Summoner newSummoner) {
        return summoners.save(newSummoner);
    }

    @PutMapping("/api/summoners/{id}")
    public String updateMatchById(@PathVariable String id, @RequestBody Summoner summonerToUpdateWith) {
        if (summoners.existsById(id)) {
            summonerToUpdateWith.setId(id);
            summoners.save(summonerToUpdateWith);
            return "Summoner is now updated";
        } else return "Summoner id is not found";
    }

    @PatchMapping("/api/summoners/{id}")
    public String patchMatchById(@PathVariable String id, @RequestBody Summoner newSummoner) {
        return summoners.findById(id).map(foundSummoner -> {
            if (newSummoner.getAccountId() == null) foundSummoner.setAccountId(newSummoner.getAccountId());
            if (newSummoner.getSummonerLevel() == -1) foundSummoner.setSummonerLevel(newSummoner.getSummonerLevel());
            if (newSummoner.getMatches() == null) foundSummoner.setMatches(newSummoner.getMatches());
            if (newSummoner.getFriendly() == -1) foundSummoner.setFriendly(newSummoner.getFriendly());
            if (newSummoner.getSalty() == -1) foundSummoner.setSalty(newSummoner.getSalty());
            if (newSummoner.getProfileIconId() == -1) foundSummoner.setProfileIconId(newSummoner.getProfileIconId());
            if (newSummoner.getId() == null) foundSummoner.setId(newSummoner.getId());
            if (newSummoner.getPuuid() == null) foundSummoner.setPuuid(newSummoner.getPuuid());
            summoners.save(foundSummoner);
            return "Summoner Updated";
        }).orElseThrow(() -> (new ResourceNotFoundException("Summoner with id: " + id + "Was not updated")));
    }

    @DeleteMapping("api/summoners/{id}")
    public String deleteMatchById(@PathVariable String id) {
        summoners.deleteById(id);
        return "Summoner with id: " + id + "Has been deleted";
    }


}
