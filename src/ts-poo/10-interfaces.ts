export interface Driver {
  dataase: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
}

// const driver: Driver = {
//   dataase: 'postgres',
//   password: '123456',
//   port: 5432,
// }

class PostgresDriver implements Driver {
  constructor(
    public dataase: string,
    public password: string,
    public port: number,
  ) { }

  connect() {
    console.log('Connecting to postgres...');
  }

  disconnect() {
    console.log('Disconnecting from postgres...');
  }
}

class OracleDriver implements Driver {
  constructor(
    public dataase: string,
    public password: string,
    public port: number,
  ) { }

  connect() {
    console.log('Connecting to oracle...');
  }

  disconnect() {
    console.log('Disconnecting from oracle...');
  }
}

