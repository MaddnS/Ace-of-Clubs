import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  registerFormGroup: FormGroup;

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      pk: new FormControl(null),
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      pictures: new FormControl([]),
      is_active: new FormControl(false),
      is_staff: new FormControl(false),
      groups: new FormControl([2]),
    }, {validators: this.passwordMatchValidator});
  }


  /* Shorthands for form controls (used from within template) */
  get password() {
    return this.registerFormGroup.get('password');
  }

  get password2() {
    return this.registerFormGroup.get('password2');
  }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.registerFormGroup.hasError('passwordMismatch')) {
      this.password2.setErrors([{passwordMismatch: true}]);
    } else {
      this.password2.setErrors(null);
    }
  }

  passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
    if (formGroup.get('password').value === formGroup.get('password2').value) {
      return null;
    } else {
      return {passwordMismatch: true};
    }
  };

  createOrUpdateUser(): void {
    if (this.registerFormGroup.value.password !== this.registerFormGroup.value.password2) {
      alert('Passwords do not match!');
    } else if (this.registerFormGroup.value.password <= 8) {
      alert('Passwords must be 8 Characters long!');
    } else {
      this.userService.createUser(this.registerFormGroup.value)
        .pipe(first())
        .subscribe(
          data => {
            alert('User Registered successfully!!');
            this.router.navigate(['/login']);
          },
          (error) => {
            alert('Something went wrong, please check your login credentials!');
          });
    }
  }
}
