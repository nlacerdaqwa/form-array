import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  formJson: string = ''; 

  constructor(private fb: FormBuilder) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tags:new FormArray([])
    })

    this.form.valueChanges.subscribe(value => {
      this.formJson = JSON.stringify(value, null, 2); // Pretty-print JSON
    });
  }

  // Getter que retorna o array de tags
  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  // Adiciona um novo FormControl no array "tags"
  addTag(){
    this.tags.push(this.fb.control(''));
  }

  addRepo(){
    console.log(this.form);
  }

  removeTag(index:number){
    this.tags.removeAt(index);
  }

}
