interface IElectronic {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
  }
  
  class Electronic implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getBrand(): string {
      return this.brand;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  }
  
  interface IPhone extends IElectronic {
    makeCall(number: string): void;
    getColor(): string;
  }
  
  class Phone implements IPhone {
    private brand: string;
    private model: string;
    private year: number;
    private color: string;
  
    constructor(brand: string, model: string, year: number, color: string) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    getBrand(): string {
      return this.brand;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    makeCall(number: string): void {
      console.log(`Calling ${number}...`);
    }
  
    getColor(): string {
      return this.color;
    }
  }
  
  interface ITelevision extends IElectronic {
    changeChannel(channel: number): void;
    getChannel(): number;
  }
  
  class Television implements ITelevision {
    private brand: string;
    private model: string;
    private year: number;
    private channel: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.channel = 0;
    }
  
    getBrand(): string {
      return this.brand;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    changeChannel(channel: number): void {
      this.channel = channel;
    }
  
    getChannel(): number {
      return this.channel;
    }
  }
  
  const motoV3: IPhone = new Phone("Motorola", "Razr V3", 2005, "colorado");
  console.log(motoV3.getYear());
  console.log(motoV3.getColor());
  
  const grunding: ITelevision = new Television("Grunding", "Caro pero el mejor", 1900);
  grunding.changeChannel(89);
  console.log(grunding.getChannel());
  