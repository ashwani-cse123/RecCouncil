
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const router= inject(Router);
  const loggedData = localStorage.getItem("userId");
  if(loggedData!==null){
    return true;
  }else{
    router.navigateByUrl("login");
    return false;
  }
  
};
