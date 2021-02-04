import React from 'react';

export interface Menu {
  key:string;
  title:string;
  icon:any;
  path:string;
  main:() => any;
};

