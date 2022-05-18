import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
// import { ACTORS } from '../mock-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  // actors = ACTORS;
  actors: Actor[] = [];
  selectedActor ?: number;

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getActors();
  }

  onSelect(event: any):void {
    this.selectedActor = event;
  }

  getActors(): void {
    this.actorService.getActors().subscribe(actors => {
      this.actors = actors
      console.log(this.actors);
    })
  }


  delete(actorId: number): void {
    this.actorService.deleteActor(actorId).subscribe();
    this.actors = this.actors.filter((f) => f.id != actorId);
  }

}
