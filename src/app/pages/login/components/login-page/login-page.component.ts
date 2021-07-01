import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { AuthService } from '@core/services';


@Component({
  selector: 'shul-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup = null!
  public userExists$: Observable<boolean> | null = null;

  public readonly formFields = {
    username: {
      type: 'text',
      name: 'username',
      validators: [
        Validators.required
      ]
    },
    password: {
      type: 'password',
      name: 'password',
      Validators: [
        Validators.required
      ]
    }
  }

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly formBuilder: FormBuilder, private readonly authService: AuthService) { }

  public ngOnInit(): void {
    this.createLoginForm();
    this.subscribeToValueChanges();
  }
  
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  public onSubmit(): void {
    if (!this.formGroup) {
      return;
    }

    // this.authService.login(
    //   this.formGroup.get(this.formFields.username.name)?.value,
    //   this.formGroup.get(this.formFields.password.name)?.value
    // ).subscribe(console.log);
  }
  
  private createLoginForm(): void {
    this.formGroup = this.formBuilder.group({
      [this.formFields.username.name]: ['', ...this.formFields.username.validators],
      [this.formFields.password.name]: ['', ...this.formFields.password.Validators]
    });
  }
  
  private subscribeToValueChanges(): void {
    if (!this.formGroup) {
      return;
    }

    const usernameField = this.formGroup.get(this.formFields.username.name);

    if (!usernameField) {
      return;
    }

    // this.userExists$ = usernameField.valueChanges.pipe(
    //   takeUntil(this.destroy$),
    //   switchMap(username => this.authService.userExists(username))
    // );
  }
}
