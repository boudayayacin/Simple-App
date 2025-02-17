import { Categorie } from "./categorie.model";

export class Article {
    codea! : number;
    libelle! : string;
    prix! : number;
    qte!  : number;
    categ !: Categorie
    dateAjout!  : Date;

    constructor(c?: number, l?: string, p?: number, ca?: Categorie , q?: number, d?: Date) {
        if (c) this.codea = c;
        if (l) this.libelle = l;
        if (p) this.prix = p;
        if (q) this.qte = q;
        if (d) this.dateAjout = d;
        if(ca) this.categ = ca ;
    }

    }