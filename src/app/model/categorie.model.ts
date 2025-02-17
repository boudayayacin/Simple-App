export class Categorie {
    codec: number ;
    nomCat: string ;
    description: string ;

      constructor(c: number , n: string , des: string){
        this.codec = c ;
        this.nomCat = n ;
        this.description = des ;
      }
}