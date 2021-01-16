export interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Direccion;
  phone: string;
  website: string;
  company: Compagnia;
}

export interface Direccion {
  calle: string;
  edificio: string;
  ciudad: string;
  codigoPostal: string;
  geo: Geoposicion;
}

export interface Geoposicion {
  lat: string;
  lng: string;
}

export interface Compagnia {
  name: string;
  catchPhrase: string;
  bs: string;
}
