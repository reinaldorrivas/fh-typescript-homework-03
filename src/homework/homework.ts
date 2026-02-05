// * Objetos
type Carrazo = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

const batimovil: Carrazo = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

const bumblebee: Carrazo = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    console.log("Disparando");
  },
};

// * Arreglo de objetos personalizados
type Villano = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};

const villanos: Villano[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];

// * Multiples tipos

type Charles = {
  poder: string;
  estatura: number;
};

const charles: Charles = {
  poder: "psiquico",
  estatura: 1.78,
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};

const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

let mystique: Charles | Apocalipsis;

export const homework = (): void => {
  console.log("Batimovil:", batimovil);
  console.log("Bumblebee:", bumblebee);
  console.log("Bumblebee:", villanos);

  mystique = charles;
  console.log("Mystique:", mystique);
  mystique = apocalipsis;
  console.log("Mystique:", mystique);
};
