import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit, OnChanges {

  @Input() actorId?: number;

  actor: Actor | undefined;
  previousActor: Actor | undefined;

  constructor(private actorService: ActorService, private route: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['actorId'].currentValue) {
      this.getActor(changes['actorId'].currentValue).subscribe(actor => {
        this.actor = actor;
      });
    }

    if (changes['actorId'].previousValue){
      this.getActor(changes['actorId'].previousValue).subscribe(actor => {
        this.previousActor = actor;
      });
    }
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getActor (id: number): Observable<Actor | undefined> {
    return this.actorService.getActor(id).pipe(map((actor: any) => {
      let date = new Date(actor.birthDate);
      actor.birthDate = date.toLocaleDateString();
      return actor;
    }));
  }

  goBack(): void {
    this.actor = this.previousActor;
  }

  closeDetail() {
    this.actor = undefined;
  }

  getDetails(): void{
  }




}


