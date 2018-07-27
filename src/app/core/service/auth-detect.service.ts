import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthDetectService implements CanActivate {

  constructor(
    // private authService: AuthService,
    private router: Router,
    // private dataTypeService: DataTypeService
  ) { }

  public canActivate(): boolean | Promise<boolean> {
    const canActivate = false;
    if (!canActivate) {
      this.router.navigate(['/login']);
      return;
    }
    return canActivate;
  }
}
