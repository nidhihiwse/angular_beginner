import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  regForm! : FormGroup;

  constructor(private _fb : FormBuilder) { 
    const sum = "nfgf";
    let jkkj:any;
    this.regForm;
  }


  // for dynamic control
  ngOnInit(): void {
    // this.regForm = new FormGroup({
    //   id : new FormControl(),
    //   fname : new FormControl(),
    //   lname : new FormControl(),
    //   email : new FormControl(),
    //   mobileno : new FormControl(),
    // });


    // this.regForm = this._fb.group({
    //     id : new FormControl(),
    //     fname : new FormControl("Nidhi"),
    //     lname : new FormControl(),
    //     email : new FormControl(),
    //     mobileno : new FormControl(),    
    // });

  
    //correct way
    this.regForm = this._fb.group({
        id : [''],
        fname : ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])], //Validators.compose // fast excecution // checks first only then leave
        lname : ['', [Validators.required,Validators.minLength(10)]],
        email : [''],
        mobileno : ['79989']   
    });
  
    // this.regForm.get('fname').valueChanges.subscribe(fna => {
    //   console.log("fname changed" + fna);
    // });

    this.regForm.valueChanges.subscribe(fdata => {
      console.log("fname changed" + fdata);
    });

    this.regForm.statusChanges.subscribe(fdata => {
      console.log("status" + fdata);
    });
  }

  register(formData: FormGroup) {
    console.log(formData.value);
    console.log(formData.value.fname);
    // console.log(this.regForm.get('fname').value);
    // console.log(formData.controls);
    console.log(formData.status); // VALID or INVALID or pending or disabled
    // console.log(this.regForm.get('fname').value);
  }

  reset() {
    // this.regForm.reset();
    this.regForm.reset({
      fname : "Ajeet" // will not reset fname
      // fname : this.regForm.get('fname').value entered by user will always remain the same
      //fname : this.regForm.value.fname entered by user will always remain the same
    });
  }

  filldata() {
    // this.regForm.setValue({
    //   id: "jkjk",
    //   fname: "ejkjk",
    //   lname: "hjkk",
    //   email:"fds",
    //   mobileno:4759879
    // })

    this.regForm.patchValue({
      id: "jkjk",
      fname: "ejkjk",
      lname: "hjkk",
    })
  }
}
