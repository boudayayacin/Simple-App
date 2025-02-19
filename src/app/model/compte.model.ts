export class Compte {
    nom! : string ;
    email! : string
    mot2pass! : string 
    tel?: number ;
    adresse?: string
    role!: string 

    constructor(n?: string , e?: string , m?: string ,t?: number , a?: string , r?: string) {
    if(n) this.nom = n ;
    if(e) this.email = e ;
    if(a) this.adresse = a ;
    if(m)  this.mot2pass = m ;
    if(t) this.tel = t ;
    if(r) this.role = r 
    }
}