import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.less']
})
export class ProfileEditorComponent {

  profileForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthdate: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }

}
