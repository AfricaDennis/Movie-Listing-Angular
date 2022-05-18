import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {

  @Input() actor: any;
  @Output() onActorSelected = new EventEmitter<number>();
  @Output() onActorDeleted = new EventEmitter<number>();
  selectedActor?: ActorCardComponent; 
  actors: Actor[] = [];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {

  }

  onSelect(actor: Actor): void{
    this.onActorSelected.next(actor.id);
  }


  delete(actor: Actor): void{
    this.actors = this.actors.filter(a => a != actor);
    this.actorService.deleteActor(actor.id).subscribe();
    this.onActorDeleted.emit(actor.id);
  }

}
