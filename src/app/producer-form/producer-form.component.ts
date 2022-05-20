import { Component, OnInit } from '@angular/core';
import { Producer } from '../producer';
import { FormGroup, FormControl } from '@angular/forms';
import { ProducerService } from '../producer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producer-form',
  templateUrl: './producer-form.component.html',
  styleUrls: ['./producer-form.component.scss'],
})
export class ProducerFormComponent implements OnInit {
  producerForm: FormGroup;
  isNewContext = false;
  producer: any;
  id: Number = 0;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private producerService: ProducerService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.producerForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      fundationDate: new FormControl(''),
      image: new FormControl(''),
    });

    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.isNewContext = true;
      return;
    } else {
      this.producerService.getProducer(id).subscribe((producer) => {
        this.producer = producer;
        this.setFormValues(producer);
      });
    }
    this.id = id;
  }

  submitted = false;

  // producer = new Producer(4,'','','');

  onSubmit() {
    this.submitted = true;
  }

  setFormValues(producer: any) {
    this.producerForm.controls['name'].setValue(producer.name);
    this.producerForm.controls['image'].setValue(producer.image);
    this.producerForm.controls['id'].setValue(producer.id);
    this.producerForm.controls['fundationDate'].setValue(
      this.producer.fundationDate != null
        ? new Date(this.producer.fundationDate).toISOString().substring(0, 10)
        : this.producer.date
    );
  }

  goBack() {
    this.location.back();
  }

  save() {
    console.log(this.producerForm.getRawValue());
    if (!this.producerForm.valid) return;
    if (!this.isNewContext) {
      let request = {
        ...this.producerForm.getRawValue(),
      };
      this.producerService
        .updateProducer(request, this.id)
        .subscribe(() => this.goBack());
    } else {
      let request = {
        ...this.producerForm.getRawValue(),
      };
      console.log(request);
      this.producerService.addProducer(request).subscribe(() => this.goBack());
    }
  }
  ngOnInit(): void {}
}
