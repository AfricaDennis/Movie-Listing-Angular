import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../actor';
import { ActorService } from '../actor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss']
})
export class ActorFormComponent implements OnInit{

  actorForm: FormGroup;
  actor:any;
  isNewContext = false;
  id: Number = 0;

  constructor(private location: Location, private route: ActivatedRoute, private actorService: ActorService) { 
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.actorForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      birthDate: new FormControl(''),
      image: new FormControl('')
    });
    
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.isNewContext = true;
      return;
    } else {
      this.actorService.getActor(id).subscribe((actor) => {
        this.actor = actor;
        this.setFormValues(actor);
      });
    }
    this.id = id;  
  }


  submitted = false;

  // actor = new Actor(4, '', '', '', 4, '');

  onSubmit() {
    this.submitted = true;
  }

  setFormValues(actor: any){
    this.actorForm.controls['name'].setValue(actor.name);
    this.actorForm.controls['image'].setValue(actor.image);
    this.actorForm.controls['id'].setValue(actor.id);
    this.actorForm.controls['birthDate'].setValue(
      this.actor.birthDate != null
        ? new Date(this.actor.birthDate).toISOString().substring(0,10)
        : this.actor.date
    );
  }
  goBack(){
    this.location.back();
  }


  save(){
    console.log(this.actorForm.getRawValue())
    if(!this.actorForm.valid) return;
    if (!this.isNewContext) {
      let request = {
        ...this.actorForm.getRawValue()
      };
      this.actorService.updateActor(request, this.id).subscribe(() => this.goBack());
    }
    else{
      let request = {
        ...this.actorForm.getRawValue()
      };
      console.log(request);
      this.actorService.addActor(request).subscribe(() => this.goBack());
    }
  }


  ngOnInit(): void {
  }



}
