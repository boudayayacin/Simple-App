import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const articleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); 
  const router = inject(Router);

  if (authService.testerAdmin()) {
    return true;
  } else {
    router.navigate(['forbidden']);
    return false;
  }
};
